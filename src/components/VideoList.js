import React from 'react'
import axios from 'axios'

const makeRequest = async (term) => {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet', {
        query: {
            q: term,
            key: {process.env.REACT_APP_YOUTUBE_API}
        }
    })
    console.log(response)
}

const VideoList = (props) => {
    makeRequest(props.term)
}

export default VideoList