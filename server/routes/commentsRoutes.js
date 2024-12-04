import express from 'express'
import router from 'express.Router()'
import commentsController from '../controller/commentsController'

// COMMENTS ROUTE
router.get("/api/allPostComment", commentsController.getAllComments)


router.post("/api/createComment", commentsController.createComment)

router.put("/api/editcomment", commentsController.editComments)

router.delete("/api/deleteComment", commentsController.deleteComments)


module.exports = router