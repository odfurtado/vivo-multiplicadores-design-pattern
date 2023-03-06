// Import stylesheets
import MyApplication from './application/MyApplication';
import JMSAdapter from './application/queue/JMSAdapter';
import OrderValidatorBuilder from './application/validator/OrderValidatorBuilder';
import Display from './internal/Display';
import './style.css';

const queueAdapter = new JMSAdapter();
const orderValidator = OrderValidatorBuilder.build();
const application = new MyApplication(queueAdapter, orderValidator);
var output: any;
try {
  output = application.execute({
    id: '123',
    type: 'Venda',
    items: [
      { description: 'Produto 1', value: 10 },
      { description: 'Produto 2', value: 25 },
    ],
  });
} catch (e: any) {
  output = `Errro: ${e.message}`;
}

new Display().print(`<h2>${output}</h2>`);
