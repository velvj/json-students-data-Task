const express = require('express')
const router = express.Router()


const Authcontroller = require("../controller/usercontroller")

router.get('/getlist', Authcontroller.getlist)
router.get('/getAvgGrade', Authcontroller.getAvgGrade)
router.get('/getGoodGrade', Authcontroller.getGoodGrade)
router.get('/getExcGrade', Authcontroller.getExcGrade)
router.get('/getFullName', Authcontroller.getFullName)
router.get('/getbyquery', Authcontroller.getbyquery)
router.get('/getGrade', Authcontroller.getGrade)
router.get('/getuser/:search', Authcontroller.getuser)


module.exports = router