import { useData } from "../../context/DataContext";
import { ActionType } from "../../constant";
import { Filters } from "../../constant";

const ProductCategoryFilter = () => {
  const {
    state: { filters },
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
        <ul>
          <li>
            <input
              id="categoryTshirt"
              type="checkbox"
              className="categoryTshirt"
              name="tshirt"
              checked={filters?.categories?.includes("tshirt")}
              onChange={categoryUpdateHandler}
            />
            <label htmlFor="categoryTshirt">T-Shirt</label>
          </li>
          <li>
            <input
              id="categoryTshirt"
              type="checkbox"
              className="categoryTshirt"
              name="looseTshirt"
              checked={filters?.categories?.includes("looseTshirt")}
              onChange={categoryUpdateHandler}
            />
            <label htmlFor="categoryTshirt">Loose T-Shirt</label>
          </li>
          <li>
            <input
              id="categoryTshirt"
              type="checkbox"
              className="categoryTshirt"
              name="shirt"
              checked={filters?.categories?.includes("shirt")}
              onChange={categoryUpdateHandler}
            />
            <label htmlFor="categoryTshirt">Shirt</label>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProductCategoryFilter;
