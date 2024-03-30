import { createSlice } from "@reduxjs/toolkit";

// const initialState = { value: 0 }

// export const newSlice = createSlice({
//   name: 'vinay',
//   initialState,
//   reducers: {
//     add: (state, payload) => {
//       state.value = state.value + 1;
//     },
//     sub: (state, payload) => {
//       state.value -= 1
//     }
//   }
// })

// export const { add, sub } = newSlice.actions

// export default newSlice.reducer


const initialState = {
  accessToken: sessionStorage.getItem('youtube-accessToken') ? sessionStorage.getItem('youtube-accessToken') : null,
  user: sessionStorage.getItem('youtube-userData') ? JSON.parse(sessionStorage.getItem('youtube-userData')) : null,
  loading: false
}

export const newSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    request: (state, action) => {
      return { ...state, loading: action.payload };
    },
    success: (state, action) => {
      return { ...state, accessToken: action.payload, loading: false }
    },
    fail: (state, action) => {
      return { ...state, accessToken: null, loading: false, error: action.payload }
    },
    profile: (state, action) => {
      return { ...state, user: action.payload }
    },
    logout: (state, action) => {
      return { ...state, user: null, accessToken: null, loading: false }
    }
  }
})

export const { request, success, fail, profile, logout } = newSlice.actions

export default newSlice.reducer