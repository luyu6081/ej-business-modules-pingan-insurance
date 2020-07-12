<template>
  <div class="el">
    <h1>Users: {{users}}</h1>
    <button @click="fetchUsers">Fetch Users</button> |
    <button @click="createUser">Add User</button> |
    <button @click="removeUser">Remove User</button> |
    <button @click="updateUser">Update User</button>
  </div>
</template>

<script>
  import useUser from 'modules/user'

  const {users, fetchUsers, createUser, removeUser, updateUser} = useUser()

  export default {
    data () {
      return {
        users,
      }
    },

    methods: {
      fetchUsers,
      createUser,
      removeUser,
      updateUser,
    },
  }
</script>
