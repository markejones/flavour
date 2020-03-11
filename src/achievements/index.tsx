import * as React from "react";
import { useQuery } from "../hooks";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { getToken } from "../store/auth/actions";
import { getAchievementCategories } from "../store/achievements/actions";

export const Achievements = () => {
  const history = useHistory();
  const query = useQuery();
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.token);
  const categories = useSelector((state: RootState) => state.achievements.categories);

  React.useEffect(() => {
    dispatch(getToken({ clientId: process.env.CLIENT_ID, clientSecret: process.env.CLIENT_SECRET }));
  }, []);

  const [selectedCategory, setSelectedCategory] = React.useState<string>((): string => {
    if (query.get("category")) {
      return query.get("category");
    } else {
      return "";
    }
  });

  React.useEffect(() => {
    if (token) {
      dispatch(getAchievementCategories(token));
    }
  }, [token]);

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
