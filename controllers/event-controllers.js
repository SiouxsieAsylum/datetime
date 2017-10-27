//best thing to do is to have another chained .then that handles the backend submission of invitees to the database
// eventController.create = (blah) =>
// Event create
// .then loop through invite creations? (hold them where? local storage?)
// .then res.render/res.redirect whereever
// .catch
const Event = require('../models/event');
const Invitation = require('../models/invitation');

const eventController = {}

module.exports = eventController;
