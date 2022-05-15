import { OrderUpdateManyWithoutProductsInput } from "./OrderUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  orders?: OrderUpdateManyWithoutProductsInput;
  producrName?: string | null;
  serialNumber?: string | null;
};
