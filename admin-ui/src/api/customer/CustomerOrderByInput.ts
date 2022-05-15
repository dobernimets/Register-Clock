import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  createdAt?: SortOrder;
  customerName?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  isblock?: SortOrder;
  updatedAt?: SortOrder;
};
