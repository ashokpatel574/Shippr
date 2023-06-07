import { useNavigate } from "react-router-dom";
// Context
import { useData } from "../../context/DataContext";
// Images
import categoriesShirt from "../../../assets/categoryImg/categoryShirtImg.webp";
import categoriesTshirt from "../../../assets/categoryImg/categoryTshirtImg.webp";
import categoriesLooseTshirt from "../../../assets/categoryImg/categoryLooseTshirtImg.webp";
// Constant
import { ActionType, Filters } from "../../constant";

const CategoriesContainer = () => {
  const navigate = useNavigate();
  const { dispatch } = useData();

  const categoryFilterHandler = (category) => {
    dispatch({ type: ActionType.ClearFilter });
    dispatch({
      type: ActionType.ChangeFilter,
      payload: {
        filterType: Filters.Categories,
        filterValue: [category],
      },
    });
    navigate("/products");
  };

  return (
    <section className="categories_container  flex-column padding-tp-btm-xxl gap-l ">
      <h2 className=" categories_container-title text-center">Categories</h2>

      <div className="categories_wrapper padding-tp-btm-xxl ">
        <div className="categories_wrap">
          <div
            onClick={() => categoryFilterHandler("tshirt")}
            className="categories_card"
          >
            <div className="categories_image-box">
              <img
                src={categoriesTshirt}
                alt="Category for T-Shirt"
                className="categories_image "
              />
            </div>
          </div>
        </div>

        <div className="categories_wrap">
          <div
            onClick={() => categoryFilterHandler("shirt")}
            className="categories_card"
          >
            <div className="categories_image-box">
              <img
                src={categoriesShirt}
                alt="Category for Shirt"
                className="categories_image "
              />
            </div>
          </div>
        </div>

        <div className="categories_wrap">
          <div
            onClick={() => categoryFilterHandler("looseTshirt")}
            className="categories_card"
          >
            <div className="categories_image-box">
              <img
                src={categoriesLooseTshirt}
                alt="Category for Loose T-shirt"
                className="categories_image "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesContainer;
