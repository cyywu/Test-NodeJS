const express = require('express');
const masterRouter = express.Router();

masterRouter.get('', async (req, res) => {
  res.render('master');
});

module.exports = masterRouter;
