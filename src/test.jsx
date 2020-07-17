import { Transition } from 'vue'

export const App = () => (
  <Transition name="fade">
    { <span>Fragment</span> }
  </Transition>
)