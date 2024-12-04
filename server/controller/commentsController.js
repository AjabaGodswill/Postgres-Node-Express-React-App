import pool from '../dataBase'


exports.getAllComments = (req, res, next) => {
    const post_id = String(req.query.post_id)
    pool.query("SELECT * FROM comments WHERE post_id=$1", [post_id],
        (qErr, qRes) => {
            res.json(qRes.rows)
            console.log(qErr)

        }
    )

}

exports.createComments = (req, res, next) => {
    const values = [req.body.comment, req.body.user_id, req.body.username, req.body.post_id]
    pool.query("INSERT INTO comments(comment, user_id, author, post_id, date_created) VALUES($1,$2,$3,$4 NOW())",
        values, (qErr, qRes) => {
            res.json(qRes.rows)
            console.log(qErr)
        }
    )

}

exports.deleteComments = (req, res, next) => {
    const cid = req.body.cid
    pool.query("DELETE FROM comments WHERE cid=$1", [cid],
        (qErr, qRes) => {
            res.json(qRes.rows)
            console.log(qErr)

        }
    )

}