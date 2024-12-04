import express from 'express'
import router from 'express.Router()'
import pool from '../dataBase'
import authController from '../controller/authController'

// USER ROUTES
router.post("/api/signUp", authController.signUp)

router.get("/api/getUserProfile", authController.getUserProfile)

module.exports = router

