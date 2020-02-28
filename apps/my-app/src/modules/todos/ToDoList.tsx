import React from 'react';
import { List, Datagrid, ReferenceField, TextField,BooleanField, Pagination, ShowButton, EditButton, Filter, TextInput } from '../../components'



const TodoPagination = props => <Pagination rowsPerPageOptions={[10]} {...props} />;

const PostFilter = (props) => (
  <Filter {...props}>
      <TextInput label="Search" source="q" alwaysOn />
  </Filter>  
);

export const TodoList = props => (
  <List {...props} pagination={<TodoPagination/>} filters={<PostFilter/>} >
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <BooleanField source="completed" />
      <ShowButton/>
      <EditButton/>
    </Datagrid>
  </List>
);
