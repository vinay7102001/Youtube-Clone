import React, { useEffect, useState } from 'react'
import request from '../../api'
import './_video.scss'
import moment from 'moment'
import numeral from 'numeral'
import { useNavigate } from 'react-router-dom'
import { AiOutlineEye } from "react-icons/ai";

const Video = (props) => {
  const [views, setViews] = useState(null)
  const [timePeriod, setTimePeriod] = useState(null)
  const [channelUrl, setChannelUrl] = useState()
  const [publishedAt, setPublishedAt] = useState()

  const navigate = useNavigate()

  const seconds = moment.duration(timePeriod).asSeconds()
  const _timePeriod = moment.utc(seconds * 1000).format("mm:ss")

  const { id, snippet: { channelId, channelTitle, title, thumbnails: { medium: { url } }, resourceId, }, } = props.videoInfo
  // setTimePeriod(duration)

  // const videoID = typeof (id) == 'object' ? id.videoId : id

  const videoID = id.videoId || resourceId.videoId || id
  useEffect(() => {

    const getvideoTime = async () => {
      const res = await request('/videos', {
        params: {
          part: 'contentDetails,snippet,statistics',
          id: videoID,
        }
      })
      // console.log(res)
      setViews(res.data.items[0].statistics?.viewCount)
      setPublishedAt(res.data.items[0].snippet?.publishedAt)
      setTimePeriod(res.data.items[0].contentDetails?.duration)

    }
    getvideoTime()

    const getChannelData = async () => {
      const res = await request('/channels', {
        params: {
          part: 'snippet,statistics',
          id: channelId,
        }
      })
      // console.log(res)
      setChannelUrl(res.data.items[0].snippet.thumbnails.high.url)
    }
    getChannelData()


  }, [videoID])

  const RedirectToVideoScreen = () => {
    navigate(`/video/${videoID}`)
  }

  return (
    <>
      <div className='video_container' onClick={RedirectToVideoScreen}>
        <div>
          <img src={url} alt='thumnil' />
          <span>{_timePeriod}</span>
        </div>
        <div className='video_detail'>
          <img src={channelUrl} alt='channel' />
          <div className='video_description'>
            <h3>{title}</h3>
            <p className='channel_name'>{channelTitle}</p>
            <p className='video_views_and_age'><AiOutlineEye style={{ marginRight: '2px' }} />{numeral(views).format("0.a")} views • {moment(publishedAt).fromNow()}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Video
