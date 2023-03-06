import Kafka from '../../internal/Kafka';
import QueueAdapter, { MessageRequest } from './QueueAdapter';

export default class KafkaAdapter implements QueueAdapter {
  private readonly kafka = new Kafka();

  send(message: MessageRequest): void {
    this.kafka.send({
      topic: message.sendTo,
      value: message.value,
      messageKey: message.messageId,
    });
  }
}
