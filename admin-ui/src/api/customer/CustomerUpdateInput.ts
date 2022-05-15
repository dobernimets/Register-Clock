import { OrderUpdateManyWithoutCustomersInput } from "./OrderUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  customerName?: string | null;
  email?: string | null;
  isblock?: boolean | null;
  orders?: OrderUpdateManyWithoutCustomersInput;
};
