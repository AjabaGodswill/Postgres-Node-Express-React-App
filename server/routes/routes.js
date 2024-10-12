import express from 'express'
import router from 'express.Router()'
import pool from '../dataBase'

// POSTs ROUTES
router.get('/api/allPosts', (res, req, next) => {
    pool.query("SELECT * FROM post ORDER BY date_created DESC", (qErr, qRes) => {
        res.json(qRes.rows)
        console.log(qErr)
    })
})

router.post("/api/createPost", (req, res, next) => {
    const value = [req.body.title, req.body.body, req.body.uid, req.body.username]
    pool.query(`INSERT INTO posts(title,body, user_id, author, date_created) 
    VALUES($1,$2,$3,$4 NOW())`, value, (qErr, qRes) => {
        if(qErr) return next(qErr)
        res.json(qRes.rows)
        console.log(qErr)
    })
})

router.put("/api/editPost", (req, res, next) => {
    const value = [req.body.title, req.body.body, req.body.uid, req.body.pid, req.body.username]
    pool.query(`UPDATE posts SET titl=$1, body=$2, userId=$3, author=$5, date_created=NOW()
    WHERE pid=$4` , value, (qErr, qRes) => {
        if (qErr) return next(qErr)
        res.json(qRes.rows)
        console.log(qErr)

    })

})

router.delete("/api/deletePostComments", (req, res, next) => {
    const post_id = req.body.post_id
    pool.query("DELETE FROM comments WHERE post_id = $1", [post_id], (qErr, qRes) => {
        if (qErr) return next(qErr)
        res.json(qRes.rows)
        console.log(qErr)
    })
})

router.delete("/api/deletePost", (req, res, next) => {
    const post_id = req.body.post_id
    pool.query("DELETE FROM comments WHERE pid = $1", [post_id], (qErr, qRes) => {
        if (qErr) return next(qErr)
        res.json(qRes.rows)
        console.log(qErr)
    })
})

// COMMENTS ROUTE
router.get("/api/allPostComment", (req, res, next) => {
    const post_id = String(req.query.post_id)
    pool.query("SELECT * FROM comments WHERE post_id=$1", [post_id],
        (qErr, qRes) => {
            res.json(qRes.rows)
            console.log(qErr)

    })

})
router.post("/api/createComment", (req, res, next) => {
    const values = [req.body.comment, req.body.user_id, req.body.username, req.body.post_id]
    pool.query("INSERT INTO comments(comment, user_id, author, post_id, date_created) VALUES($1,$2,$3,$4 NOW())",
        values, (qErr, qRes) => {
            res.json(qRes.rows)
            console.log(qErr)

    })

})

router.put("/api/editcomment", (req, res, next) => {
    const values = [req.body.comment, req.body.user_id, req.body.post_id,req.body.username, req.body.cid]
    pool.query("UPDATE comments SET (comment = $1, user_id =$2, post_id=$3 author =$4, date_created = NOW())) WHERE cid=$5",
        values, (qErr, qRes) => {
            res.json(qRes.rows)
            console.log(qErr)

    })

})

router.delete("/api/deleteComment", (req, res, next) => {
    const cid = req.body.cid
    pool.query("DELETE FROM comments WHERE cid=$1", [cid],
         (qErr, qRes) => {
            res.json(qRes.rows)
            console.log(qErr)

    })

})


module.exports = router