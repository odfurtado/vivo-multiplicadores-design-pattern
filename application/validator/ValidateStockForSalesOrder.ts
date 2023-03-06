import { Order, OrderItem } from '../Order';
import OrderValidator from './OrderValidator';

export default class ValidateStockForSalesOrder extends OrderValidator {
  doValidation(order: Order): void {
    if (order.type === 'Venda') {
      this.checkStock(order.items);
    }
  }

  checkStock(items: OrderItem[]) {
    //Não precisa implementar
    console.log('Checking Stock', items);
  }
}
