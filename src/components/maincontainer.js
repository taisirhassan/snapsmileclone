import img2 from "../images/girl-texting.png";
import img3 from "../images/Download_on_the_App_Store_Badge.png";
function Container() {
  return (
    <div class="background">
      <div class="main-container">
        <div class="components-container">
          <div class="link-sent-container">
            <div class="image-container">
              <img src={img2} class="img2" alt=""></img>
            </div>
            <div class="link-sent-heading">
              <h1 class="main-heading"> Link sent, check your phone</h1>
              <h3 class="secondary-heading">
                We have sent an app download link to the phone number you
                provided in the previous page. If you cannot find the text, use
                the links below to download the app
              </h3>
              <div class="download-app-container">
                <a href="https://apps.apple.com/us/app/snapsmile/id1594653804">
                  <img
                    src={img3}
                    class="img3"
                    alt="Download on App Store"
                  ></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Container;
