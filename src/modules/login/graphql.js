import gql from 'graphql-tag'

export const FRAGMENT_USER_BASIC_INFO = gql`
  fragment UserBasicInfo on OauthUserVO {
    id: userId
    username
    name
    phone: phoneNumber
    email
    avatar: userAvatar
    tenantId
    tenantName
    permissionCodes
    appKeys
  }
`

export const QUERY_ME = gql`
  query fetchMe {
    me: getLoginUser {
      ...UserBasicInfo
    }
  }
  ${FRAGMENT_USER_BASIC_INFO}
`

export const MUTATION_LOG_IN = gql`
  mutation logIn($username: String!, $password: String!, $rememberMe: Boolean) {
    me: authLogin(input: {username: $username, password: $password, rememberMe: $rememberMe}) {
      ...UserBasicInfo
    }
  }
  ${FRAGMENT_USER_BASIC_INFO}
`

export const MUTATION_LOG_OUT = gql`
  mutation logOut {
    success: logoutUser
  }
`
