import SinglePostController from './singlepost/SinglePostController'
import SinglePostView from './singlepost/singlePostView'

export default function ListPostView({ posts, isLoading }) {
  //it takes props

  const postElements = posts?.map((post, index) => (
    <SinglePostController key={post.id} post={post} index={index} />
  ))

  return (
    <>
      {isLoading && <h1>Loading Posts</h1>}

      {isLoading === false && <div className="posts">{postElements}</div>}
    </>
  )
}
