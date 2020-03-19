import React from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import MainVideo from './MainVideo'
import axios from 'axios'

class App extends React.Component{
    state = {term: null, response: null, headvideo: null}

    constructor(props){
        super(props)
        this.makeRequest("Orange")
    }

    async makeRequest(term){
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet', {
            params: {
                q: {term},
                key: `${process.env.REACT_APP_YT_API}`
            }
        })
         this.setState({response: response, headvideo: response.data.items[0]})
    }

    onSearch = (term) => {
        this.setState({term: term})
        this.makeRequest(term)
    }

    onSearchSuccess = (video) => {
        this.setState({headvideo: video})
    }

    selectMainVideo = (video) => {
        console.log(video)
        this.setState({headvideo: video})
    }

    render(){
        return(
            <div className="container">
                <SearchBar onTermSubmit={this.onSearch}/>
                <div className="row">
                    <div className="col-md-8">
                        <MainVideo video={this.state.headvideo}/>
                    </div>
                    <div className="col-md-4">
                        <VideoList response={this.state.response} 
                            mainvideo={this.onSearchSuccess} 
                            currentMainVideo={this.state.headvideo}
                            selectedVideo={this.selectMainVideo}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default App