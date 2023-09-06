import { Oval } from "react-loader-spinner";

const Loader = () => {
  return (
    <section className="loader_container flex-center flex-column gap-s">
      <Oval
        height={65}
        width={65}
        color="#3c0ac2"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#30089b"
        strokeWidth={3}
        strokeWidthSecondary={3}
      />
      <h3>Loading... Please wait</h3>
    </section>
  );
};

export default Loader;
