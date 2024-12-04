import pool from '../dataBase'

exports.getPosts = (res, req, next) => {
    pool.query("SELECT * FROM post ORDER BY date_created DESC", (qErr, qRes) => {
        res.json(qRes.rows)
        console.log(qErr)
    })
}

exports.createPost = (res, req, next) => {
    const value = [req.body.title, req.body.body, req.body.uid,  req.body.username]
    pool.query(`INSERT ONTO post(title,body, user_id, author, date_created)
VALUES($1,$2,$3,$4, NOW())`, value, (qErr, qRes) => {
    res.json(qRes.rows)
    console.log(qErr)

})
}

exports.editPost = (req, res, next) => {
    const value = [req.body.title, req.body.body, req.body.uid, req.body.pid, req.body.username]
    pool.query(`UPDATE posts SET titl=$1, body=$2, userId=$3, author=$5, date_created=NOW()
    WHERE pid=$4` , value, (qErr, qRes) => {
        res.json(qRes.rows)
        console.log(qErr)

    })

}

exports.deletePostComment = (req, res, next) => {
    const post_id = req.body.post_id
    pool.query("DELETE FROM comments WHERE post_id = $1", [post_id], (qErr, qRes) => {
        res.json(qRes.rows)
        console.log(qErr)
    })
}

exports.deletePost = (req, res, next) => {
    const post_id = req.body.post_id
    pool.query("DELETE FROM comments WHERE pid = $1", [post_id], (qErr, qRes) => {
        res.json(qRes.rows)
        console.log(qErr)
    })
}