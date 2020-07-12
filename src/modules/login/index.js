import {ref} from '@vue/composition-api'

import useApolloClient from '../apollo-client'
import * as gql from './graphql'

let exports = null

export default function useLogin () {
  if (!exports) {
    exports = {}

    /** @type {{value: User | null}} */
    exports.me = ref(null)

    exports.fetchMe = async () => {
      const apollo = useApolloClient('auth')
      const {data: {me}} = await apollo.query({
        query: gql.QUERY_ME,
      })
      delete me.__typename
      exports.me.value = me
    }

    exports.logIn = async (variables) => {
      const apollo = useApolloClient('auth')
      const {data: {me}} = await apollo.mutate({
        mutation: gql.MUTATION_LOG_IN,
        variables,
      })
      delete me.__typename
      exports.me.value = me
    }

    exports.logOut = async () => {
      const apollo = useApolloClient('auth')
      await apollo.mutate({
        mutation: gql.MUTATION_LOG_OUT,
      })
      exports.me.value = null
    }
  }

  return exports
}
