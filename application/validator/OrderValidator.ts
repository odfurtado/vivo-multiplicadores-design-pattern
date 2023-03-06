import { Order } from '../Order';

export default abstract class OrderValidator {
  constructor(private readonly next?: OrderValidator) {}

  //Template Method
  abstract doValidation(order: Order): void;

  validate(order: Order) {
    this.doValidation(order);
    if (this.next) {
      this.next.validate(order);
    }
  }
}
