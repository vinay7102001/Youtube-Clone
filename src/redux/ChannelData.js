import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  videos: null,
  loading: false,
}


export const ChannelsplayData = createSlice({
  name: 'ChannelsplayData',
  initialState,
  reducers: {
    requestChannelData: (state, action) => {
      return { ...state, loading: true }
    },
    successChannelData: (state, action) => {
      return { ...state, videos: action.payload, loading: false }
    },
    failChannelData: (state, action) => {
      return { ...state, error: action.payload, loading: false }
    },
  }
})

export const { requestChannelData, successChannelData, failChannelData } = ChannelsplayData.actions

export default ChannelsplayData.reducer