import axios from 'axios'
// data manipulation in here
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

const ListPostsModel = {
  getPosts: async () => {
    return axios
      .get('/posts')
      .then((res) => res.data)
      .catch((err) => console.log('err', err))
  },
}

export default ListPostsModel
