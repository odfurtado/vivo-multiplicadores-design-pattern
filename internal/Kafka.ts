export default class Kafka {
  send(request: KafkaRequest) {
    //Não precisa implementar
    console.log(request);
  }
}

type KafkaRequest = {
  topic: string;
  messageKey?: string;
  value: any;
};
