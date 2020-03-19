import React from 'react'
import './Video.css'

const Video = (props) => {
    return(
        <div className="video" onClick={() => props.selectedVideo(props.video)}>
            <img className="video-img" src={props.video.snippet.thumbnails.default.url}/>
            <div className="video-info">
                <div className="video-title">{props.video.snippet.title}</div>
                <div className="video-ch-title">{props.video.snippet.channelTitle}</div>
            </div>
        </div>
    )
}

export default Video

//props.selectedVideo(props.video)