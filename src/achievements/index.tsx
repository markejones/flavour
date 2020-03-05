import * as React from "react";
import { AchievementCategory, getAchievementCategoriesIndex } from "../api/achievements";

interface AchievementsProps {
  token: string;
}

export const Achievements = (props: AchievementsProps) => {
  const [categories, setCategories] = React.useState<AchievementCategory[]>();

  const loadCategories = () => {
    getAchievementCategoriesIndex(props.token).then(response => {
      setCategories(response.categories);
    });
  };

  return (
    <div>
      <h1>Achievements</h1>
      <button onClick={loadCategories}>Click me</button>
      <div>
        {categories && categories.length > 0 && (
          <ul>
            {categories.map(category => (
              <li key={category.id}>{category.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
