const router = require("express").Router();
const appController = require("../controllers/appController");

router.get("/", appController.start);
router.get("/home.ejs", appController.index);
router.get("/profile.ejs", appController.profile);

router.post("/login", appController.login);
router.post("/signup", appController.signup);
router.post("/addpost", appController.addPost);

router.delete("/delete/:id", appController.deletepost);

module.exports = router;
