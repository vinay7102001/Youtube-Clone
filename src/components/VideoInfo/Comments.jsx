import React, { useEffect, useState } from 'react'
import './_comment.scss'
import { useDispatch, useSelector } from 'react-redux'
import { CommentsOfVideo } from '../../redux/youtubeDataFetch'
import moment from 'moment'
import numeral from 'numeral'
import ShowMoreText from "react-show-more-text";
import { addCommets } from '../../redux/youtubeDataFetch'

const Comments = (props) => {
  const [commentText, setCommetText] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    CommentsOfVideo(props.id)(dispatch)
  }, [props.id])

  const url = useSelector(state => state.reducers.user.photoUrl)
  const comments = useSelector(state => state.youtubeVideobyId.Comments)

  const _comments = comments?.map(comments => comments.snippet.topLevelComment.snippet)
  // console.log(_comments)
  // console.log(commentText)

  const setText = () => {
    // console.log(commentText)
    if (commentText.length === 0)
      return
    addCommets(props.id, props.channelId, commentText)(dispatch)
    setCommetText('')
  }

  return (
    <>
      <hr />
      <div className='d-flex flex-column gap-2'>
        <p style={{ marginBottom: '5px', fontSize: '1.2rem' }}>{numeral(props.commentsCount).format("0.a")} comments</p>
        <div className='add_commnet'>
          <img src={url} />
          <input type='text' value={commentText} placeholder='write a comment' onChange={(e) => { setCommetText(e.target.value) }} />
          <button onClick={setText}>
            Comment
          </button>
        </div>
        {_comments?.map((comment) => {
          return (<div className='old_comments'>
            <img src={comment.authorProfileImageUrl} />
            <div>
              <p className='commenter_name'>{comment.authorDisplayName} • {moment(comment.publishedAt).fromNow()}</p>
              {/* <p className='comment_text'>{comment.textDisplay}</p> */}
              <ShowMoreText
                lines={1}
                more='Show More'
                less='Show Less'
                className='comment_text'
                anchorClass="description"
              >
                {comment.textDisplay}
              </ShowMoreText>
            </div>
          </div>)
        })}
      </div>
    </>
  )
}

export default Comments
