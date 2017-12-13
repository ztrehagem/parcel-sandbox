import Vue from 'vue';
import MyModule from './my-module';
import MyComponent from './components/my-component.vue';

new MyModule();

(async () => {
  const a = await (async () => {
    return 1;
  })();
  console.log(a);
})();

const app = new Vue({
  el: '#vue-app-root',
  template: '<my-component></my-component>',
  components: {
    MyComponent,
  },
});
