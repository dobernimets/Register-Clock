import { Order } from "../order/Order";

export type Customer = {
  createdAt: Date;
  customerName: string | null;
  email: string | null;
  id: string;
  isblock: boolean | null;
  orders?: Array<Order>;
  updatedAt: Date;
};
