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