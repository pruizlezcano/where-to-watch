import React, { useState } from 'react';
import Select from 'react-select';
import CountryList from '../../others/countryList';
import { Form, Label, Input, Button } from './styles';
import Item from '../Item/index';

const SearchInput = () => {
  const [query, setQuery] = useState('');
  const [language, setLanguage] = useState('');
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query && language) {
      fetch(
        `https://apis.justwatch.com/content/titles/${language}/popular?body={"page_size":15,"page":1,"query":"${query
          .split(' ')
          .join('+')}"}`
      )
        .then((res) => res.json())
        .then((json) => {
          setList(json.items);
        });
    }
  };

  return (
    <div>
      <div className="logoSection">
        <img id="logo" src="logo-light.png" alt="WhereToWatch" />
      </div>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="query" hidden>
          Movie/Serie
        </Label>
        <Input
          type="text"
          id="query"
          name="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          classname="input"
          placeholder="Search for a movie or TVShow"
        />
        <Select
          className="countrySelector"
          classNamePrefix="countrySelector"
          menuColor="red"
          options={CountryList}
          onChange={(e) => setLanguage(e.value.slice(e.value.indexOf('.') + 1))}
        />
        <Button type="submit">Search</Button>
      </Form>
      <div className="results">
        {list.map((item) => (
          <Item key={item.id} {...item}></Item>
        ))}
      </div>
    </div>
  );
};

export default SearchInput;
