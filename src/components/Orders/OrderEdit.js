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
      <BooleanInput source="orderCompleted"/>
      <TextField style={detailStyle} source="shippingAddress.zip" />
      <TextField style={detailStyle} source="shippingAddress.city" />
      <TextField style={detailStyle} source="shippingAddress.state" />
      <TextField style={detailStyle} source="shippingAddress.street1" />
      <TextField style={detailStyle} source="shippingAddress.street2" />
    </SimpleForm>
  </Edit>
);

export default OrderEdit
