import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  channels: null,
  loading: false,
}


export const subscibedChannels = createSlice({
  name: 'subscibedChannels',
  initialState,
  reducers: {
    requestForSubChannel: (state, action) => {
      return { ...state, loading: true }
    },
    successForSubChannel: (state, action) => {
      return { ...state, channels: action.payload, loading: false }
    },
    failForSubChannel: (state, action) => {
      return { ...state, error: action.payload, loading: false }
    },
  }
})

export const { requestForSubChannel, successForSubChannel, failForSubChannel } = subscibedChannels.actions

export default subscibedChannels.reducer