import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './_video_loder.scss'
import Video from '../video/Video'
import Scroll from '../Scroll/Scroll'
import { ytdata, ytSerachData } from '../../redux/youtubeDataFetch'
import { useDispatch, useSelector } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component'
import VideoLoading from '../videoloading/VideoLoading'


const VideoLoder = () => {

  const dispatch = useDispatch()

  const { video } = useSelector(state => state.yotubeReducer)
  // console.log(video)

  // useEffect(() => {
  //   if (activeCatagory === 'All') {
  //     ytdata(dispatch)
  //   }
  //   else {
  //     ytSerachData(activeCatagory)(dispatch)
  //   }
  // }, [])


  return (
    <>

      <Container className='main_video_container'>
        {/* <Row style={{ marginRight: '20px', marginLeft: '10px' }}> */}
        <Scroll />
        {/* </Row> */}
        {/* <Row style={{ marginRight: '20px', marginLeft: '10px' }}> */}
        <VideoLoading video={video} />
        {/* </Row> */}
      </Container>
    </>
  )
}

export default VideoLoder
