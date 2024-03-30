import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  video: null,
  loading: false,
  comment_loading: false,
  Comments: null,
  addCommentLoading: false
}


export const youtubeDataByVideoId = createSlice({
  name: 'youtubeDataById',
  initialState,
  reducers: {
    RequestDataVideoById: (state, action) => {
      return { ...state, loading: true }
    },
    SuccessDataVideoById: (state, action) => {
      return { ...state, video: action.payload, loading: false }
    },
    FailDataVideoById: (state, action) => {
      return { ...state, error: action.payload, loading: false }
    },
    CommentRequest: (state, action) => {
      return { ...state, comment_loading: true }
    },
    CommentSuccess: (state, action) => {
      return { ...state, Comments: action.payload, comment_loading: false }
    },
    CommentFail: (state, action) => {
      return { ...state, comment_error: action.payload, comment_loading: false }
    },
    AddComment: (state, action) => {
      return { ...state, addCommentLoading: true }
    },
    AddCommentSuccess:
      (state, action) => {
        return { ...state, addCommentLoading: false }
      },
    AddCommentFail: (state, action) => {
      return { ...state, addCommentLoading: true, addCommentError: action.payload }
    },
  }
})

export const { RequestDataVideoById, SuccessDataVideoById, FailDataVideoById, CommentRequest, CommentSuccess, CommentFail, AddComment, AddCommentSuccess, AddCommentFail } = youtubeDataByVideoId.actions

export default youtubeDataByVideoId.reducer