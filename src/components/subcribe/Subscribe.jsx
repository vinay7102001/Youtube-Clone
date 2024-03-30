import React, { useEffect } from 'react'
import { subsctiptionData } from '../../redux/youtubeDataFetch'
import { useDispatch, useSelector } from 'react-redux'
import { Container } from 'react-bootstrap'
import SidebarData from '../VideoInfo/SidebarData'
import './_subscription.scss'

const Subscribe = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    subsctiptionData(dispatch)
  }, [])


  const channels = useSelector(state => state.subscibedChannels.channels)

  return (
    <>
      <Container className='subscription'>
        {channels !== null ?
          channels?.map((val) =>
            <SidebarData flag={true} id={val.snippet?.resourceId} url={val.snippet?.thumbnails?.default?.url} title={val.snippet.title} />
          )
          : <h1>loading</h1>}
      </Container>
    </>
  )
}

export default Subscribe
