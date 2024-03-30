import React, { useEffect, useState } from 'react'
import { RelatedVideo } from '../../redux/youtubeDataFetch'
import { useDispatch, useSelector } from 'react-redux'
import SidebarData from './SidebarData'

const SidebarVideo = (props) => {

  const dispatch = useDispatch()
  // console.log(props)

  useEffect(() => {
    RelatedVideo(props.title)(dispatch)
  }, [props.title])

  const video = useSelector(state => state.youtubeRelatedVideo.video)

  // console.log(video)


  return (
    <>
      {/* <div className='main_container_of_sidebar_video'>
        <div className='video_thumbnail'>
          <img src='data:image/jpeg;base64,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'
          />
          <span className='time'>11:20</span>
        </div>
        <div className='video_thumbnail_data'>
          <h3>jhfhsdhfhfknsfdf nogonmjgo gumoiuoimvuimtuerutveutoiuevoiuoeuyouevy</h3>
          <span>{numeral(67890856).format("0.a")} views • {moment('2-2-2023').fromNow()}</span>
          <spna>coding Channel</spna>
        </div>
      </div> */}
      {/* {video !== null ? video.filter((val, i) => i !== 0) : <h1>lodaing112</h1>} */}
      {/* {console.log(video)} */}
      {video !== null ?
        video.map((val) =>
          <SidebarData flag={props.flag} id={val.id} url={val.snippet.thumbnails.high.url} title={val.snippet.title} />
        )
        : <h1>Loading</h1>}
    </>
  )
}

export default SidebarVideo
