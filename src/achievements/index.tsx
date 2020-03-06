import * as React from "react";
import { AchievementCategory, getAchievementCategoriesIndex } from "../api/achievements";
import { useQuery } from "../hooks";
import { useHistory } from "react-router-dom";

interface AchievementsProps {
  token: string;
}

export const Achievements = (props: AchievementsProps) => {
  const [categories, setCategories] = React.useState<AchievementCategory[]>();
  const query = useQuery();
  const history = useHistory();

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
        search: `?categoryId=${event.target.value}`
      });
    },
    [event]
  );

  return (
    <div>
      <h1>Achievements</h1>
      <select onChange={updateUrl} value={query.get("categoryId")}>
        {categories &&
          categories.length > 0 &&
          categories
            .sort((a, b) => (a.name > b.name ? 1 : -1))
            .map(category => <option key={category.id}>{category.name}</option>)}
      </select>
    </div>
  );
};
