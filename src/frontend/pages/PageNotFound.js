import React from "react";
import PageNotFoundImg from "../../assets/Mics/PageNotFound.png";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <article className="errorPage_container flex-center">
      <section
        className="
         flex-column flex-center"
      >
        <div className="errorPage_Img-container">
          <img
            src={PageNotFoundImg}
            alt="page not found"
            width="350px"
            height="350px"
          />
        </div>
        <div className="errorPage_text-Container flex-column flex-center">
          <h3>Oops!, Something went wrong.</h3>
          {/* <p>Go ahead and explore top categories.</p> */}
          <button onClick={() => navigate("/")} className="btn backHomeBtn">
            Back To Home
          </button>
        </div>
      </section>
    </article>
  );
};

export default ErrorPage;
