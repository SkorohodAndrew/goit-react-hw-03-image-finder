import React, { Component } from 'react';
// import { changeinput } from 'components/form/changeinput';

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
        <header class="searchbar">
          <form class="form" onSubmit={this.handleSubmit}>
            <button type="submit" class="button">
              <span class="button-label">Search</span>
            </button>

            <input
              onChange={this.onHandleChange}
              value={this.state.name}
              name="name"
              class="input"
              type="text"
              autocomplete="off"
              autofocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </>
    );
  }
}
