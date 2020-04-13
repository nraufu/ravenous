import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  state = { term: "", location: "", sortBy: "best_match" };
  sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
  };

  getSortByClass = (sortByOption) => {
    return this.state.sortBy === sortByOption ? "active" : "";
  };

  handleSortByChange = (sortByOption) => {
    this.setState({ sortBy: sortByOption });
  };

  handleTermChange = (event) => {
    this.setState({ term: event.target.value });
  };

  handleLocationChange = (event) => {
    this.setState({ location: event.target.value });
  };

  handleSearch = (event) => {
    const { term, location, sortBy } = this.state;
    this.props.searchYelp(term, location, sortBy);
    event.preventDefault();
  };

  renderSortByOptions = () => {
    return Object.keys(this.sortByOptions).map((sortByOption) => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return (
        <li
          key={sortByOptionValue}
          className={this.getSortByClass(sortByOptionValue)}
          onClick={() => this.handleSortByChange(sortByOptionValue)}
        >
          {sortByOption}
        </li>
      );
    });
  };

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul> {this.renderSortByOptions()} </ul>
        </div>
        <div className="SearchBar-fields">
          <input
            placeholder="Search Businesses"
            onChange={this.handleTermChange}
          />
          <input placeholder="Where?" onChange={this.handleLocationChange} />
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch}> Let 's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
