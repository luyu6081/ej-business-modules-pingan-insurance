<template>
  <div>
    <button @click="showComposer()">Compose Direct Message</button>
  </div>
</template>

<script>
  import {useDirectMessage} from '@'

  const {showComposer} = useDirectMessage()

  export default {
    methods: {
      showComposer,
    },
  }
</script>
