import React from 'react';
import {
    FullNameField,
    Edit,
    TabbedForm,
    TextInput,
    FormTab,
    SelectInput,
    SimpleForm,
    BooleanInput,
    TextField
} from 'admin-on-rest';

const OrderTitle = ({ title }) => title ? <FullNameField record={title} size={32} /> : null;

const detailStyle = { display: 'inline-block', verticalAlign: 'top', marginRight: '2em', minWidth: '8em' };
const OrderEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextField style={detailStyle} source="orderId" />
      <BooleanInput source="isCancelled"/>
    </SimpleForm>
  </Edit>
);

export default OrderEdit
