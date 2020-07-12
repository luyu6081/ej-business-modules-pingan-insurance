import Vue from 'vue'

import ModalLayer from './modal-layer.vue'

const Ctor = Vue.extend(ModalLayer)

let modalLayer

export default function useModalLayer () {
  if (!modalLayer) {
    modalLayer = new Ctor()
    modalLayer.$mount(document.createElement('div'))
    document.body.append(modalLayer.$el)
  }

  return {
    show (content) {
      modalLayer.show(content)
    },

    hide () {
      modalLayer.hide()
    },
  }
}
