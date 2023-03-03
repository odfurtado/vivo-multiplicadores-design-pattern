export default class JMS {
  queueMessage(request: JMSRequest) {
    //Não precisa implementar
    console.log(request);
  }
}

type JMSRequest = {
  queueName: string;
  data: string;
};
