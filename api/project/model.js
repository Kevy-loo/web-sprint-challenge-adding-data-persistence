// build your `Project` model here
const db = require('../../data/dbConfig');

async function getProjects() {
    const projects = await db('projects')
    const solution = []
    for (let i = 0; i < projects.length; i++) {
        const outcome = {
            project_id: projects[i].project_id,
            project_name: projects[i].project_name,
            project_description: projects[i].project_description,
            project_completed: projects[i].project_completed === 0 ? false : true,
        }
        solution.push(outcome)
    }
    return solution
}

async function createProject(project) {
    const [project_id] = await db('projects').insert(project);
    return db('projects').where({project_id}).first();

}

module.exports = {
    getProjects,
    createProject
};