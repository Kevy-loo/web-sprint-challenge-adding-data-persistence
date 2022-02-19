// build your `/api/resources` router here
const router = require('express').Router();
const Resource = require('./model');

router.get('/', async (req, res) => {
    try {
        const resource = await Resource.getResources();
        res.status(200).json(resource)
    } catch (error) {
        console.log('error', error);
        res.status(500).json({ message: 'Error retrieving resource' })
    }

})

router.post('/', async (req, res) => {
    try {
        const resource = Resource.createResource(req.body)
        res.status(201).json(resource)
    } catch (error) {
        console.log('error', error);
        res.status(500).json({ message: 'Error retrieving resource' })
    }
})





module.exports = router;
