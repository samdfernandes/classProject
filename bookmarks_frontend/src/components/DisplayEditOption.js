import React from 'react';
import SamEditForm from './SamEditForm';
import pencil from '../images/pencilIcon.png'
let baseURL = 'http://localhost:3003'

class Show extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isEditing: false,
            bookmark: {},
            bookmark: this.props.bookmark
		};

		this.beginEditFunction = this.beginEditFunction.bind(this);
		this.closeEditFunction = this.closeEditFunction.bind(this);
		this.handleDisplayEditBookmark = this.handleDisplayEditBookmark.bind(this);
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
		this.props.editBookmark(bookmark);
	}

	render() {
		return (
            <div onClick={() => this.beginEditFunction(this.state.bookmark)}>
                <img src={pencil} alt="edit bookmark" />
                {this.state.isEditing ?
                    <SamEditForm
                        bookmark={this.state.bookmark}
                        handleDisplayEditBookmark={this.handleDisplayEditBookmark(this.state.bookmark)} 
                        />
                    : null}
			</div>
		);
	}
}

export default Show;
