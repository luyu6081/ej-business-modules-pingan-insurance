<template>
  <div>
    <p>
      <button @click="getMsg">Get <code>msg</code></button>
    </p>
    <p>{{msg}}</p>
    <hr>
    <p>
      <input type="text" v-model="username">
      <input type="password" v-model="password">
      <button @click="login">Login</button>
    </p>
    <pre>{{JSON.stringify(user, null, 2)}}</pre>
  </div>
</template>

<script>
  import gql from 'graphql-tag'

  import {useApollo} from '@'

  const apollo = useApollo('default')
  const auth = useApollo('auth')

  export default {
    data () {
      return {
        msg: 'null',

        username: null,
        password: null,
        user: null,
      }
    },

    methods: {
      async getMsg () {
        const {data: {msg}} = await apollo.query({
          query: gql`query {msg @client}`,
        })
        this.msg = msg
      },

      async login () {
        const {data: {user}} = await auth.mutate({
          mutation: gql`mutation ($username: String!, $password: String!) {user: authLogin(input: {username: $username, password: $password}) {userId, name, tenantName}}`,
          variables: {
            username: this.username,
            password: this.password,
          }
        })
        this.user = user
      },
    },
  }
</script>
