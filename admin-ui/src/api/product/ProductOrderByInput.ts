import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  producrName?: SortOrder;
  serialNumber?: SortOrder;
  updatedAt?: SortOrder;
};
