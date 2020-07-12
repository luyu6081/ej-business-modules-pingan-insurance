<template>
  <div>
    <form @submit.prevent="logIn">
      <input type="text" v-model="username" placeholder="Username">
      <input type="password" v-model="password" placeholder="Password">
      <label><input type="checkbox" v-model="rememberMe">Remember Me</label>
      <button>Log In</button>
      <button type="button" :disabled="!me.value" @click="logOut">Log Out</button>
    </form>
    <hr>
    <pre>{{JSON.stringify(me.value || 'NOT LOGGED IN', null, 2)}}</pre>
  </div>
</template>

<script>
  import {useLogin} from '@'

  const {me, logIn, logOut} = useLogin()

  export default {
    name: 'home',

    data () {
      return {
        me,

        username: null,
        password: null,
        rememberMe: false,
      }
    },

    methods: {
      logIn () {
        logIn(this.username, this.password, this.rememberMe)
      },

      logOut () {
        logOut()
      },
    },
  }
</script>

<style lang="scss" scoped>
  input[type=checkbox] {
    @apply mr-2;
  }

  button {
    @apply ml-8 p-2 leading-none bg-black text-white;

    &[disabled] {
      @apply bg-gray-dark;
    }
  }
</style>
