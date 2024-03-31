import request from '../api'
import { dataFetchRequest, dataFetchSuccess, dataFetchFail } from './yotubeReducer'
import { store } from '../store'
import { RequestDataVideoById, SuccessDataVideoById, FailDataVideoById, CommentRequest, CommentSuccess, CommentFail, AddComment, AddCommentSuccess, AddCommentFail } from '../redux/youtubeVideobyId'
import { RequestRelatedVideo, SuccessRelatedVideo, FailRelatedVideo } from './YoutubeRelatedVideos'
import { requestForSubChannel, successForSubChannel, failForSubChannel } from './subscribedrChannels'
import { requestChannelData, successChannelData, failChannelData } from './ChannelData'



export const Ytdata = async dispatch => {
  try {
    dispatch(
      dataFetchRequest()
    )
    const ytinfo = await request('/videos', {
      params: {
        part: 'snippet, contentDetails, statistics',
        chart: 'mostPopular',
        maxResults: 20,
        pageToken: store.getState().yotubeReducer.nextPageToken,
        regionCode: 'IN'
      },
      headers: {
        Authorization: `Bearer ${store.getState().reducers.accessToken}`,
      }
    })

    const data = await ytinfo.data
    // console.log(ytinfo)

    let video = data.items
    let token = data.nextPageToken
    let catagory = store.getState().yotubeReducer.activeCatagory

    // console.log(token)
    // console.log(catagory)

    dispatch(dataFetchSuccess({ video, token, catagory }))
  }
  catch (err) {
    // console.log(err)
    dispatch(dataFetchFail(err))
  }
}



// ---------------

export const ytSerachData = (keyword) => async (dispatch) => {
  try {
    // console.log(p)
    dispatch(
      dataFetchRequest()
    )

    const ytinfo = await request('/search', {
      params: {
        part: 'snippet',
        pageToken: store.getState().yotubeReducer.nextPageToken,
        q: keyword,
        maxResults: 20,
        regionCode: 'IN',
        type: 'video'
      },
      headers: {
        Authorization: `Bearer ${store.getState().reducers.accessToken}`,
      }
    })
    const data = await ytinfo.data
    // console.log(ytinfo)

    const video = await data.items
    const token = await data.nextPageToken
    const catagory = keyword
    // console.log(token)
    // console.log(catagory)

    dispatch(dataFetchSuccess({ video, token, catagory }))
  }
  catch (err) {
    // console.log(err)
    dispatch(dataFetchFail(err.message))
  }

}

export const VideoById = (Id) => async (dispatch) => {
  try {
    dispatch(RequestDataVideoById())

    const { data: { items } } = await request('/videos', {
      params: {
        part: 'snippet,statistics',
        id: Id
      }
    })

    // console.log(items)
    const video = await items[0]
    // console.log('hy')
    // console.log(video)
    // console.log('hi')

    dispatch(SuccessDataVideoById(video))

  }
  catch (err) {
    // console.log(err)
    dispatch(FailDataVideoById(err))
  }
}


export const CommentsOfVideo = (id) => async dispatch => {
  try {
    dispatch(CommentRequest())

    const res = await request('/commentThreads', {
      params: {
        part: 'snippet',
        videoId: id,
        // maxResults: 10,
        // pageToken: '',
        // textFormat: 'plainText'
      },
      // header: {
      //   Authorization: `Bearer ${store.getState().reducers.accessToken}`
      // }
    })
    // console.log(res.data.items)

    dispatch(CommentSuccess(res.data.items))

  } catch (error) {
    // console.log(error)
    dispatch(CommentFail(error))
  }
}


export const addCommets = (id, channelId, text) => async (dispatch) => {
  try {

    dispatch(AddComment())

    const obj = {
      snippet: {
        channelId: channelId,
        videoId: id,
        topLevelComment: {
          snippet: {
            textOriginal: text
          },
        },
      },
    }

    const headers = {
      Authorization: `Bearer ${store.getState().reducers.accessToken}`,
    }

    // console.log(headers)

    await request.post('/commentThreads/', obj, {
      headers,
      params: {
        part: 'snippet',
      },
    })

    dispatch(AddCommentSuccess())

    // CommentsOfVideo(id)(dispatch)
    setTimeout(() => {
      CommentsOfVideo(id)(dispatch)
    }, 20000)

  }
  catch (err) {
    dispatch(AddCommentFail(err))
  }
}


export const RelatedVideo = (value) => async (dispatch) => {

  try {
    // console.log(p)
    dispatch(
      RequestRelatedVideo()
    )

    const ytinfo = await request('/search', {
      params: {
        part: 'snippet',
        // pageToken: store.getState().yotubeReducer.nextPageToken,
        q: value,
        maxResults: 20,
        regionCode: 'IN',
        type: 'video,channel'
      }
    })
    const data = await ytinfo.data
    // console.log(ytinfo)

    const video = await data.items
    // const token = await data.nextPageToken
    // const catagory = keyword
    // console.log(token)
    // console.log(catagory)

    dispatch(SuccessRelatedVideo(video))
  }
  catch (err) {
    // console.log(err)
    dispatch(FailRelatedVideo(err.message))
  }


}


export const subsctiptionData = async (dispatch) => {
  try {
    dispatch(
      requestForSubChannel()
    )
    const response = await request('/subscriptions', {
      params: {
        part: 'snippet',
        mine: true,
        maxResults: 20,
      },
      headers: {
        Authorization: `Bearer ${store.getState().reducers.accessToken}`,
      }
    })
    // console.log(response)

    dispatch(successForSubChannel(response.data.items))

  }
  catch (error) {
    // console.log(error)
    dispatch(failForSubChannel(error))
  }
}

export const ChannelData = (id) => async (dispatch) => {
  try {
    dispatch(
      requestChannelData()
    )

    const res = await request('/channels', {
      params: {
        part: 'contentDetails,snippet,statistics',
        id: id,
      },
      // headers: {
      //   Authorization: `Bearer ${store.getState().reducers.accessToken}`,
      // }
    })

    // console.log(res)
    const response = await request('/playlistItems', {
      params: {
        part: 'contentDetails,snippet',
        playlistId: res.data.items[0].contentDetails.relatedPlaylists.uploads,
        maxResults: 30,
      },
      // headers: {
      //   Authorization: `Bearer ${store.getState().reducers.accessToken}`,
      // }
    })

    // console.log(response)

    dispatch(successChannelData(response.data.items))

  }
  catch (error) {
    // console.log(error)
    dispatch(failChannelData(error))
  }
}