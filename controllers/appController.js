const users = require("../models/signupUsers");
const post = require("../models/posts");
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
      console.log(loginUser);
      loginUser && res.redirect("home.ejs");
      res.render("home.ejs", { userInfo: loginUser });

      !loginUser && res.json({ message: "user already exists!" });
      const isPasswordValid = await bcrypt.compare(password, loginUser.password);
      console.log(loginUser.password);

      !isPasswordValid && res.json({ message: "username or password is not correct" });
      const token = jwt.sign({ id: loginUser._id }, "mahmoud");
      res.json({ token, loginUserId: loginUser._id });
      res.render("home.ejs");
    } catch (error) {
      console.log(`threr was an error: ${error}`);
    }
  },
  home: (req, res) => {
    try {
      res.render("home.ejs");
    } catch (error) {
      console.log(`there was an error: ${error}`);
    }
  },
  profile: (req, res) => {
    res.render("profile.ejs");
  },
  index: async (req, res) => {
    try {
      const showPosts = await post.find({});
      res.render("home.ejs", { posts: showPosts });
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
};
