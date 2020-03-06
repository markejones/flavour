import * as React from "react";
import { AchievementCategory, getAchievementCategoriesIndex } from "../api/achievements";

interface AchievementsProps {
  token: string;
}

export const Achievements = (props: AchievementsProps) => {
  const [categories, setCategories] = React.useState<AchievementCategory[]>();

  React.useEffect(() => {
    const loadCategoriesIndex = async () => {
      const response = await getAchievementCategoriesIndex(props.token);

      setCategories(response.categories);
    };

    if (props.token) {
      loadCategoriesIndex();
    }
  }, [props.token]);

  return (
    <div>
      <h1>Achievements</h1>
      <select>
        {categories &&
          categories.length > 0 &&
          categories.map(category => <option key={category.id}>{category.name}</option>)}
      </select>
    </div>
  );
};
