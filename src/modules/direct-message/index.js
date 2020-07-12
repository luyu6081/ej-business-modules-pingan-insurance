import useModalLayer from '../modal-layer'
import Composer from './composer.vue'
import state from './state'

export default function useDirectMessage () {
  const {show: showModalLayer} = useModalLayer()

  return {
    showComposer (sendTo) {
      state.sendTo = sendTo
      showModalLayer(Composer)
    },
  }
}
