import * as state from './state'
import * as api from './api'

async function fetchUsers (options) {
  state.users.value = await api.queryUsers(options)
  return state.users.value
}

async function createUser (user) {
  const success = await api.createUser(user)
  if (success) {
    state.users.value.push(user)
    return user
  } else {
    throw new Error('创建用户时发生错误')
  }
}

async function removeUser (userId) {
  const success = await api.removeUser([].concat(userId))
  if (success) {
    let removed = []
    for (let idx = state.users.value.length - 1; idx >= 0; idx--) {
      removed = removed.concat(state.users.value.splice(idx, 1))
    }
    return removed
  } else {
    throw new Error('移除用户时发生错误')
  }
}

async function updateUser (user) {
  const success = await api.updateUser(user)
  if (success) {
    const idx = state.users.value.findIndex(u => u.id === user.id)
    state.users.value.splice(idx, 1, user)
    return user
  } else {
    throw new Error('更新用户时发生错误')
  }
}

export default function useUser () {
  return {
    ...state,

    fetchUsers,
    createUser,
    removeUser,
    updateUser,
  }
}
