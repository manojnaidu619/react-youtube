import React from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'

class App extends React.Component{
    state = {term: ''}
    onSearch = (term) => {
        this.setState({term: term})
    }
    render(){
        return(
            <div className="container">
                <SearchBar onTermSubmit={this.onSearch}/>
                <VideoList/>
            </div>
        )
    }
}

export default App