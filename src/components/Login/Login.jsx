import React, { useEffect } from 'react'
import YoutubeLogo from '../../images/YouTube.svg'
import './_login.scss'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/login_redux'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const accessToken = useSelector(state => state.reducers.accessToken)
  // console.log(count)
  const dispatch = useDispatch()

  const navigate = useNavigate()
  const handle = () => {
    login(dispatch)
  }


  useEffect(() => {
    if (accessToken) {
      navigate('/')
      // console.log('accesstoken')
    }
  }, [accessToken, navigate])

  return (
    <>
      <div className='login_container'>
        <img src={YoutubeLogo} />
        <button onClick={handle}>Click Here TO Login</button>
        <p>Login</p>

        {/* <button onClick={() => { dispatch(add()) }}>+</button>
        <p>{count}</p>
        <button onClick={() => { dispatch(sub()) }}>-</button> */}
      </div>


    </>
  )
}

export default Login