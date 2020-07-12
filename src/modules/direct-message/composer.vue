<template>
  <div class="dm-composer">
    <header class="dm-composer-header">
      <h1 class="dm-composer-header__title">Send To: {{state.sendTo}}</h1>
      <button class="dm-composer-header__close-btn" @click="close"><ej-icon icon="close"/></button>
    </header>

    <textarea v-model="state.content" class="dm-composer-editor"></textarea>

    <footer class="dm-composer-footer">
      <button class="dm-composer-footer__send-btn" @click="send">发送</button>
    </footer>
  </div>
</template>

<script>
  import {Icon as EjIcon} from '@ej/ui'

  import useModalLayer from '../modal-layer'
  import {sendDM} from './api'
  import state from './state'

  const {hide: hideModalLayer} = useModalLayer()

  export default {
    name: 'DmComposer',

    components: {
      EjIcon,
    },

    computed: {
      state: () => state,
    },

    methods: {
      send () {
        return sendDM(state.sendTo, state.content)
      },

      close () {
        hideModalLayer()
        this.reset()
      },

      reset () {
        state.sendTo = null
        state.content = null
      },
    },
  }
</script>

<style lang="scss">
  .dm-composer {
    @apply bg-white rounded shadow;

    width: 400px;

    &-header {
      @apply flex items-center border-b border-gray-light;

      height: 31px;

      &__title {
        margin-left: 12px;
      }

      &__close-btn {
        @apply ml-auto flex items-center justify-center;

        width: 30px;
        height: 30px;

        .ej-icon {
          width: 16px;
          height: 16px;
        }
      }
    }

    &-editor {
      @apply block w-full border-0 resize-none outline-none bg-gray-lighter;

      height: 10em;
      padding: 12px;
    }

    &-footer {
      @apply flex justify-end;

      padding: 8px 12px;

      &__send-btn {
        @apply bg-blue border-0 text-white;
      }
    }
  }
</style>
