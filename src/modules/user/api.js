import useApollo from '../apollo'
import * as gql from './graphql'

const auth = useApollo('auth')

export async function queryUsers (variables) {
  const {data: {users}} = await auth.query({
    query: gql.QUERY_USERS,
    variables,
  })
  removeTypename(users)
  return users
}

export async function createUser (user) {
  const {data: {success}} = await auth.mutate({
    mutation: gql.MUTATION_CREATE_USER,
    variables: {user},
  })
  return success
}

export async function removeUser (userIds) {
  const {data: {success}} = await auth.mutate({
    mutation: gql.MUTATION_REMOVE_USER,
    variables: {ids: userIds},
  })
  return success
}

export async function updateUser (user) {
  const {data: {success}} = await auth.mutate({
    mutation: gql.MUTATION_UPDATE_USER,
    variables: {user},
  })
  return success
}

// TODO: recursively remove `__typename`
function removeTypename (res) {
  if (typeof res[Symbol.iterator] === 'function') {
    for (const obj of res) {
      delete obj.__typename
    }
  }
}
