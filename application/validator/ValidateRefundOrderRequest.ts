import { Order } from '../Order';
import OrderValidator from './OrderValidator';

export default class ValidateRefundOrderRequest extends OrderValidator {
  doValidation(order: Order): void {
    if (order.type === 'Reembolso') {
      //Deve possuir apenas 1 item
      if (!order.items || order.items.length !== 1) {
        throw new Error('A ordem de reembolso precisa ter somente 1 item.');
      }
    }
  }
}
