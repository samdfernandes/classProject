import React, {Component} from 'react';
import axios from 'axios';
import NewForm from './components/NewForm'
import Show from './components/Show'
import trash from './images/trashIcon.png'
import pencil from './images/pencilIcon.png'

let baseURL = "http://localhost:3003"

console.log('current base URL', baseURL)


class App extends Component {
  constructor(props) {
    super(props)
    this.state ={
      bookmarks: []
    }
    this.handleAddBookmark = this.handleAddBookmark.bind(this)
    this.deleteBookmark = this.deleteBookmark.bind(this)
  }

  handleAddBookmark(bookmark) {
    this.setState({
      bookmarks: [...this.state.bookmarks, bookmark]
    })
  }

  updateBookmark(thisBookmark) {
    const bookmarks = this.state.bookmarks;

    bookmarks.forEach(bookmark => {
      if(bookmark._id === thisBookmark._id) {
        bookmark.name = thisBookmark.name;
        bookmark.link = thisBookmark.link;
        bookmark.description = thisBookmark.description;
      }
    })
    this.setState({
      bookmarks: bookmarks
    })
  }



  async getBookmarks() {
    const response = await axios.get(`${baseURL}/bookmarks`)
    const bookmarks = response.data
    this.setState({bookmarks: bookmarks})
  }

  async deleteBookmark(id){
    await axios.delete(`${baseURL}/bookmarks/${id}`)
    const filteredBookmarks = this.state.bookmarks.filter((bookmark) => {
      return (bookmark._id !== id)
    })
    this.setState({
      bookmarks: filteredBookmarks
    })
  }

  async handleUpdateBookmark(bookmarkToUpdate){
    this.setState({
      bookmark: bookmarkToUpdate
    })
  }
  componentDidMount() {
    this.getBookmarks()
  }

  render() {
    return (
    <div>
    <NewForm handleAddBookmark={this.handleAddBookmark}/>
     <div>
        <ul>
          {
            this.state.bookmarks.map(bookmark => {
              return(
                <li key={bookmark._id}>
                  <a href={bookmark.link}>{bookmark.name}</a>
                  <div onClick={() => this.deleteBookmark(bookmark._id)}><img src={trash} alt="delete bookmark"/></div>
                  <div onclick={() => this.handleUpdateBookmark(bookmark._id)}>
                  <img src={pencil} alt="edit bookmark"/></div>
                </li>
              )
            })
          }
        </ul>
     </div> 
      
     
      
      
    </div>
    )
  }
}

export default App;
