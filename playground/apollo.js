/*
 * 初始化开发环境的 Apollo，省得后面要频繁创建实例
 */

import gql from 'graphql-tag'

import useApollo from 'modules/apollo'

useApollo('default', {
  httpEndpoint: 'http://mds-all-frontier.dev.jinxin.cloud/graphql',
  httpLinkOptions: {
    credentials: 'include',
  },
  typeRefs: gql`
    type Query {
      msg: String!
    }
  `,
  resolvers: {
    Query: {
      msg: () => 'hello world',
    },
  },
})

useApollo('auth', {
  httpEndpoint: 'http://auth-frontier.dev.jinxin.cloud/graphql',
  httpLinkOptions: {
    credentials: 'include',
  },
})
