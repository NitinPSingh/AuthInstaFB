const express = require('express');
const router = express.Router();
const instaAuthController  = require('./instagram/instaAuthController')
const instaPage = require("./instagram/instaPage")
const fbAuthController  = require('./facebook/facebookAuthController')
const fbPage = require('./facebook/fbPage')

router.get("/insta/callback",instaAuthController.getAccessCode)
router.get("/insta",instaPage.getIntaPage)
router.get("/fb/callback",fbAuthController.getAccessCode)
router.get("/fb",fbPage.getFBPage)
module.exports = router