import { createStore } from 'redux';
import reducers from './reducers/index';

const storeConfigure = () => {
  const initialStore = { mentors: [
    { name: 'Mario' },
    { name: 'Suha' },
    { name: 'Shireen' },
    { name: 'Mavis' },
    { name: 'Lubes' },
    { name: 'Yvonne' },
    { name: 'Finn' },
    { name: 'Zooey' },
    { name: 'Lawson' },
    { name: 'Jack' }
  ] };

  const store = createStore(reducers, initialStore);

  return store;
};

export default storeConfigure;
