const router = require('express').Router();
const ActivityController = require('./activity-controller');

router.get('/user_activity', ActivityController.getActivity)
module.exports = router;