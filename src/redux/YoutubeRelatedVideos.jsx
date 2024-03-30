import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  video: null,
  loading: false,
}


export const youtubeRelatedVideo = createSlice({
  name: 'youtubeRelatedVideo',
  initialState,
  reducers: {
    RequestRelatedVideo: (state, action) => {
      return { ...state, loading: true }
    },
    SuccessRelatedVideo: (state, action) => {
      return { ...state, video: action.payload, loading: false }
    },
    FailRelatedVideo: (state, action) => {
      return { ...state, error: action.payload, loading: false }
    },
  }
})

export const { RequestRelatedVideo, SuccessRelatedVideo, FailRelatedVideo } = youtubeRelatedVideo.actions

export default youtubeRelatedVideo.reducer