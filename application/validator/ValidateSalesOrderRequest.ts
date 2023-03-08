import { Order } from '../Order';
import OrderValidator from './OrderValidator';

export default class ValidateSalesOrderRequest extends OrderValidator {
  doValidation(order: Order): void {
    if (order.type === 'Venda') {
      //Ter no minimo 2 itens e ser de no minimo R$30,00
      if (!order.items || order.items.length < 2) {
        throw new Error('A ordem de venda precisa de no minimo 2 itens.');
      }
      const sum = order.items.reduce(
        (currentSum, currentItem) => currentSum + currentItem.value,
        0
      );
      if (sum < 30) {
        throw new Error('A ordem de venda precisa ser de no minimo R$30,00');
      }
    }
  }
}
