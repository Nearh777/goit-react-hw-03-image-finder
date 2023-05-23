import React, {Component} from "react";

import { Header, Form, ButtonSearchForm, ButtonLabel, Input } from './Searchbar.styled';

// import React from "react";

export class Searchbar extends Component {


    render() {


        return(
            <Header>
        <Form>
          <ButtonSearchForm type="submit">
            <ButtonLabel>Search</ButtonLabel>
          </ButtonSearchForm>
      
          <Input
            type="text"
            autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
          />
        </Form>
      </Header> 
        ) 
    }
} 

