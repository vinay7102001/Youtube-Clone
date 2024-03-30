import React, { useEffect, useState } from 'react'
import './_sidebarvideo.scss'
import request from '../../api'
import numeral from 'numeral'
import moment from 'moment'
import { Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { AiOutlineEye } from "react-icons/ai";

const SidebarData = (props) => {
  const [views, setViews] = useState(null)
  const [publishedAt, setPublishedAt] = useState()
  const [ChannelTitle, setChannelTitle] = useState()
  const [duration, setDuration] = useState()
  const [description, setDescription] = useState()
  const [videocounts, setVideoCounts] = useState()
  const [sub, setSub] = useState()
  // console.log(props)
  const navigate = useNavigate()


  useEffect(() => {
    const getvideoTime = async () => {
      const res = await request('/videos', {
        params: {
          part: 'contentDetails,snippet,statistics',
          id: props.id?.videoId,
        }
      })
      // console.log(res)
      setViews(res.data.items[0].statistics.viewCount)
      setPublishedAt(res.data.items[0].snippet.publishedAt)
      setChannelTitle(res.data.items[0].snippet.channelTitle)
      const seconds = moment.duration(res.data.items[0].contentDetails.duration).asSeconds()
      const _timePeriod = moment.utc(seconds * 1000).format("mm:ss")

      setDuration(_timePeriod)
    }

    const getChannelData = async () => {
      const res = await request('/channels', {
        params: {
          part: 'contentDetails,snippet,statistics',
          id: props.id?.channelId,
        }
      })
      // console.log('channel')
      // console.log(res)
      setSub(res.data.items[0].statistics.subscriberCount)
      setDescription(res.data.items[0].snippet.description)
      setPublishedAt(res.data.items[0].snippet.publishedAt)
      setVideoCounts(res.data.items[0].statistics.videoCount)
    }

    if (props.id?.videoId) {
      getvideoTime()
    }
    if (props.id?.channelId) {
      getChannelData()
    }

  }, [props.id])

  // console.log(views, publishedAt, ChannelTitle, props.title)

  const change_to_main_screen = () => {
    navigate(`/video/${props.id?.videoId}`)
  }

  const Channel_Screen = () => {
    navigate(`/channel/${props.id?.channelId}`)
  }



  return (
    <>
      <Row className='sidebar_video'>
        <Col xs={props.flag ? 6 : 4} sm={2} md={3} lg={4} xl={props.flag ? 3 : 4}>
          {props.id?.videoId ? <div className='img_p' onClick={change_to_main_screen}>
            <img className={props.flag ? 'image1 image2' : 'image1'} src={props.url} />
            <span className='time'>{duration}</span>
          </div>
            :
            props.id?.channelId ? <div className='img_p' onClick={Channel_Screen}>
              <img className={props.flag ? 'image3 image4' : 'image3'} src={props.url} />
            </div>
              : <h1>loading</h1>
          }
        </Col>
        <Col xs={props.flag ? 6 : 8} sm={10} md={9} lg={8} xl={props.flag ? 9 : 8}>
          {props.id?.videoId ? <div onClick={change_to_main_screen}>
            <h4>{props.title}</h4>
            <p className='views_data'><AiOutlineEye style={{ marginRight: '5px' }} />{numeral(views).format("0.a")} views • {moment(publishedAt).fromNow()}</p>
            <p className='channel_name'>{ChannelTitle}</p>
          </div> :
            props.id?.channelId ?
              <div className='thumbnail_data_channel' onClick={Channel_Screen}>
                <h4>{props.title}</h4>
                <p className='Channel_discription'>{description}</p>
                <p className='views_data'><AiOutlineEye style={{ marginRight: '5px' }} />{numeral(videocounts).format("0.a")} video • {moment(publishedAt).fromNow()}</p>
                <p className='channel_name'>{numeral(sub).format("0.a")} Subscribers</p>
              </div> :
              <h1>Loading</h1>
          }


        </Col>
        <hr />
      </Row>
    </>
  )
}

export default SidebarData
