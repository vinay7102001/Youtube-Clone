import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import './_videoShowScreen.scss'
import VideoInfo from '../VideoInfo/VideoInfo'
import ChannelInfo from '../VideoInfo/ChannelInfo'
import Comments from '../VideoInfo/Comments'
import SidebarVideo from '../VideoInfo/SidebarVideo'
import { useDispatch, useSelector } from 'react-redux'
import { VideoById, ytSerachData } from '../../redux/youtubeDataFetch'
import request from '../../api'


// const VideoShowScreen = () => {
//   const [video, setVideo] = useState()
//   const { id } = useParams()
//   // console.log(id)
//   const dispatch = useDispatch()

//   useEffect(() => {
//     // VideoById(id)(dispatch)
//     // console.log('knjdj')
//     const datafetch = async () => {
//       const info = await request('/videos', {
//         params: {
//           part: 'snippet,statistics',
//           id: id
//         }
//       })
//       const itemsa = await info.data.items[0]
//       setVideo(itemsa)
//     }
//     datafetch()
//   }, [id, dispatch])

//   // const { snippet: { channelId, channelTitle, description, publishedAt, thumbnails: { medium: { url } }, title }, statistics: { commentCount, likeCount, viewCount } } = video
//   // const { video, loading } = useSelector(state => state.youtubeVideobyId)
//   // console.log(loading)

//   // console.log(video)

//   return (
//     <>
//       {video !== undefined ? <Container>
//         <Row className='row_container'>
//           <Col lg={9} md={7} sm={12} xs={12}>
//             <iframe src={`https://www.youtube.com/embed/${id}`} width='100%' style={{ marginTop: '1rem', border: 'none', borderRadius: '5px', height: '70vh' }}
//               title={id}
//             />
//             <VideoInfo title={video.snippet.title} views={video.statistics.viewCount} time={video.snippet.publishedAt} like={video.statistics.likeCount} />
//             <ChannelInfo channelId={video.snippet.channelId} />
//             <Comments />
//           </Col>
//           <Col lg={3} md={5} sm={12} xs={12} className=''>
//             {[...Array(20)].map(() => {
//               return <SidebarVideo />
//             })}
//           </Col>
//         </Row>
//       </Container> : <h1>loading</h1>}
//     </>
//   )
// }


const VideoShowScreen = () => {
  const { id } = useParams()
  // console.log(id)
  const dispatch = useDispatch()

  useEffect(() => {
    VideoById(id)(dispatch)
    console.log('knjdj')
  }, [id, dispatch])

  // const { snippet: { channelId, channelTitle, description, publishedAt, thumbnails: { medium: { url } }, title }, statistics: { commentCount, likeCount, viewCount } } = useSelector(state => state.youtubeVideobyId.video)
  const { video, loading } = useSelector(state => state.youtubeVideobyId)
  // console.log(loading)

  // console.log(video)

  return (
    <>
      {video !== null ? <Container>
        <Row className='row_container'>
          <Col lg={8} md={7} sm={12} xs={12}>
            <iframe src={`https://www.youtube.com/embed/${id}?controls=1`} width='100%' style={{ marginTop: '1rem', border: 'none', borderRadius: '5px', height: '70vh' }}
              title={id}
            />
            <VideoInfo />
            <ChannelInfo channelId={video.snippet.channelId} />
            <Comments id={id} channelId={video.snippet.channelId} commentsCount={video.statistics.commentCount} />
          </Col>
          <Col lg={4} md={5} sm={12} xs={12} className=''>
            <SidebarVideo title={video.snippet.title} flag={false} />
          </Col>
        </Row>
      </Container> : <h1>loading</h1>}
    </>
  )
}
export default VideoShowScreen
