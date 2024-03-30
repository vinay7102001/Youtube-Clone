import React from 'react'
import SidebarVideo from './VideoInfo/SidebarVideo'
import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import './_serachScreen.scss'

const SearchScreen = () => {

  const { title } = useParams()

  return (
    <><Container className='searchScreen'>
      <SidebarVideo title={title} flag={true} />
    </Container>
    </>
  )
}

export default SearchScreen
