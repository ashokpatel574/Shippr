import React from "react";

import ProductCategoryFilter from "./ProductCategoryFilter";
import PriceFilter from "./PriceFilter";
import SizeFilter from "./SizeFilter";
import RatingFilter from "./RatingFilter";
import ProductSortFilter from "./ProductSortFilter";
import AvailabiltyFiter from "./AvailabiltyFiter";
import { useData } from "../../context/DataContext";
import { ActionType } from "../../constant";

const FilterMain = () => {
  const { dispatch } = useData();

  const filterClearHandler = () => {
    dispatch({ type: ActionType.ClearFilter });
  };

  return (
    <>
      <div className="productslisting_side-navbar-header flex-space-between">
        <span>Filters</span>
        <span onClick={filterClearHandler} className="clearFilter">
          Clear All
        </span>
      </div>
      <ProductCategoryFilter />
      <PriceFilter />
      <SizeFilter />
      <RatingFilter />
      <ProductSortFilter />
      <AvailabiltyFiter />
    </>
  );
};

export default FilterMain;
