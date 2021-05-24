const db = require('../models')
const Tutorial = db.tutorials
const Comment = db.comments

// Create and Save New Tutorials
exports.createTutorial = (tutorial) => {
  return Tutorial.create({
    title: tutorial.title,
    description: tutorial.description
  })
    .then(tutorial => {
      console.log(`>> Created tutorial: ${JSON.stringify(tutorial, null, 4)}`)
      return tutorial
    })
    .catch(err => {
      console.log(`>> Error while creating tutorial ${err}`)
    })
}

// Create and Save New Comments
exports.createComment = (tutorial_id, comment) => {
  return Comment.create({
    name: comment.name,
    text: comment.text,
    tutorial_id: tutorial_id
  })
    .then(comment => {
      console.log(`>> Created comment: ${JSON.stringify(comment, null, 4)}`)
      return comment
    })
    .catch(err => {
      console.log(`>> Error while creating comment: ${err}`)
    })
}

// Get The Comment For A Given Tutorial
exports.findTutorialById = (tutorial_id) => {
  return Tutorial.findByPk(tutorial_id, { include: ['comments'] })
    .then(tutorial => {
      return tutorial
    })
    .catch(err => {
      console.log(`>> Error while finding tutorial: ${err}`)
    })
}

// Get The Comments For A Given Comment ID
exports.findCommentById = (id) => {
  return Comment.findByPk(id, { include: ['tutorial'] })
    .then(comment => {
      return comment
    })
    .catch(err => {
      console.log(`>> Error while finding comment: ${err}`)
    })
}

// Get All Tutorials Include Comments
exports.findAll = () => {
  return Tutorial.findAll({
    include: ['comments']
  }).then(tutorials => {
    return tutorials
  })
}
