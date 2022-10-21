import React, { Component } from 'react';
import axios from 'axios';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    name: '',
    page: 1,
    images: [],
    loading: false,
  };

  // componentDidUpdate(prevProps, prevState) {
  //   const prevName = prevState.name;
  //   const nextName = this.state.name;
  //   const { name, page } = this.state;
  //   if (prevProps.name !== this.props.name) {
  //     console.log(prevProps.name);
  //     console.log(this.props.name);
  //     this.handleChangeState();
  //   }
  //   if (prevName !== nextName) {
  //     this.fetchPictures(name, page).then(response => {
  //       this.setState({ images: response, page: page + 1, loading: false });
  //     });
  //   }
  // }

  fetchPictures = async (name, page) => {
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?q=${name}&page=${page}&key=29414226-e56ab89f6667b3612bf4ca3ef&image_type=photo&orientation=horizontal&per_page=12`
      );
      console.log(response.data.hits);
      return response.data.hits;
    } catch (error) {}
  };

  handleChangeState = ({ name }) => {
    this.setState({ name: name, page: 1, loading: true });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleChangeState} />
      </div>
    );
  }
}
