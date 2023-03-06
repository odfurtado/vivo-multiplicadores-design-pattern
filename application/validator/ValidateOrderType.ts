import { Order } from '../Order';
import OrderValidator from './OrderValidator';

export default class ValidateOrderType extends OrderValidator {
  doValidation(order: Order): void {
    if (!(order.type === 'Venda' || order.type === 'Reembolso')) {
      throw new Error(`Tipo de ordem inválida/não mapeada: ${order.type}`);
    }
  }
}
