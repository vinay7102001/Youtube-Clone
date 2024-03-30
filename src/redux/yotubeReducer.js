import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  video: [],
  loading: false,
  nextPageToken: '',
  activeCatagory: 'All'
}


export const youtubeData = createSlice({
  name: 'youtubeData',
  initialState,
  reducers: {
    dataFetchRequest: (state, action) => {
      return ({ ...state, loading: true })
    },
    dataFetchSuccess: (state, action) => {
      return ({
        ...state,
        video: state.activeCatagory === action.payload.catagory ? [...state.video, ...action.payload.video] : action.payload.video,
        nextPageToken: action.payload.token,
        activeCatagory: action.payload.catagory,
        loading: false
      })
    },
    dataFetchFail: (state, action) => {
      return ({ ...state, loading: false, error: action.payload })
    }
  }
})

export const { dataFetchRequest, dataFetchSuccess, dataFetchFail } = youtubeData.actions

export default youtubeData.reducer