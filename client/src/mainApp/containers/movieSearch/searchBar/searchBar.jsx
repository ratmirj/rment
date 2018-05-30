import React from 'react'
import PropTypes from 'prop-types'
import './searchBar.scss'
import { connect } from 'react-redux'
import { getMoviesByTitle } from '../../../redux/actions';

class SearchBarC extends React.Component {
  constructor() {
    super();

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    console.log('dispatching action');
    const id = 1;
    this.props.onClick('sometitle');
  }

  render() {
  return (<form>
      <input className="searchbar__input" type="text"/>
      <div className="searchbar__controlls">
          <div className="searchbar__seachby">
              Sort By
              <button>Name</button>
              <button>Genre</button>
          </div>
          <div className="searchbar__search">
              <span onClick={this.handleButtonClick}>Search</span>
          </div>
      </div>
  </form>)
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
 onClick: (id) => {
   dispatch(getMoviesByTitle(id));
 }
})

const SearchBar = connect(mapStateToProps, mapDispatchToProps)(SearchBarC);

export { SearchBar }
