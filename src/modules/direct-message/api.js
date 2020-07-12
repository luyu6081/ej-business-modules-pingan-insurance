import useApollo from '../apollo'
import * as gql from './graphql'

const apollo = useApollo()

/**
 * 发送私信
 *
 * @param {String} sendTo - 收件人 ID
 * @param {String} content - 私信内容
 * @return {{id: String, createTime: String}}
 */
export async function sendDM (sendTo, content) {
  const {data: {resData}} = await apollo.mutate({
    mutation: gql.MUTATION_SEND_DM,
    variables: {
      sendTo,
      content,
    },
  })
  return resData
}
