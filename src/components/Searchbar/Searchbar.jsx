import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { ImSearch } from 'react-icons/im';
import {
  Header,
  Form,
  ButtonSearchForm,
  ButtonLabel,
  Input,
} from './Searchbar.styled';

// import React from "react";

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = ({target:{value}}) => {
    this.setState({query: value})
  }

  // handleСhange = e => {
  //   this.setState({ query: e.target.value.toLowerCase() });
  // };

  handleSubmit = e => {
    e.preventDefault();
    const { query } = this.state;
    if (query.trim() === '') {
      return toast('Введіть назву категорії!');
    }
    this.props.onSubmit(query);
    this.setState({query: ''});
  };

  // handleСhange = e => {
  //   this.setState({text: e.currentTarget.value.toLowerCase()});
  // };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   const { query } = this.state;
  //   if(query.trim() === '') {
  //     return toast('Введіть назву категорії!');
  //   }

  //   this.props.onSubmit(query);
  //   this.setState({onSubmit: ''});
  // }

  render() {
    const { query } = this.state;

    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <ButtonSearchForm type="submit">
            <ButtonLabel>Search</ButtonLabel>
            <ImSearch style={{ width: 25, height: 25 }} />
          </ButtonSearchForm>

          <Input
            type="text"
            autocomplete="off"
            autoFocus
            value={query}
            onChange={this.handleChange}
            placeholder="Search images and photos"
          />
        </Form>
      </Header>
    );
  }
}

// onSubmit={this.handleSubmit}
