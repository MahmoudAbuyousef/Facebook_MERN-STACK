const users = require("../models/SignupUsers");
const post = require("../models/Posts");
const comment = require("../models/Comment");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  start: (req, res) => {
    try {
      res.render("index");
      console.log(`Start Facebook App`);
    } catch (error) {
      console.log(`there was an error: ${error}`);
    }
  },
  signup: async (req, res) => {
    const { firstname, lastname, emailorphone, password, day, month, year, gender } = req.body;
    const user = await users.findOne({ emailorphone });
    if (user) {
      res.redirect("/");
    } else {
      const hashedPassword = bcrypt.hashSync(password, 10);
      const addUser = new users({
        firstname: firstname,
        lastname: lastname,
        emailorphone: emailorphone,
        password: hashedPassword,
        day: day,
        month: month,
        year: year,
        gender: gender,
      });
      await addUser.save().then(() => {
        console.log("Add new user");
        res.redirect("/");
      });
    }
  },
  login: async (req, res) => {
    try {
      const { username, password } = req.body;
      const loginUser = await users.findOne({ username });
      if (loginUser) {
        res.redirect("home.ejs");
        console.log(loginUser);
      }

      !loginUser && res.json({ message: "user already exists!" });
      const isPasswordValid = await bcrypt.compare(password, loginUser.password);

      !isPasswordValid && res.json({ message: "username or password is not correct" });
      const token = jwt.sign({ id: loginUser._id }, "mahmoud");
      res.json({ token, loginUserId: loginUser._id });
      res.render("home.ejs");
    } catch (error) {
      console.log(`threr was an error: ${error}`);
    }
  },
  friends: (req, res) => {
    res.render("friends.ejs");
  },
  index: async (req, res) => {
    try {
      const userInfo = await users.findOne({});
      const showPosts = await post.find({});
      const indexComments = await comment.find({});
      if (userInfo) {
        res.render("home.ejs", { userData: userInfo, posts: showPosts, showComments: indexComments });
      }
    } catch (error) {
      console.log(`there was an error: ${error}`);
    }
  },
  addPost: (req, res) => {
    const addPost = new post({ postBody: req.body.postBody });
    addPost.save().then(() => res.redirect("home.ejs"));
    console.log("new comment");
  },
  deletepost: async (req, res) => {
    try {
      await post.deleteOne({ _id: req.params.id });
      res.redirect("/home.ejs");
    } catch (error) {
      console.log(`there was an error: ${error}`);
    }
  },
  addComment: (req, res) => {
    const addComments = new comment({ commentBody: req.body.commentBody });
    addComments.save().then(() => {
      console.log("Add New Commnet");
      res.redirect("home.ejs");
    });
  },
  deleteComment: async (req, res) => {
    try {
      await comment.deleteOne({ _id: req.params.id });
      res.redirect("/home.ejs");
    } catch (error) {
      console.log(`there was an error: ${error}`);
    }
  },
  editComment: async (req, res) => {
    try {
      const id = req.params.id;
      const updateComment = await comment.find({});
      const showPosts = await post.find({});
      const indexComments = await comment.find({});
      res.render("EditComment.ejs", { comments: updateComment, posts: showPosts, idComment: id, showComments: indexComments });
    } catch (error) {
      console.log(`there was an error: ${error}`);
    }
  },
  updateComment: async (req, res) => {
    try {
      const id = req.params.id;
      await comment.findByIdAndUpdate(id, { commentBody: req.body.commentBody });
      res.redirect("/home.ejs");
    } catch (error) {
      console.log(`there was an error: ${error}`);
    }
  },
};
