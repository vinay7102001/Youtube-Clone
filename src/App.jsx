import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import VideoLoder from './components/main_video_loder/VideoLoder'
import './_app.scss'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './components/Login/Login'
import { useSelector } from 'react-redux'
import VideoShowScreen from './components/VideoShowScreen/VideoShowScreen'
import SidebarVideo from './components/VideoInfo/SidebarVideo'
import SearchScreen from './components/SearchScreen'
import Subscribe from './components/subcribe/Subscribe'
import Channel from './components/Channel/Channel'


const App = () => {
  const [show, setShow] = useState(false)

  const Home = (props) => {
    // console.log(props.children)
    // const p = props.children
    return (<>
      {/* <div className='main_div_of_app'> */}
      <Header handler={setShow} status={show} />
      <div className='app_container'>
        <Sidebar status={show} handler={setShow} />
        {props.children}
      </div>
      {/* </div> */}
    </>
    )
  }

  const { accessToken, loading } = useSelector(state => state.reducers)
  // console.log(accessToken, loading)

  const navigate = useNavigate()

  useEffect(() => {
    if (!accessToken && !loading) {
      navigate('/login')
    }
    // else {
    //   navigate('/')
    // }
  }, [accessToken, loading, navigate])

  return (
    <>
      <Routes>

        <Route path='/' element={<Home children={<VideoLoder />} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/subscribed' element={<Home children={<Subscribe />} />} />
        <Route path='/channel/:id' element={<Home children={<Channel />} />} />
        <Route path='/video/:id' element={<Home children={<VideoShowScreen />} />} />
        <Route path='/Search/:title' element={<Home children={<SearchScreen />} />} />
        <Route path='*' element={<h1>error</h1>} />
      </Routes>
    </>
  )
}

export default App
