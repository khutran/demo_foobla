import UserController from '../controllers/UserController';
import asyncMiddleware from '../Middleware/asyncMiddleware';
import _ from 'lodash';
import Customer from '../models/customers';

const express = require('express');
const router = express.Router();

/* GET users listing. */
router.put('/:id', asyncMiddleware(update));


async function update(req, res) {
  const id = req.params.id;
  const data = req.body;

  const controller = new UserController();
  const result = await controller.Model().findOne({
    where: {
      id: id
    },
    include: [
      { model: Customer }
    ]
  })

  if (!result) {
    throw new Exception('User not found', 1000);
  }

  const customer = await result.getCustomer();
  await customer.update(data);
  await customer.reload();

  res.json(customer);
}

module.exports = router;
