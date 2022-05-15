import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ProductWhereInput = {
  id?: StringFilter;
  orders?: OrderListRelationFilter;
  producrName?: StringNullableFilter;
  serialNumber?: StringNullableFilter;
};
