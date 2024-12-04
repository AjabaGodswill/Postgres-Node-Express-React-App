import pool from '../dataBase'


exports.signUp = (req, res, next) => {
    const values = [req.body.profile.nickname, req.body.profile.email, req.body.profile.email_verified]
    pool.query(`INSERT INTO users(username, email, email_verified, date_created) 
    VALUES($1,$2,$3, NOW()) ON CONFLICT DO NOTHING`,
        values,  (qErr, qRes) => {
            res.json(qRes.rows)
            console.log(qErr)
        })
}

exports.getUserProfile = (req, res, next) => {
    const email = String(req.body.profile.email)
    pool.query(`SELECT * FROM users WHERE email=$1`,
        email=[email],  (qErr, qRes) => {
            res.json(qRes.rows)
            console.log(qErr)
        })
}