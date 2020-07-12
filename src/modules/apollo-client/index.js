const apolloClients = {}

export default function useApolloClient (arg) {
  if (!arg) {
    return apolloClients
  }
  if (typeof arg === 'string') {
    return apolloClients[arg]
  }
  if (typeof arg === 'object') {
    Object.assign(apolloClients, arg)
  }
}
