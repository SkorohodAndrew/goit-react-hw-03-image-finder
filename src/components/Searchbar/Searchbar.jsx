import React, { Component } from 'react';
import { SearchBarHeader, SearchForm, FormInput } from './SearchBarStyled';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  state = {
    name: '',
  };

  onHandleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.setState({ name: '' });
  };

  render() {
    return (
      <>
        <SearchBarHeader class="searchbar">
          <SearchForm class="form" onSubmit={this.handleSubmit}>
            <button type="submit" class="button">
              <span class="button-label">Search</span>
            </button>

            <FormInput
              onChange={this.onHandleChange}
              value={this.state.name}
              name="name"
              class="input"
              type="text"
              autocomplete="off"
              autofocus
              placeholder="Search images and photos"
            />
          </SearchForm>
        </SearchBarHeader>
      </>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
