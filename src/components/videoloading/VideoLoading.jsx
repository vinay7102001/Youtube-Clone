import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Video from '../video/Video'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Ytdata, ytSerachData } from '../../redux/youtubeDataFetch'
import { useDispatch, useSelector } from 'react-redux'
import './_videoLoading.scss'
import SkeletonCom from '../SkeletonCom/SkeletonCom'


const VideoLoading = (props) => {

  // console.log(props.video)
  const dispatch = useDispatch()
  const { activeCatagory, loading } = useSelector(state => state.yotubeReducer)

  const fetchData = () => {
    if (activeCatagory === 'All') {
      Ytdata(dispatch)
    }
    else {
      ytSerachData(activeCatagory)(dispatch)
    }
    // console.log('hello')
  }

  return (
    <div className=' video_scolling' id='infinite'>

      <InfiniteScroll
        dataLength={props.video.length}
        next={fetchData}
        hasMore={true}
        loader={<h1>loading...</h1>}
        scrollThreshold={0.9}
        className='row'
        scrollableTarget='infinite'
      >
        {/* <Row> */}
        {loading ?
          [...Array(20)].map((val) => {
            return <Col xl="3" lg='4' md={4} sm={6}>
              <SkeletonCom />
            </Col>
          })
          :
          props.video.map((val) => {
            return <Col xl="3" lg='4' md={4} sm={6}>
              <Video videoInfo={val} />
            </Col>
          })}
        {/* </Row> */}
      </InfiniteScroll>
    </div>
  )
}

export default VideoLoading
