import { OrderCreateNestedManyWithoutCustomersInput } from "./OrderCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  customerName?: string | null;
  email?: string | null;
  isblock?: boolean | null;
  orders?: OrderCreateNestedManyWithoutCustomersInput;
};
