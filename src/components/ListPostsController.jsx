import { useEffect, useState } from 'react'
import ListPostView from './ListPostView'
import ListPostsModel from './ListsPostsModel'

// controller takes data and returns view

export default function ListPostsController() {
  // use states in here

  const [isLoading, setIsLoading] = useState(false)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // get data from Api
    setIsLoading(true)
    const delay = setTimeout(() => {
      ListPostsModel.getPosts()
        .then((res) => setPosts(res))
        .catch((err) => console.log('err', err))
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(delay)
  }, [])

  return <ListPostView isLoading={isLoading} posts={posts} />
}
