import img1 from "../images/snapsmilelogo.png";
function header() {
  return (
    <div class="navbar-component">
      <div class="navbar-image">
        <img src={img1} alt="" />
        <div class="navbar-header">
          <a class="navbar-home"> Home</a>
          <a class="navbar-dentist"> For Dentists</a>
        </div>
      </div>
    </div>
  );
}
export default header;
