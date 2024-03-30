import firebase from "firebase/compat/app"
import auth from '../firebase'
import { request, success, fail, profile, logout } from './reudcer'




export const login = async dispatch => {
  try {
    dispatch(request(true))

    const provider = new firebase.auth.GoogleAuthProvider()

    provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl')

    const res = await auth.signInWithPopup(provider)
    // console.log(res)
    const accessToken = res.credential.accessToken
    const userData = {
      name: res.additionalUserInfo.profile.name,
      photoUrl: res.additionalUserInfo.profile.picture
    }

    dispatch(success(accessToken))

    sessionStorage.setItem('youtube-accessToken', accessToken)
    sessionStorage.setItem('youtube-userData', JSON.stringify(userData))

    dispatch(profile(userData))

  }
  catch (err) {
    console.log(err)
    dispatch(fail(err))
  }
}

export const logOut = async dispatch => {
  try {
    dispatch(logout())
    await auth.signOut()

    sessionStorage.removeItem('youtube-accessToken')
    sessionStorage.removeItem('youtube-userData')
  }
  catch (err) {
    console.log(err)
  }
}