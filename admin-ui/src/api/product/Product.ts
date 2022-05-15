import { Order } from "../order/Order";

export type Product = {
  createdAt: Date;
  id: string;
  orders?: Array<Order>;
  producrName: string | null;
  serialNumber: string | null;
  updatedAt: Date;
};
