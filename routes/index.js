import user from './users';
import order from './orders';

const express = require('express');
const router = express.Router();

router.use('/users', user);
router.use('/orders', order);

module.exports = router;
