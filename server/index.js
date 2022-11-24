/* eslint-disable */
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const {sequelize} = require('./models')
const config = require('./config/config')
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

require('./routes')(app)

sequelize.sync()
    .then(() => {
        app.listen(config.port)
        console.log(`Server started on port ${config.port}`)
    })
// router.use('/posts', posts);

// app.use('/api', router);