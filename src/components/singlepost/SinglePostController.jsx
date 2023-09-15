import React, { useEffect, useState } from 'react'
import SinglePostView from './singlePostView'
import SinglePostModel from './singlePostModel'

export default function SinglePostController({ post, index }) {
  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const [showComment, setShowComment] = useState(false)

  const handleShowCommentButtonClick = () => {
    setShowComment(!showComment)
  }

  useEffect(() => {
    setIsLoading(true)
    const delay = setTimeout(() => {
      SinglePostModel.getComments(post.id)
        .then((res) => setComments(res))
        .catch((err) => console.log('err', err))
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(delay)
  }, [post.id])

  return (
    <SinglePostView
      post={post}
      index={index}
      showComment={showComment}
      handleShowCommentButtonClick={handleShowCommentButtonClick}
      comments={comments}
      isLoading={isLoading}
    />
  )
}
