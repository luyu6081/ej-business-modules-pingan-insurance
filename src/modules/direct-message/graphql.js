import gql from 'graphql-tag'

export const MUTATION_SEND_DM = gql`
  mutation sendDM($sendTo: ID!, $content: String!) {
    resData: ucSendDM(input: {receiver: $sendTo, content: $content}) {
      id
      createTime
    }
  }
`
