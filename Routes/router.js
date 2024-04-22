const express = require('express')
const userController = require('../Controllers/userControllers')
const projectController = require('../Controllers/projectController')
const jwtMiddleware = require('../Controllers/Middlewares/jwtMiddleware')
const multerConfig = require('../Controllers/Middlewares/multerMiddleware')
const router = new express.Router()


//register
router.post('/register',userController.register)

// login
router.post('/login',userController.login)

//add project route
router.post('/add-project',jwtMiddleware,multerConfig.single('projectImage'),projectController.addProject)

//get all projects
router.get('/all-projects',jwtMiddleware,projectController.getAllProjects)

//getUserProjects
router.get('/user-projects',jwtMiddleware,projectController.getUserProjects)

//gethomeProjects
router.get('/home-projects',projectController.getHomeProjects) //no need of jwtMiddleware because no need to login there everyone can see it ,no token needed

//edit project
router.put('/edit-project/:pid',jwtMiddleware,multerConfig.single('projectImage'),projectController.editProject)

//remove project
router.delete('/remove-project/:pid',jwtMiddleware,projectController.removeProject)

//editUser
router.put('/edit-user',jwtMiddleware,multerConfig.single("profileImage"),userController.editUser)
//export router
module.exports = router