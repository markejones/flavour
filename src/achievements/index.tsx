import * as React from "react";
import { AchievementCategory, getAchievementCategoriesIndex } from "../api/achievements";
import { useQuery } from "../hooks";
import { useHistory } from "react-router-dom";

interface AchievementsProps {
  token: string;
}

export const Achievements = (props: AchievementsProps) => {
  const [categories, setCategories] = React.useState<AchievementCategory[]>();
  const history = useHistory();
  const query = useQuery();
  const [selectedCategory, setSelectedCategory] = React.useState<string>((): string => {
    if (query.get("category")) {
      return query.get("category");
    } else {
      return "";
    }
  });

  React.useEffect(() => {
    const loadCategoriesIndex = async () => {
      const response = await getAchievementCategoriesIndex(props.token);

      setCategories(response.categories);
    };

    if (props.token) {
      loadCategoriesIndex();
    }
  }, [props.token]);

  const updateUrl = React.useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>): void => {
      history.push({
        pathname: "/achievements",
        search: `?category=${event.target.value}`
      });
      setSelectedCategory(event.target.value);
    },
    [event]
  );

  return (
    <div>
      <h1>Achievements</h1>
      <select onChange={updateUrl} value={selectedCategory}>
        {categories &&
          categories.length > 0 &&
          categories
            .sort((a, b) => (a.name > b.name ? 1 : -1))
            .map(category => <option key={category.id}>{category.name}</option>)}
      </select>
    </div>
  );
};
