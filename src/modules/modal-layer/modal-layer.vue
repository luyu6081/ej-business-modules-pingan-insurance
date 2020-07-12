<template>
  <transition name="ej-modal-layer-">
    <div v-if="visible" class="ej-modal-layer">
      <div class="content-wrap">
        <component :is="content"/>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'ModalLayer',

    data () {
      return {
        visible: false,
        content: null,
      }
    },

    methods: {
      show (content) {
        this.content = content
        this.visible = true
      },

      hide () {
        this.visible = false
        this.content = null
      },
    },
  }
</script>

<style lang="scss">
  .ej-modal-layer {
    @apply w-full h-full fixed top-0 left-0 flex flex-col items-center;

    background: transparentize(black, .5);

    &--enter, &--leave-to {
      background: transparent;

      > .content-wrap {
        transform: translateY(50px);
        opacity: 0;
      }
    }

    &--enter-to, &--leave {
      > .content-wrap {
        transform: translateY(0);
        opacity: 1;
      }
    }

    &--enter-active, &--leave-active {
      transition: background 300ms easeOutCubic;

      > .content-wrap {
        transition: transform 300ms easeOutCubic, opacity 300ms easeOutCubic;
      }
    }

    > .content-wrap {
      @apply flex-1;

      margin-top: 100px;
      margin-bottom: 100px;
    }
  }
</style>
