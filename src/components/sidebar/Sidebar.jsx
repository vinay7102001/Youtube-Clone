import React from 'react'
import './_sidebar.scss'
import { MdSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdHomeFilled } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { GoHistory } from "react-icons/go";
import { GiCelebrationFire } from "react-icons/gi";
import { LuLogOut } from "react-icons/lu";
import { logOut } from '../../redux/login_redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Sidebar = (props) => {
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const ShowFunction = () => {
    props.handler(!props.status)

  }

  const handelLogout = () => {
    ShowFunction()
    logOut(dispatch)
  }

  const handelSub = () => {
    ShowFunction()
    navigate('/subscribed')
  }

  const homeScreen = () => {
    ShowFunction()
    navigate('/')
  }

  return (
    <>
      <nav className={props.status ? 'sidebar open' : 'sidebar'}>
        <li onClick={homeScreen}><MdHomeFilled size={22} /> <span>Home</span></li>
        <li onClick={handelSub}><MdSubscriptions size={22} /> <span>Subscribtions</span></li>
        <li onClick={ShowFunction}><SiYoutubeshorts size={22} /> <span>Shorts</span></li>
        <li onClick={ShowFunction}><BiLike size={22} /> <span>Liked</span></li>
        <li onClick={ShowFunction}><GoHistory size={22} /> <span>History</span></li>
        <li onClick={ShowFunction}><GiCelebrationFire size={22} /> <span>Trandings</span></li>
        <hr />
        <li onClick={handelLogout}><LuLogOut size={22} /> <span>Logout</span></li>
        <hr />
      </nav >
    </>
  )
}

export default Sidebar