/* eslint-disable */
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
// const router = express.Router()
// const {sequelize} = require('./models')

// const posts = require('./api/posts')
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
// const config = require('./config/config')

// app.use(express.urlencoded({ extended: true}))
// app.use(express.json());

app.post('/register', (req, res) => {
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

app.listen(process.env.PORT || 8081);