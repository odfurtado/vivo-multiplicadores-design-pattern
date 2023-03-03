// Import stylesheets
import MyApplication from './application/MyApplication';
import Display from './internal/Display';
import JMS from './internal/JMS';
import './style.css';

const jms = new JMS();
const application = new MyApplication(jms);
var output: any;
try {
  output = application.execute({
    type: 'Venda',
    items: [
      { description: 'Produto 1', value: 10 },
      { description: 'Produto 2', value: 25 },
    ],
  });
} catch (e: any) {
  output = e.message;
}

new Display().print(`<h2>${output}</h2>`);
