import React from 'react'

const titleStyle = {
    fontSize: "1.2rem",
    fontWeight: "500"
}

const MainVideo = (props) => {
    if(props.video){
        return (
            <div>
                <iframe height="450px" 
                  width="100%" 
                  src={`https://www.youtube.com/embed/${props.video.id.videoId}`} 
                  style={{margin: "15px"}}/>
                  <div className="video-info" style={{marginLeft: "15px"}}>
                    <p style={titleStyle}>{props.video.snippet.title}</p>  
                    <p>{props.video.snippet.description}</p>
                  </div>
            </div>
        )
    }
    return null
}

export default MainVideo