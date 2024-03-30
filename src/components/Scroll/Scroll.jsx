import React, { useEffect, useState } from 'react'
import './_scroll.scss'
import { ytSerachData } from '../../redux/youtubeDataFetch'
import { useDispatch } from 'react-redux'

const Scroll = () => {

  const [preference, setPreference] = useState('')
  const dispatch = useDispatch()

  const arr = [
    'All',
    'React js',
    'c++',
    'Music',
    'Game Shows',
    'Dramedy',
    'KapilSharma',
    'Trailers',
    'Comedy',
    'Thrillers',
    'news',
    'Bollywood Music',
    'JavaScript',
    'Cricket',
    'Indian pop music',
    "History",
    "Recently uploaded",
    "Dramedy",
    'New to youtube'
  ]

  const handelPreference = (event) => {
    setPreference(event.target.value)
  }

  useEffect(() => {
    ytSerachData(preference)(dispatch)
  }, [preference])

  return (
    <>
      <div className='scroll_bar'>
        {arr.map((val) => {
          return (<button className={preference === val ? 'button_data new_button' : 'button_data'} value={val} onClick={(e) => { handelPreference(e) }}>{val}</button>)
        })}
      </div>
    </>
  )
}

export default Scroll
