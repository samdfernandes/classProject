import React, {Component} from 'react';
import axios from 'axios';
import NewForm from './components/NewForm'
import Show from './components/Show'

let baseURL = "http://localhost:3003"

console.log('current base URL', baseURL)


class App extends Component {
  constructor(props) {
    super(props)
    this.state ={
      bookmarks: []
    }
    this.handleAddBookmark = this.handleAddBookmark.bind(this)
  }

  handleAddBookmark(bookmark) {
    this.setState({
      bookmarks: [...this.state.bookmarks, bookmark]
    })
  }

  async getBookmarks() {
    const response = await axios.get(`${baseURL}/bookmarks`)
    const bookmarks = response.data
    this.setState({bookmarks: bookmarks})
  }

  componentDidMount() {
    this.getBookmarks()
  }

  render() {
    return (
    <div>

     <div>
        <ul>
          {
            this.state.bookmarks.map(bookmark => {
              return(
                <li key={bookmark._id}>
                  <a href={bookmark.link}>{bookmark.name}</a>
                </li>
              )
            })
          }
        </ul>
     </div> 
      <Show name={this.state.name}/>
      <NewForm handleAddBookmark={this.handleAddBookmark}/>
    </div>
    )
  }
}

export default App;
