import express from 'express'
import router from 'express.Router()'
import pool from '../dataBase'

// POST ROUTES
router.get('/api/allPosts', (res, req, next) => {
    pool.query("SELECT * FROM post ORDER BY date_created DESC", (qErr, qRes) => {
        res.json(qRes.rows)
        console.log(qErr)
    })
    // next()
})

router.post("/api/createPost", (req, res, next) => {
    const value = [req.body.title, req.body.body, req.body.uid, req.body.username]
    pool.query(`INSERT INTO posts(title,body, user_id, author, date_created) 
    VALUES($1,$2,$3,$4 NOW())`, value, (qErr, qRes) => {
        if(qErr) return next(qErr)
        res.json(qRes.rows)
    } )
})




module.exports = router