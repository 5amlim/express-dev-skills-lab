// models/skill.js
const skills = [
    {id: 123123, skill: 'Cooking'}, 
    {id: 123124, skill: 'Coding'}, 
    {id: 123125, skill: 'JavaScript'}, 
    {id: 123126, skill: 'HTML'}, 
    {id: 123127, skill: 'CSS'}];

module.exports = {
    getAll,
    create,
    deleteOne,
    getOne,
};

function getAll() {
    return skills;
}

function create(skill) {
    skill.id = Date.now() % 1000000
    skills.push(skill)
}

function deleteOne(id) {
    id = parseInt(id)
    const idx = skills.findIndex(skill => skill.id === id)
    skills.splice(idx, 1)
}

function getOne(id) {
    id = parseInt(id)
    return skills.find((skill) => skill.id === id)
  }