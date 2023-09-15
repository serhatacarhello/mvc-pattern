import axios from 'axios'

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'
const SinglePostModel = {
  getComments: async (id) => {
    return axios
      .get(`comments?postId=${id}`)
      .then((res) => res.data)
      .catch((err) => console.log('err', err))
  },
}

export default SinglePostModel
