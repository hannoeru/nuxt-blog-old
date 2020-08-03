export default function ({ $axios }, inject) {
  // Create a custom axios instance
  const api = $axios.create()

  // Set baseURL to something different
  api.setBaseURL('https://blog.hanlee.co/wp-json/wp/v2/')

  // Inject to context as $api
  inject('wp', api)
}
