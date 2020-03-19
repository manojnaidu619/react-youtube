import React from 'react'
import Video from './Video'

class VideoList extends React.Component {
    render(){
        if(this.props.response){
            this.props.mainvideo(this.props.response.data.items[0])
            return (
                this.props.response.data.items.map(video => {
                    return <Video key={video.id.videoId} video={video}/>
                })
            )
        }
        return null
    }
}

export default VideoList