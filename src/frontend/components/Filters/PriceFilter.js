import { useData } from "../../context/DataContext";
import { Filters, ActionType } from "../../constant";

const PriceFilter = () => {
  const {
    state: { filters, products },
    dispatch,
  } = useData();

  const maxPriceValue = products.reduce(
    (acc, { discountprice }) =>
      Number(discountprice) > acc ? Number(discountprice) : acc,
    0
  );

  const maxRangeValue = filters?.priceRange;

  const priceRangeFilterHandler = (e) => {
    dispatch({
      type: ActionType.ChangeFilter,
      payload: {
        filterType: Filters.PriceRange,
        filterValue: e.target.value,
      },
    });
  };

  return (
    <div>
      <div className="sideNavbar_price-container">
        <p>Price</p>
        <div className="sideNavbar_priceRange-container">
          <label htmlFor="priceRange">
            <span className="priceRange-minPrice">0</span>
            <input
              id="priceRange"
              type="range"
              min="0"
              max={maxPriceValue}
              value={maxRangeValue}
              step="1"
              name="priceRange"
              className="priceRange"
              onChange={priceRangeFilterHandler}
            />
            <span className="priceRange-maxPrice">
              {Math.ceil(maxRangeValue / 100) * 100}
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
