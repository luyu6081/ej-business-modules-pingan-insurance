import {createApolloClient} from 'vue-cli-plugin-apollo/graphql-client'

const clients = {}

/**
 * @param {String} name
 * @param {Object} [options]
 * @return {ApolloClient}
 */
export default function useApollo (name = 'default', options) {
  // 模式 1: 获取已创建的实例
  if (!options) {
    return clients[name]
  }
  // 模式 2: 创建新实例，并覆盖已存在的同名实例
  else {
    const {apolloClient, wsClient} = createApolloClient(options)

    clients[name] = apolloClient || wsClient
    if (apolloClient && wsClient) {
      clients[name].ws = wsClient
    }
    return clients[name]
  }
}
