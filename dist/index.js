import { createVNode, Transition, createTextVNode } from 'vue';

var App = function App() {
  return createVNode(Transition, {
    "name": "fade"
  }, createVNode("span", null, [createTextVNode("Fragment")]));
};

export { App };
