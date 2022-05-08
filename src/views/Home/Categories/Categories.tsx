import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { Categories as CategoriesSlice } from "state/slice/categories";
import { categoriesSelector } from "state/selectors/categoriesSelector";
import style from "./Categories.module.scss";

export const Categories = () => {
  const { t } = useTranslation();
  const categories = useSelector(categoriesSelector);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Categories</h2>
      <div className={style.categories}>
        {categories.map(({ label, id }) => (
          <div key={id} className={style.category}>
            <div>{label}</div>
            <button
              className={style.remove}
              onClick={() => {
                dispatch(CategoriesSlice.actions.remove({ id }));
              }}
            >
              {t("actions.remove")}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
