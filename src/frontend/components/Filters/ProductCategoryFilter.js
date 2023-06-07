import { useData } from "../../context/DataContext";
import { ActionType } from "../../constant";
import { Filters } from "../../constant";

const ProductCategoryFilter = () => {
  const {
    state: { filters, categories },
    dispatch,
  } = useData();

  const categoryUpdateHandler = (e) => {
    const { name, checked } = e.target;

    dispatch({
      type: ActionType.ChangeFilter,
      payload: {
        filterType: Filters.Categories,
        filterValue: checked
          ? [...filters?.categories, name]
          : [...filters?.categories?.filter((item) => item !== name)],
      },
    });
  };

  return (
    <>
      <div className="sideNavbar_category-container">
        <p>Category</p>
        <ul className="flex-column flex-start gap-m">
          {categories?.map((categoryItem) => (
            <li key={categoryItem._id} className="flex-center gap-s">
              <input
                id="categoryTshirt"
                type="checkbox"
                className="categoryTshirt"
                name={categoryItem.categoryName}
                checked={filters?.categories?.includes(
                  categoryItem.categoryName
                )}
                onChange={categoryUpdateHandler}
              />
              <label htmlFor={categoryItem.categoryName}>
                {categoryItem.title}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProductCategoryFilter;
