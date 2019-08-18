import axios from 'axios';
import React from 'react';

let baseURL = 'http://localhost:3003'

console.log('current baseURL:', baseURL)


class SamEditForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.bookmark.name,
            link: this.props.bookmark.link,
            description: this.props.bookmark.description,
            id: this.props.bookmark._id,
            bookmarks: this.props.bookmarks
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({ 
            [name]: value
        })
    }

    async handleSubmit (event) {
        event.preventDefault()
        const response = await axios.put(`${baseURL}/bookmarks/${this.props.bookmark._id}`, {name: this.state.name, link: this.state.link, description: this.state.description})
        this.setState({
            name: "",
            link: "",
            description: ""
        })
        this.props.updateBookmark(response.data)
        this.props.closeEditFunction()
        window.location.reload();
    }

    

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name"></label>
                <input type="text" name="link"  value={this.state.link} onChange={this.handleChange} />
                <input type="text" name="name"  value={this.state.name} onChange={this.handleChange} />
                <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
                <input class="submit" type="submit" value="Submit" />
            </form>
        )
    }
} 

export default SamEditForm;