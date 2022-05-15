import { OrderCreateNestedManyWithoutProductsInput } from "./OrderCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  orders?: OrderCreateNestedManyWithoutProductsInput;
  producrName?: string | null;
  serialNumber?: string | null;
};
