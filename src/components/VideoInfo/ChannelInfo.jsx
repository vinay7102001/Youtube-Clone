import React, { useEffect, useState } from 'react'
import './_channelInfo.scss'
import ShowMoreText from "react-show-more-text";
import request from '../../api';
import numeral from 'numeral';
import { store } from '../../store'


// const ChannelInfo = (props) => {
//   // console.log(props.video)
//   const [subFlag, setSubFlag] = useState(false)
//   const [videoInfo, setVideoInfo] = useState()

//   const SubChannel = () => {
//     setSubFlag(!subFlag)
//   }


//   useEffect(() => {
//     const getChannelData = async () => {
//       const res = await request('/channels', {
//         params: {
//           part: 'snippet,statistics',
//           id: props.channelId,
//         }
//       })
//       console.log(res.data.items[0])
//       setVideoInfo(res.data.items[0])
//     }
//     getChannelData()
//   }, [props.channelId])
//   console.log(videoInfo)
//   return (
//     <>
//       {videoInfo !== undefined ? <><hr />
//         <div className='video_channel_container'>
//           <img src={videoInfo.snippet.thumbnails.high.url}
//           />
//           <div className='channel_name_subscibe_button'>
//             <span>
//               <li>{videoInfo.snippet.title}</li>
//               <li>{numeral(videoInfo.statistics.subscriberCount).format("0.a")} subscriber</li>
//             </span>
//             <button onClick={SubChannel} className={subFlag ? 'subButton open' : 'subButton'}>
//               {subFlag ? 'subscribed' : 'subscribe'}
//             </button>
//           </div>
//         </div>
//         <hr />
//         <ShowMoreText
//           lines={3}
//           more='Show More'
//           less='Show Less'
//           className='decription_decor'
//           anchorClass="description"
//         >
//           {videoInfo.snippet.description}
//         </ShowMoreText>
//       </>
//         : <h1>loading</h1>}
//     </>
//   )
// }



const ChannelInfo = (props) => {
  // const { snippet: { channelId } } = useSelector(state => state.youtubeVideobyId.video)
  // console.log(props)
  const [subFlag, setSubFlag] = useState()
  const [videoInfo, setVideoInfo] = useState()

  const SubChannel = () => {
    // setSubFlag(!subFlag)
  }


  useEffect(() => {
    const getChannelData = async () => {
      const res = await request('/channels', {
        params: {
          part: 'snippet,statistics',
          id: props.channelId,
        }
      })

      try {

        const response = await request('/subscriptions', {
          params: {
            part: 'snippet,subscriberSnippet',
            // channelId: props.channelId,
            forChannelId: props.channelId,
            mine: true
          },
          headers: {
            Authorization: `Bearer ${store.getState().reducers.accessToken}`,
          }
        })
        // console.log(response.data)
        const flag = (response.data.items.length === 0)
        setSubFlag(flag)
        setVideoInfo(res.data.items[0])

      } catch (err) {
        console.log(err)
      }


    }
    getChannelData()
  }, [props.channelId])
  // console.log(videoInfo)
  return (
    <>
      {videoInfo !== undefined ? <><hr style={props.channelPage ? { display: 'none' } : {}} />
        <div className='video_channel_container' style={props.channelPage ? { backgroundColor: 'black', paddingTop: '1rem', paddingBottom: '1rem', marginBottom: '1rem' } : {}}>
          <img src={videoInfo.snippet.thumbnails.high.url}
          />
          <div className='channel_name_subscibe_button'>
            <span>
              <li>{videoInfo.snippet.title}</li>
              <li>{numeral(videoInfo.statistics.subscriberCount).format("0.a")} subscriber</li>
            </span>
            <button
              // onClick={SubChannel} 
              className={!subFlag ? 'subButton open' : 'subButton'}
            >
              {!subFlag ? 'subscribed' : 'subscribe'}
            </button>
          </div>
        </div>
        <hr style={props.channelPage ? { display: 'none' } : {}} />
        {!props.channelPage ? <ShowMoreText
          lines={3}
          more='Show More'
          less='Show Less'
          className='decription_decor'
          anchorClass="description"
        >
          {videoInfo.snippet.description}
        </ShowMoreText> : ''}
      </>
        : <h1>loading</h1>}
    </>
  )
}


export default ChannelInfo
