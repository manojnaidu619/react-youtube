import React from 'react'
import Video from './Video'

class VideoList extends React.Component {
    render(){
        if(this.props.response){
            return (
                this.props.response.data.items.map(video => {
                    return <Video selectedVideo={this.props.selectedVideo} key={video.id.videoId} video={video}/>
                })
            )
        }
        return null
    }
}

export default VideoList