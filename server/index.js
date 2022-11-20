const express = require('express');
const morgan = require('morgan');
const app = express()
const router = express.Router()
const cors = require('cors')
// const {sequelize} = require('./models')

// const posts = require('./api/posts')
const port = process.env.PORT || 8081;
// const config = require('./config/config')

// app.use(express.urlencoded({ extended: true}))
// app.use(express.json());
app.use(morgan('combined'))
app.use(cors())

app.post('/status', (res, req) => {
    res.send({
        message: `Hello ${req.body.email}, your user has been registered! Have Fun!!!`
    })
})

// sequelize.sync()
//     .then(() => {
//         app.listen(port, () => console.log(`Server started on port ${config}` ))
//     })
// router.use('/posts', posts);

// app.use('/api', router);

app.listen(port, () => console.log(`Server listening on port ${port}!`));