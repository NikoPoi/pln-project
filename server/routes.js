/* eslint-disable */
module.export = (app) => {
    app.post('./register', (req, res) => {
        res.send({
            message: `Hello ${req.body.email}! Your user has been registered! Have fun!`
        })
    })
}