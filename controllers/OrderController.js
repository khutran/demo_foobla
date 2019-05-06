import { Controller } from './Controller'
import Order from '../models/order';

export default class OrderController extends Controller {
    Model() {
        return Order;
    }
};
