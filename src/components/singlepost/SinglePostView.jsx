import React from 'react'

export default function SinglePostView({
  post,
  index,
  showComment,
  handleShowCommentButtonClick,
  comments,
  isLoading,
}) {
  return (
    <div className="post">
      {index > 0 && <hr />}
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <hr />
      <button onClick={handleShowCommentButtonClick}>
        {showComment ? 'Hide ' : 'Show '}Comments
      </button>
      {isLoading && <h4>Comments are loading...</h4>}

      {showComment && !isLoading && (
        <div className="comments">
          {comments?.map((comment) => (
            <div className="comment" key={comment.id}>
              <p>
                <b>{comment.email}</b>{' '}
              </p>
              <p>{comment.body} </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
