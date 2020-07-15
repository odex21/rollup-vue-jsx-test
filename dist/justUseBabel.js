import { createTextVNode, createVNode, Fragment } from "vue"
export const App = () =>
  createVNode(Fragment, null, [ createVNode("span", null, [ createTextVNode("I'm") ]), createVNode("span", null, [ createTextVNode("Fragment") ]) ])
