import { load, Vue, mountComponent, loadById } from 'hypernova-vue';
import MonthlySalesChart from './components/MonthlySalesChart.vue';
import NOVA_NAME from './constants';

const render = (name, { node, data }) => {
  if (name === NOVA_NAME) {
    return mountComponent(Vue.extend(MonthlySalesChart), node, data);
  }
};

document.addEventListener('NovaMount', ({ detail }) => {
  const { name, id } = detail;

  const payload = loadById(name, id);

  if (payload) {
    render(name, payload);
  }
});

load(NOVA_NAME).forEach(render.bind(null, NOVA_NAME));
