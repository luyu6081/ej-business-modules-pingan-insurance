import gql from 'graphql-tag'

export const QUERY_USERS = gql`
  query users($keyword: String, $offset: Int = 0, $limit: Int = 20) {
    users: authSelectAllUser(input: {name: $keyword, offset: $offset, limit: $limit}) {
      data {
        id: userId
        username
        name
        avatar: userAvatar
        email
      }
    }
  }
`

export const MUTATION_CREATE_USER = gql`
  mutation createUser($user: OauthSaveUserDTO!) {
    success: registerUser(input: $user)
  }
`

export const MUTATION_REMOVE_USER = gql`
  mutation removeUser($ids: [ID!]!) {
    success: deleteOauthUser(input: $ids)
  }
`

export const MUTATION_UPDATE_USER = gql`
  mutation updateUser($user: OauthSaveUserDTO!) {
    success: updateOauthUser(input: $user)
  }
`
