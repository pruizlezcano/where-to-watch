import React, { useState } from 'react';
import Select from 'react-select';
import CountryList from '../../others/countryList';
import { Form, Label, Input, Button, Results } from './styles';
import Item from '../Item/index';

const Main = () => {
  const [query, setQuery] = useState('');
  const [language, setLanguage] = useState('');
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query && language) {
      fetch(
        `https://wtwapi.cyclops.ga/content/${language}/${query
          .split(' ')
          .join('+')}`
      )
        .then((res) => res.json())
        .then((json) => {
          setList(json.items);
        });
    }
  };

  return (
    <div>
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
      <Results>
        {list.map((item) => (
          <Item key={item.id} {...item}></Item>
        ))}
      </Results>
    </div>
  );
};

export default Main;
