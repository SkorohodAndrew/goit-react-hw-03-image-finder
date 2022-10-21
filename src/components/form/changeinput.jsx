import React, { Component } from 'react';

export class changeinput extends Component {
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.name;
    const nextName = this.state.name;
    const { name, page } = this.state;
    if (prevProps.name !== this.props.name) {
      console.log(prevProps.name);
      console.log(this.props.name);
      this.handleChangeState();
    }
    if (prevName !== nextName) {
      this.fetchPictures(name, page).then(response => {
        this.setState({ images: response, page: page + 1, loading: false });
      });
    }
  }

  render() {
    return <div>changeinput</div>;
  }
}
