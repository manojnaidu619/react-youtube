import React from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import MainVideo from './MainVideo'
import axios from 'axios'


class App extends React.Component{
    state = {term: null, response: null, headvideo: {}}

    async makeRequest(term){
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet', {
            params: {
                q: {term},
                key: //Add key here as string
            }
        })
         this.setState({response})
    }

    onSearch = (term) => {
        this.setState({term: term})
        this.makeRequest(term)
    }

    onSearchSuccess = (video) => {
        console.log(video)
        this.setState({headvideo: video})
    }

    render(){
        return(
            <div className="container">
                <SearchBar onTermSubmit={this.onSearch}/>
                <div className="row">
                    <div className="col-md-8">
                        <MainVideo/>
                    </div>
                    <div className="col-md-4">
                        <VideoList response={this.state.response} mainvideo={this.onSearchSuccess}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App