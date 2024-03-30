import { configureStore } from "@reduxjs/toolkit";
import reducers from './redux/reudcer'
import yotubeReducer from "./redux/yotubeReducer";
import youtubeVideobyId from "./redux/youtubeVideobyId";
import youtubeRelatedVideo from './redux/YoutubeRelatedVideos'
import subscibedChannels from './redux/subscribedrChannels'
import ChannelsplayData from './redux/ChannelData'

export const store = configureStore({
  reducer: {
    reducers: reducers,
    yotubeReducer: yotubeReducer,
    youtubeVideobyId: youtubeVideobyId,
    youtubeRelatedVideo: youtubeRelatedVideo,
    subscibedChannels: subscibedChannels,
    ChannelsplayData: ChannelsplayData,
  }
})

