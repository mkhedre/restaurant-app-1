import MenuItem from "apps/front-office/menu/components/MenuItem";
import { MealType } from "apps/front-office/menu/pages/MealDetailsPage/utils/types";

export type MealsListProps = {
  meals: MealType[];
};

export default function MealsList({ meals }: MealsListProps) {
  return (
    <div className="flex flex-col">
      {meals.map(meal => {
        return <MenuItem key={meal.id} meal={meal} />;
      })}
    </div>
  );
}
