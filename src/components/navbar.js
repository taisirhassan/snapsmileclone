import img1 from "../images/snapsmilelogo.png";
function Navbar() {
  return (
    <div class="navbar-container">
      <div class="navbar-component">
        <div class="navbar-image">
          <img src={img1} class="img1" alt=""></img>
        </div>
        <div class="navbar-header">
          <a class="navbar-home"> Home</a>
          <a class="navbar-dentist"> For Dentists</a>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
