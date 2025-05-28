const express = require('express');
const router = express.Router();
const Platform = require('../models/platform');

router.post('/', async (req, res) => {
  try {
    const platform = new Platform(req.body);
    await platform.save();
    res.status(201).json(platform);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create platform' });
  }
});

// Get all platforms
router.get('/', async (req, res) => {
  try {
    const platforms = await Platform.find();
    res.json(platforms);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch platforms' });
  }
});

// Connect/Disconnect a platform
router.put('/:id', async (req, res) => {
  try {
    const platform = await Platform.findById(req.params.id);
    platform.connected = !platform.connected;
    await platform.save();
    res.json(platform);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update platform' });
  }
});



// Add new user
router.post('/user', async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email
    });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create user' });
  }
});

module.exports = router;
