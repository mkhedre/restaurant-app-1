import { trans } from "@mongez/localization";
import { Button } from "apps/front-office/design-system/components/Button";
import Stars from "apps/front-office/design-system/components/Stars";
import { cn } from "apps/front-office/design-system/utils/cn";
import { formatPrice } from "apps/front-office/design-system/utils/format-price";
import { mealAtom } from "apps/front-office/menu/pages/MealDetailsPage/atoms/meal-atom";
import { useState } from "react";
import { AiTwotoneHeart } from "react-icons/ai";
import { BsFillBasket2Fill } from "react-icons/bs";
import { PiDotOutlineFill } from "react-icons/pi";
import { DetailsCategorySection } from "./DetailsCategorySection";

const ShippingFeatures = () => {
  return (
    <ul className="text-primary-text font-light pb-6 border-b">
      <li className="flex items-center gap-2">
        <PiDotOutlineFill />
        {trans("freeShipping")}
      </li>
      <li className="flex items-center gap-2">
        <PiDotOutlineFill />
        {trans("easyReturns")}
      </li>
      <li className="flex items-center gap-2">
        <PiDotOutlineFill />
        {trans("orderBeforeNoon")}
      </li>
    </ul>
  );
};

export const DetailsSide = () => {
  const [amount, setAmount] = useState<number>(1);
  const meal = mealAtom.useValue();
  const isFavorite = false;

  const ratings = meal.ratings || 0;

  const displayedPrice = formatPrice(meal.price);

  const incrementAmount = () => {
    setAmount(amount + 1);
  };

  const decrementAmount = () => {
    const newAmount = amount === 1 ? 1 : amount - 1;
    setAmount(newAmount);
  };

  const handleFavoriteChange = () => {};

  return (
    <div className="flex-1">
      <div className="sticky top-20 space-y-6">
        <div className="space-y-6 border-b pb-6">
          <h1 className="text-5xl font-bold">{meal.name}</h1>
          <Stars ratings={ratings} />
          <p className="text-primary-text text-base">{meal.description}</p>
          <span className="inline-block text-2xl font-bold text-primary-main">
            {displayedPrice}
          </span>
        </div>

        <div className="flex items-center gap-10 text-sm font-semibold pb-6 border-b flex-wrap">
          <div className="flex gap-3 items-center font-bold">
            <button
              className="w-8 h-8 bg-primary-light hover:bg-primary-light hover:text-primary-main p-1 rounded-full"
              onClick={decrementAmount}>
              -
            </button>
            <span>{amount}</span>
            <button
              className="w-8 h-8 bg-primary-light hover:bg-primary-light hover:text-primary-main p-1 rounded-full"
              onClick={incrementAmount}>
              +
            </button>
          </div>
          <div className="flex gap-2 min-w-fit flex-1 shrink-0">
            <Button
              variant="primary"
              className="uppercase rounded-lg flex-1 py-4 px-6 gap-2 text-xs"
              onClick={() => {}}>
              <BsFillBasket2Fill className="shrink-0" />
              {trans("addToCart")}
            </Button>
            <button
              className={cn(
                " px-5 rounded-xl text-gray-500 btn bg-primary-light",
                isFavorite ? "text-rose-600" : "hover:text-primary-main",
              )}
              onClick={handleFavoriteChange}>
              <AiTwotoneHeart />
            </button>
          </div>
        </div>

        <DetailsCategorySection />

        <ShippingFeatures />
        <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
          <p className="font-bold">{trans("guaranteedSafeCheckout")}</p>
          <img
            src="https://demo2.pavothemes.com/poco/wp-content/uploads/2020/08/trust-symbols.png"
            alt="payment methods image"
          />
        </div>
      </div>
    </div>
  );
};
