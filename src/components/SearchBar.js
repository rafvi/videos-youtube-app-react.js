import React from 'react';
import '../style/SearchBar.css';

class SearchBar extends React.Component {
    state = { searchInput: '' };

    onInputChange = (event) => {
        this.setState({ searchInput: event.target.value });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.searchInput);
    }

    render() {
        return (
            <div className="ui category search">
                <form className="ui icon input" onSubmit={this.onFormSubmit}>
                    <input className="prompt" type="text" placeholder="Search..." value={this.state.searchInput} onChange={this.onInputChange} />
                    <i className="search icon"></i>
                </form>
                <div className="results"></div>
            </div>
        )
    }
}

export default SearchBar;