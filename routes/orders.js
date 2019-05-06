import asyncMiddleware from '../Middleware/asyncMiddleware';
import _ from 'lodash';
import OrderController from '../controllers/OrderController';
import User from '../models/user';
import Product from '../models/product';
import { Exception } from '@nsilly/exceptions';

const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', asyncMiddleware(index));
router.put('/:id/status', asyncMiddleware(changeStatus));
router.put('/:id/note', asyncMiddleware(changeNote));


async function index(req, res) {
    const page = !_.isUndefined(req.query.page) ? parseInt(req.query.page) : 1;
    const per_page = !_.isUndefined(req.query.per_page) ? parseInt(req.query.per_page) : 20;
    const status = req.query.status;
    const controller = new OrderController();
    const params = {
        where: {},
        offset: (page - 1) * per_page,
        limit: per_page,
        include: [
            { model: User, attributes: ['email'] },
            { model: Product }
        ]
    }
    if (status) {
        params['where'] = {
            status: status
        }
    }
    const result = await controller.Model().findAndCountAll(params);
    res.json({
        data: result.rows, paginate: {
            current_page: page,
            per_page: per_page,
            total_pages: Math.ceil(result.count / per_page),
            total: result.count
        }
    });

}

async function changeStatus(req, res) {
    const id = req.params.id;
    const status = req.body.status;
    const controller = new OrderController();

    const result = await controller.Model().findOne({
        where: { id: id }
    })

    if (!result) {
        throw new Exception('order not found', 1000);
    }

    await result.update({ status: status });
    res.json({ data: 'success' })
}

async function changeNote(req, res) {
    const id = req.params.id;
    const note = req.body.note;
    const controller = new OrderController();

    const result = await controller.Model().findOne({
        where: { id: id }
    })

    if (!result) {
        throw new Exception('order not found', 1000);
    }

    await result.update({ note: note });
    res.json({ data: 'success' })
}

module.exports = router;
