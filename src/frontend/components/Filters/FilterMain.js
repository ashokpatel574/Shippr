import CloseIcon from "@mui/icons-material/Close";
// Components
import ProductCategoryFilter from "./ProductCategoryFilter";
import PriceFilter from "./PriceFilter";
import RatingFilter from "./RatingFilter";
import ProductSortFilter from "./ProductSortFilter";
import AvailabiltyFiter from "./AvailabiltyFiter";
// context
import { useData } from "../../context/DataContext";
import { ActionType } from "../../constant";

const FilterMain = () => {
  const { dispatch, filterDrawer, setFilterDrawer } = useData();

  const filterClearHandler = () => {
    dispatch({ type: ActionType.ClearFilter });
  };

  return (
    <>
      <div className="productslisting_side-navbar-header flex-space-between">
        <span className={`filter_side-navbar ${filterDrawer && "close"} `}>
          Filters
        </span>
        <span onClick={filterClearHandler} className="clearFilter">
          Clear All
        </span>
        <span
          className={`filterMenu-close-icon ${filterDrawer && "open"}`}
          onClick={() => setFilterDrawer(!filterDrawer)}
        >
          <CloseIcon />
        </span>
      </div>
      <ProductCategoryFilter />
      <PriceFilter />
      {/* <SizeFilter /> */}
      <RatingFilter />
      <ProductSortFilter />
      <AvailabiltyFiter />
    </>
  );
};

export default FilterMain;
