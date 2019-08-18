import React, {Component} from 'react';
import axios from 'axios';
import NewForm from './components/NewForm'
import Show from './components/Show'
import trash from './images/trashIcon.png'
import SamEditForm from './components/SamEditForm'

import DisplayEditOption from './components/DisplayEditOption'

let baseURL = "http://localhost:3003"

console.log('current base URL', baseURL)


class App extends Component {
  constructor(props) {
    super(props)
    this.state ={
      bookmarks: [],
      bookmark: {},
      selected: false
    }
    this.handleAddBookmark = this.handleAddBookmark.bind(this)
    this.deleteBookmark = this.deleteBookmark.bind(this)
    this.toggleSelected = this.toggleSelected.bind(this)
  }

  handleAddBookmark(bookmark) {
    this.setState({
      bookmarks: [...this.state.bookmarks, bookmark]
    })
  }


  //maybe move this function later to our show or other component file to use with the update function
  updateBookmark(thisBookmark) {
    const bookmarks = this.state.bookmarks;

    bookmarks.forEach(bookmark => {
      if(bookmark._id === thisBookmark._id) {
        bookmark.name = thisBookmark.name;
        bookmark.link = thisBookmark.link;
        bookmark.description = thisBookmark.description;
        return bookmark
      }
    })
    this.setState({
      bookmarks: bookmarks
    })
  }

  //use this function to either show pencil icon to click on or to show form to update current bookmark
  toggleSelected(selected) {
    selected ? this.setState({
      selected: false 
    }) :
    this.setState({
      selected: true
    })
  }

  // use this function to get all bookmarks from our database
  async getBookmarks() {
    const response = await axios.get(`${baseURL}/bookmarks`)
    const bookmarks = response.data
    this.setState({bookmarks: bookmarks})
  }

  //use this to delete a bookmark when click is heard on the trash icon
  async deleteBookmark(id){
    await axios.delete(`${baseURL}/bookmarks/${id}`)
    const filteredBookmarks = this.state.bookmarks.filter((bookmark) => {
      return (bookmark._id !== id)
    })
    this.setState({
      bookmarks: filteredBookmarks
    })
  }

  //maybe move this to the show file to use with our update form
  async handleUpdateBookmark(bookmarkToUpdate){
    this.setState({
      bookmark: bookmarkToUpdate
    })
  }

  //this function waits for the page to load, then gets all our bookmarks to display
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
                  
                  <div onClick={() => this.deleteBookmark(bookmark._id)}>
                    <img src={trash} alt="delete bookmark"/>
                  </div>
                  
                  <div >
                    <DisplayEditOption bookmark={bookmark} updateBookmark={this.updateBookmark}/>
                  </div>
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
