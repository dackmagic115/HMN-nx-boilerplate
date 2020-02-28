import React from 'react'
import { Edit, SimpleForm, ReferenceInput, TextInput, BooleanInput, SelectInput } from '../../components'

export const TodoEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="title" />
            <BooleanInput source="completed" />
        </SimpleForm>
    </Edit>
);