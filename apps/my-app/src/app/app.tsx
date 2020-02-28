import React from 'react';
import './app.css';
import { Admin, Resource, ListGuesser, ShowGuesser, EditGuesser } from '../components';
import simpleRestProvider from 'ra-data-simple-rest';
import jsonServerProvider from 'ra-data-json-server';

import { Todos, users } from '../modules'


const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

const myDataProvider = {
    ...dataProvider
}

export const App = () => {
  return (
    <Admin dataProvider={myDataProvider}>
      <Resource {...Todos} />
      <Resource {...users} />
    </Admin>
  );
};

export default App;
