import axios from 'axios';
import React from 'react';

let baseURL = 'http://localhost:3003'

console.log('current baseURL:', baseURL)


class NewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            link: "",
            description:"",
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({ [event.currentTarget.id]: event.currentTarget.value})
    }

    async handleSubmit (event) {
        event.preventDefault()
        const response = await axios.post(`${baseURL}/bookmarks`, {name: this.state.name})
        this.setState({name: ''})
        this.props.handleAddBookmark(response.data)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name"></label>
                <input type="text" id="name" name="name" placeholder="Add a Link..." onChange={this.handleChange} value={this.state.name}></input>
                <input type="text" id="description" name="description" placeholder="Description" onChange={this.handleChange} value={this.state.name} ></input>
                <input type="submit" value="Submit"></input>
            </form>
        )
    }
} 

export default NewForm;