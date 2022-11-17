const express = require('express')
const router = express.Router()
const knex = require('../database')

router.get('/', async (request, response) => {
    try {
        const posts = await knex('posts')

        response.json(posts);
    } catch (error) {
        throw error;
    }
})

module.exports = router;