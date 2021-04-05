import { typeDefs } from '~/graphql/typeDefs'
import { resolvers } from '~/graphql/resolvers'
import { onCacheInit } from '~/graphql/onCacheInit'

export default (context) => {
  return {
    httpEndpoint: 'http://mapento-laravel:8000/graphql',

    // override HTTP endpoint in browser only
    browserHttpEndpoint: '/graphql',

    // See https://www.apollographql.com/docs/link/links/http.html#options
    httpLinkOptions: {
      credentials: 'same-origin'
    },

    // You can use `wss` for secure connection (recommended in production)
    // Use `null` to disable subscriptions
    // wsEndpoint: 'ws://mapento-laravel:8000',

    /**
     * default 'apollo' definition
     */
    defaultOptions: {
      // See 'apollo' definition
      // For example: default query options
      $query: {
        loadingKey: 'loading',
        fetchPolicy: 'cache-and-network'
      }
    },

    // setup a global query loader observer (see below for example)
    // watchLoading: '~/plugins/apollo-watch-loading-handler.js',

    // setup a global error handler (see below for example)
    errorHandler: 'apollo-error-handler.js',

    // Cookie parameters used to store authentication token
    cookieAttributes: {
      /**
        * Define when the cookie will be removed. Value can be a Number
        * which will be interpreted as days from time of creation or a
        * Date instance. If omitted, the cookie becomes a session cookie.
        */
      expires: 7,

      /**
        * Define the path where the cookie is available. Defaults to '/'
        */
      path: '/',

      /**
        * Define the domain where the cookie is available. Defaults to
        * the domain of the page where the cookie was created.
        */
      // domain: 'example.com',

      /**
        * A Boolean indicating if the cookie transmission requires a
        * secure protocol (https). Defaults to false.
        */
      secure: false
    },

    typeDefs,
    resolvers,
    onCacheInit
  }
}
