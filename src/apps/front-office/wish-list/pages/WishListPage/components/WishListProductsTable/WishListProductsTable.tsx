import { trans } from "@mongez/localization";
import { IoClose } from "react-icons/io5";
import WishListProductsTableItem from "../WishListProductsTableItem";

export type WishListProductsTableProps = {
  wishListProducts: {
    id: string;
    name: string;
    thumbnail: string;
    price: string;
    subtotal: string;
  }[];
};

export default function WishListProductsTable({
  wishListProducts,
}: WishListProductsTableProps) {
  return (
    <div className="wishList-products-table">
      <table className="table-auto w-full bg-white text-left text-[15px] font-bold capitalize max-sm:text-[12px]">
        <thead className="max-lg:hidden">
          <tr className="bg-white border-b uppercase text-[12px]">
            <th className="product-remove px-3 pb-5">
              <IoClose size="0" />
            </th>
            <th className="product-thumbnail px-3 pb-5 text-[0px]">
              {trans("productThumbnail")}
            </th>
            <th scope="col" className="product-name px-3 pb-5 text-[12px]">
              {trans("product")}
            </th>
            <th scope="col" className="product-price px-3 pb-5">
              {trans("price")}
            </th>
            <th scope="col" className="stock-status px-3 pb-5">
              {trans("stockStatus")}
            </th>
            <th scope="col" className="add-to-cart px-3 pb-5"></th>
          </tr>
        </thead>
        <tbody>
          {wishListProducts.map(product => (
            <WishListProductsTableItem
              key={product.id}
              productDetails={product}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
