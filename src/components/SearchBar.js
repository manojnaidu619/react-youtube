import React from 'react'

class SearchBar extends React.Component{
    state = {term: ''}
    onSubmit = (event) => {
        event.preventDefault()
        this.props.onTermSubmit(this.state.term)
    }
    onChangeHandler = (event) => {
        this.setState({term: event.target.value})
    }

    render(){
        return (
            <div className="container" style={{marginTop: "25px"}}>
                <form onSubmit={this.onSubmit}>
                    <input type="text" style={{width: "100%", outline: "none"}} placeholder="Search here" onChange={this.onChangeHandler} value={this.state.term}></input>
                </form>
            </div>
        )
    }
}

export default SearchBar