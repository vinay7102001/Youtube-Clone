import React, { useState } from 'react'
import '../../_base.scss'
import './_header.scss'
import YouTube from '../../images/YouTube.svg'
import { MdSearch } from "react-icons/md";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Header = (props) => {
  const [search, setSearch] = useState('')

  const user = useSelector(state => state.reducers.user)
  const navigate = useNavigate()

  const searchFire = () => {
    console.log(search)
    navigate(`/search/${search}`)
  }

  return (
    <>
      <header>
        <GiHamburgerMenu size={22} className='hmburger'
          onClick={() => {
            props.handler(!props.status)
          }} />
        <img src={YouTube} alt='youtube' />
        <div className='header_input'>
          <input type='text' placeholder='Search video' value={search} onChange={(e) => { setSearch(e.target.value) }} />
          <button onClick={searchFire}><MdSearch size={22} color='white' /></button>
        </div>
        <div className='icons'>
          <BsFillGrid3X3GapFill size={22} className='icon1' />
          <FaBell size={22} className='icon2' />
          {user === null ? <CgProfile size={22} className='icon3' /> : <img src={user.photoUrl} className='profile_photo' alt='profilePhoto' />}
        </div>
      </header >
    </>
  )
}

export default Header
