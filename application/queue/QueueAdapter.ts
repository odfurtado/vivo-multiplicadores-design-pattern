export default interface QueueAdapter {
  send(message: MessageRequest): void;
}

export type MessageRequest = {
  messageId: string;
  sendTo: string;
  value: any;
};
