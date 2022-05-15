import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type CustomerWhereInput = {
  customerName?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  isblock?: BooleanNullableFilter;
  orders?: OrderListRelationFilter;
};
