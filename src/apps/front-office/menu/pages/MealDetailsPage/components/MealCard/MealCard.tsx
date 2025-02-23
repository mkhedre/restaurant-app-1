import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import Stars from "apps/front-office/design-system/components/Stars";
import { formatPrice } from "apps/front-office/design-system/utils/format-price";
import URLS from "apps/front-office/utils/urls";
import { AiFillHeart } from "react-icons/ai";
import { TbShoppingBag } from "react-icons/tb";
import { MealType } from "../../utils/types";

export type MealCardProps = {
  meal: MealType;
};

export default function MealCard({ meal }: MealCardProps) {
  const displayedPrice = formatPrice(meal?.price);
  const displayedSale = formatPrice(meal?.salePrice);

  return (
    <div className="p-3 group rounded-[2rem] border relative">
      <button title="Add to favorite" className="absolute top-6 right-6 z-20">
        <AiFillHeart
          className="hover:text-red-500 transition-colors text-light/50 duration-300"
          size={30}
        />
      </button>
      <Link
        to={URLS.menu.viewMeal(meal)}
        className="h-64 relative overflow-hidden flex items-center justify-center cursor-pointer rounded-3xl">
        <img
          src={meal.image.url + "?w=200&h=200"}
          alt={meal.name}
          width={200}
          height={200}
          className="group-hover:scale-125 z-10 rounded-full transition-transform duration-300"
        />
        <span className="absolute bottom-0 left-0 w-full h-1/2 bg-primary-main rounded-3xl group-hover:bg-opacity-100 group-hover:h-full transition-all duration-300 bg-opacity-10"></span>
      </Link>
      <div className="mt-6 space-y-2 m-3">
        <Stars ratings={meal.ratings} />
        <Link
          to={URLS.menu.viewMeal(meal)}
          className="font-bold text-lg inline-block">
          {meal.name}
        </Link>
        <p title={meal.description} className="line-clamp-2 font-light">
          {meal.description}
        </p>
        <div className="flex items-center justify-between gap-4">
          <div className="flex gap-2">
            <span className="inline-block text-rose-600">{displayedSale}</span>
            <span
              className={`inline-block  ${
                displayedSale ? "text-black line-through" : "text-primary-main"
              }`}>
              {displayedPrice}
            </span>
          </div>
          <button
            title={trans("addToCart")}
            className="bg-primary-main p-2 rounded-2xl hover:bg-primary-hover transition-colors">
            <TbShoppingBag color="#000"></TbShoppingBag>
          </button>
        </div>
      </div>
    </div>
  );
}
