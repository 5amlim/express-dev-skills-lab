 // controllers/skills.js

const Skill = require('../models/skill')

module.exports = {
    index,
    new: newSkill,
    create,
    delete: deleteSkill,
  };
  
  function index(req, res) {
      res.render('skills/index', {
      skills: Skill.getAll()
    });
  }

  function newSkill(req, res) {
    res.render('skills/new')
  }

  function create(req, res) {
    Skill.create(req.body)
    res.redirect('/skills')
  }

  function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id)
    res.redirect('/skills')
  }