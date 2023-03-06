import { Order, OrderItem } from './Order';
import QueueAdapter from './queue/QueueAdapter';
import OrderValidator from './validator/OrderValidator';

export default class MyApplication {
  constructor(
    private readonly queue: QueueAdapter,
    private readonly orderValidator: OrderValidator
  ) {}

  execute(order: Order) {
    //Chain of Responsability
    this.orderValidator.validate(order);
    this.save(order);
    //Adapter
    this.queue.send({
      messageId: order.id,
      sendTo: 'process.order',
      value: order,
    });
    return `Order do tipo '${order.type}' enviada para processamento!`;
  }

  save(order: Order) {
    //Não precisa implementar
    console.log('Saving Order', order);
  }
}
