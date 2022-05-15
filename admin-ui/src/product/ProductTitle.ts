import { Product as TProduct } from "../api/product/Product";

export const PRODUCT_TITLE_FIELD = "producrName";

export const ProductTitle = (record: TProduct): string => {
  return record.producrName || record.id;
};
