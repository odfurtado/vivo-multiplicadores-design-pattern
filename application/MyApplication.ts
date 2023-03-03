import JMS from '../internal/JMS';

export default class MyApplication {
  constructor(private jms: JMS) {}

  execute(order: Order) {
    this.validate(order);

    if (order.type === 'Venda') {
      this.checkStock(order.items);
      this.save(order);
    } else if (order.type === 'Reembolso') {
      this.save(order);
    } else {
      throw new Error(`Tipo de ordem inválida/não mapeada: ${order.type}`);
    }
    this.queueToProcess(order);
    return `Order do tipo '${order.type}' enviada para processamento!`;
  }

  //Pensar que nesse método podemos evoluir para um Kafka ou algum outro broker
  //Já tem uma implementação 'fake' de Kafka no internal/Kafka igual ao internal/JMS
  queueToProcess(order: Order) {
    let jmsRequest = {
      queueName: 'process.order',
      data: JSON.stringify(order),
    };
    this.jms.queueMessage(jmsRequest);
  }

  save(order: Order) {
    //Não precisa implementar
    console.log('Saving Order', order);
  }

  checkStock(items: OrderItem[]) {
    //Não precisa implementar
    console.log('Checking Stock', items);
  }

  validate(order: Order) {
    if (order.type === 'Venda') {
      //Ter no minimo 2 itens e ser de no minimo R$30,00
      if (!order.items || order.items.length < 2) {
        throw new Error('A ordem de venda precisa de no minimo 2 itens.');
      }
      const sum = order.items.reduce((currentSum, currentItem) => {
        currentSum += currentItem.value;
        return currentSum;
      }, 0);
      if (sum < 30) {
        throw new Error('A ordem de venda precisa ser de no minimo R$30,00');
      }
      return;
    } else if (order.type === 'Reembolso') {
      //Deve possuir apenas 1 item
      if (!order.items || order.items.length !== 1) {
        throw new Error('A ordem de reembolso precisa ter somente 1 item.');
      }
      return;
    }
    throw new Error(`Tipo de ordem inválida/não mapeada: ${order.type}`);
  }
}

type Order = {
  type: 'Venda' | 'Reembolso';
  items?: OrderItem[];
};

type OrderItem = {
  description: string;
  value: number;
};
