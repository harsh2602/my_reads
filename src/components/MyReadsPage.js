import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';

class MyReadsPage extends Component {
	static propTypes = {
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired,
  };

	filterBooks = (shelf) => (this.props.books.filter(book => book.shelf === shelf));

	render() {
		const { onShelfChange } = this.props;

		return (
			<div className='list-books'>
				<div className="list-books-title">
              <h1>My Reads</h1>
        </div>
					<BookShelf title='Currently Reading' filteredBooks={this.filterBooks('currentlyReading')} onShelfChange={onShelfChange} />
					<BookShelf title='Want To Read' filteredBooks={this.filterBooks('wantToRead')} onShelfChange={onShelfChange} />
					<BookShelf title='Read' filteredBooks={this.filterBooks('read')} onShelfChange={onShelfChange} />

					<div className="open-search">
		        <Link className='close-search' to='/search'>Add a Book</Link>
		      </div>

			</div>
		)
	}
}

export default MyReadsPage;
