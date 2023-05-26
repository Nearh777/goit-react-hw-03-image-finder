import React, { Component } from 'react';
import { toast} from 'react-toastify';
import { ImSearch } from 'react-icons/im';
import { Header, Form, ButtonSearchForm, ButtonLabel, Input, } from './Searchbar.styled';

// import React from "react";

export class Searchbar extends Component {
  state = {
    onSubmit: '',
      };

  handleCategoryChange = e => {
    this.setState({onSubmit: e.currentTarget.value.toLowerCase()});
  };

  handleSubmit = e => {
    e.preventDefault();

    if(this.state.onSubmit.trim() === '') {
      return toast('Введіть назву категорії!');
    } 
      

    this.props.onSubmit(this.state.onSubmit);
    this.setState({onSubmit: ''});
  }

  render() {
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
            // autofocus
            value={this.state.value}
            onChange={this.handleCategoryChange}
            placeholder="Search images and photos"
          />
        </Form>
      </Header>
    );
  }
}
