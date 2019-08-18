import React from 'react'
import axios from 'axios'

class UpdateBookmark extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.bookmark.name,
            link: this.props.bookmark.link,
            description: this.props.bookmark.description,
            id: this.props.bookmark._id
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.currentTarget;
        this.setState({
            [name]: value
        })
    } 

    async handleSubmit(event) {
        event.preventDefault();
        const baseURL = this.props.baseURL;
        const response = await axios.put(`${baseURL}/bookmarks/${this.state.id}`, {
            name: this.state.name,
            url: this.state.url
        })
        this.props.handleEditThisBookmark(response.data);
        this.props.editDone();
    }
    render() {
        return(
            <div class="editForm">
            <h1> Edit </h1>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name"></label>
                <input type="text" id="link" name="link" placeholder="Add a Link..." onChange={this.handleChange} value={this.state.link}></input>
                <input type="text" id="name" name="name" placeholder="Website Name" onChange={this.handleChange} value={this.state.name}></input>
                <input type="text" id="description" name="description" placeholder="Description" onChange={this.handleChange} value={this.state.description} ></input>
                <input type="submit" value="Submit"></input>
            </form>
            </div>
        )
    }
}

export default UpdateBookmark;