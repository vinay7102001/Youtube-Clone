import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { ChannelData } from '../../redux/youtubeDataFetch'
import { useDispatch, useSelector } from 'react-redux'
import request from '../../api'
import ChannelInfo from '../VideoInfo/ChannelInfo'
import Video from '../video/Video'
import SkeletonCom from '../SkeletonCom/SkeletonCom'
import './_channel.scss'

const Channel = () => {
  const { id } = useParams()

  const dispatch = useDispatch()

  useEffect(() => {
    ChannelData(id)(dispatch)
  }, [id])

  const { loading, videos } = useSelector(state => state.ChannelsplayData)
  // console.log(videos)
  return (
    <>
      <Container className='Channel_video_row'>
        <div className='channel_info_in_channel_screen'>
          <ChannelInfo channelId={id} channelPage={true} />
        </div>


        <Row >
          {loading ?
            [...Array(20)].map((val) => {
              return <Col xl="3" lg='4' md={4} sm={6}>
                <SkeletonCom />
              </Col>
            })
            :
            videos?.map((val) => {
              return <Col xl="3" lg='4' md={4} sm={6}>
                <Video videoInfo={val} />
              </Col>
            })}
        </Row>

      </Container>
    </>
  )
}

export default Channel
