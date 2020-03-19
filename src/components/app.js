import React from 'react'
import SearchBar from './SearchBar'

class App extends React.Component{
    state = {term: ''}
    onSearch= (term) => {
        this.setState({term: term})
    }
    render(){
        return(
            <div className="container">
                <SearchBar onTermSubmit={this.onSearch}/>
                {this.state.term}
            </div>
        )
    }
}

export default App