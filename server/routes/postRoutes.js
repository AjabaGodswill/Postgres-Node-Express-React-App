import express from 'express'
import router from 'express.Router()'
import pool from '../dataBase'
import postController from '../controller/postsController'

// POSTs ROUTES
router.get('/api/allPosts', postController.getPosts)

router.post("/api/createPost", createPost)

router.put("/api/editPost", postController.editPost)

router.delete("/api/deletePostComments", postController.deletePostComment)

router.delete("/api/deletePost", deletePost)



module.exports = router