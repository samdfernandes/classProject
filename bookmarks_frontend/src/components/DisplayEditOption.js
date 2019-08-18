import React from 'react';
import SamEditForm from './SamEditForm';
import pencil from '../images/pencilIcon.png'
let baseURL = 'http://localhost:3003'

class Show extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isEditing: false,
            bookmarks: this.props.bookmarks,
            bookmark: this.props.bookmark
		};

		this.beginEditFunction = this.beginEditFunction.bind(this);
		this.closeEditFunction = this.closeEditFunction.bind(this);
        this.handleDisplayEditBookmark = this.handleDisplayEditBookmark.bind(this);
        this.updateBookmark = this.updateBookmark.bind(this)
	}

	// FUNCTION
	//This function will start the editing of our bookmark
	beginEditFunction = bookmark => {
		this.setState({
			isEditing: !this.state.editMode,
			bookmark: bookmark
		});
	};

    //this will close the editing with the submit button
	closeEditFunction = () => {
		this.setState({
			isEditing: false
		});
	};

	handleDisplayEditBookmark(bookmark) {
		this.props.updateBookmark(bookmark);
    }
    
    updateBookmark(thisBookmark) {
        const bookmarks = [this.props.bookmarks];
    
        const newbookmarks = bookmarks.map(bookmark => {
          if(bookmark._id === thisBookmark._id) {
            bookmark.name = thisBookmark.name;
            bookmark.link = thisBookmark.link;
            bookmark.description = thisBookmark.description;
            return bookmark
          }
        })
        this.setState({
          bookmarks: newbookmarks
        })
      }

	render() {
		return (
            <div onClick={() => this.beginEditFunction(this.state.bookmark)}>
                <img id="editbtn" src={pencil} alt="edit bookmark" />
                {this.state.isEditing ?
                    <SamEditForm
                        bookmark={this.state.bookmark} 
                        bookmarks={this.state.bookmarks} 
                        updateBookmark={this.updateBookmark}
                        closeEditFunction={this.closeEditFunction}/>

                    : null}
			</div>
		);
	}
}

export default Show;
