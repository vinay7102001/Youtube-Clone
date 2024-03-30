import React, { useEffect, useState } from 'react'
import numeral from 'numeral'
import moment from 'moment'
import { BiLike, BiDislike } from "react-icons/bi";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import './_videoinfo.scss'
import { useSelector } from 'react-redux';



// const VideoInfo = (props) => {
//   // console.log(props.video)

//   const [likeFlag, setLikeflag] = useState(false)
//   const [disLikeFlag, setDisLikeflag] = useState(false)

//   const LikeVideo = () => {
//     setLikeflag(!likeFlag)
//   }

//   const DisLikeVideo = () => {
//     setDisLikeflag(!disLikeFlag)
//   }


//   return (
//     <>
//       <div className='videoinfo_container'>
//         <span>
//           {props.title}
//         </span>
//         <div className='video_views_periods_liks'>
//           <span>{numeral(props.views).format("0.a")} views • {moment(props.time).fromNow()}</span>
//           <div >
//             {likeFlag ? <BiSolidLike size={20} style={{ marginRight: '2px' }} onClick={LikeVideo} /> : <BiLike size={20} style={{ marginRight: '2px' }} onClick={LikeVideo} />}
//             <p>{numeral(props.like).format("0.a")}</p>
//             {disLikeFlag ? <BiSolidDislike size={20} style={{ marginRight: '2px' }} onClick={DisLikeVideo} /> : <BiDislike size={20} style={{ marginRight: '2px' }} onClick={DisLikeVideo} />}
//             <p>likecount</p>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }


const VideoInfo = () => {
  // console.log(props.video)

  const [likeFlag, setLikeflag] = useState(false)
  const [disLikeFlag, setDisLikeflag] = useState(false)

  const LikeVideo = () => {
    setLikeflag(!likeFlag)
  }

  const DisLikeVideo = () => {
    setDisLikeflag(!disLikeFlag)
  }

  const { snippet: { publishedAt, title }, statistics: { likeCount, viewCount } } = useSelector(state => state.youtubeVideobyId.video)



  return (
    <>
      <div className='videoinfo_container'>
        <span>
          {title}
        </span>
        <div className='video_views_periods_liks'>
          <span>{numeral(viewCount).format("0.a")} views • {moment(publishedAt).fromNow()}</span>
          <div >
            {likeFlag ? <BiSolidLike size={20} style={{ marginRight: '2px' }} onClick={LikeVideo} /> : <BiLike size={20} style={{ marginRight: '2px' }} onClick={LikeVideo} />}
            <p>{numeral(likeCount).format("0.a")}</p>
            {disLikeFlag ? <BiSolidDislike size={20} style={{ marginRight: '2px' }} onClick={DisLikeVideo} /> : <BiDislike size={20} style={{ marginRight: '2px' }} onClick={DisLikeVideo} />}
            <p>likecount</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default VideoInfo
