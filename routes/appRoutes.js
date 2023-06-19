const router = require("express").Router();
const appController = require("../controllers/appController");

router.get("/", appController.start);
router.get("/home.ejs", appController.index);
router.get("/story.ejs", appController.story);
router.get("/friends.ejs", appController.friends);
router.get("/group.ejs", appController.group);
router.get("/game.ejs", appController.game);

router.get("/update/:id", appController.editComment);
router.put("/update/:id", appController.updateComment);

router.post("/login", appController.login);
router.post("/signup", appController.signup);
router.post("/addpost", appController.addPost);
router.post("/addComment", appController.addComment);
router.post("/createStory", appController.createStroy);

router.delete("/delete/:id", appController.deletepost);
router.delete("/deleteComment/:id", appController.deleteComment);

module.exports = router;