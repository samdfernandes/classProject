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
      name: "",
      link: "",
      description: ""
    }
    this.handleAddBookmark = this.handleAddBookmark.bind(this)
  }

  handleAddBookmark(bookmark) {
    this.setState({
      bookmarks: [...this.state.bookmarks, bookmark]
    })
  }

  render() {
    return (
    <div>

     {/* <div>
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
     </div> */}
      <Show name={this.state.name}/>
    </div>
    )
  }
}

export default App;
