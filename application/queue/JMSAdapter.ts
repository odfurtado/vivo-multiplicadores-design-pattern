import JMS from '../../internal/JMS';
import QueueAdapter, { MessageRequest } from './QueueAdapter';

export default class JMSAdapter implements QueueAdapter {
  private readonly jms = new JMS();

  send(message: MessageRequest) {
    this.jms.queueMessage({
      queueName: message.sendTo,
      data: JSON.stringify(message.value),
    });
  }
}
