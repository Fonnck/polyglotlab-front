import logo from "../../assets/images/loader-logo.png";

function Loader() {
  return (
    <>
      <img src={logo} alt="Loader" height={100} />
      <div className="preloader"></div>
    </>
  );
}

export default Loader;
