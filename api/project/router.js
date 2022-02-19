// build your `/api/projects` router here
const router = require('express').Router();
const Project = require('./model');

router.get('/', async (req, res) => {
    try {
        const project = await Project.getProjects();
        res.status(200).json(project);

    } catch(error) {
        console.log('error', error);
        res.status(500).json({message: 'Error retrieving projects'})
    }
})

router.post('/', async (req, res) => {
    try {
        const newProject = await Project.createProject(req.body)
        res.status(201).json({
            project_id: newProject.project_id,
            project_name: newProject.project_name,
            project_description: newProject.project_description,
            project_completed: newProject.project_completed === 0 ? false : true
        })
    } catch (error) {
        console.log('error', error);
        res.status(500).json({ message: 'Error creating projects' })
    }
})

module.exports = router;