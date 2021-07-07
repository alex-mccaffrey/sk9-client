
  // export default {
  //   //API_ENDPOINT: 'https://pure-peak-75062.herokuapp.com/api'
  //   API_ENDPOINT: 'http://localhost:8000/api'
  // }

  module.exports = {
    PORT: process.env.PORT || 8000,
    TOKEN_KEY: 'sk9-token',
    API_ENDPOINT: process.env.REACT_APP_API_BASE_URL
}