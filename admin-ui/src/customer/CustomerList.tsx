import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const CustomerList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Customers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="customerName" source="customerName" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <BooleanField label="isblock" source="isblock" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
