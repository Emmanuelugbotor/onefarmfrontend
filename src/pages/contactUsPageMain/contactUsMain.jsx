import "./contactUsMain.scss";
import Layout from "../../component/layout/Layout";
export default function ContactUsMain() {
  return (
    <Layout>
      <div className="contact-main">
        <div className="contact_left">
          <div className="contact_left-wrapper">
            <h2>Let's Chat</h2>
            <p>
              If forms aren’t your thing, you can always call us
              <a href="tel:+18557217223">+2348037135296</a>
            </p>
          </div>
        </div>
        <div className="contact_right">
          <form action="">
            <div className="form__field-wrapper">
              <div className="form__field">
                <label htmlFor="">Name *</label>
                <input type="text" placeholder="enter name" />
              </div>
              <div className="form__field">
                <label htmlFor="">Email *</label>
                <input type="email" placeholder="Enter Email" />
              </div>
            </div>
            <div className="form__field-wrapper">
              <div className="form__field">
                <label htmlFor="">Phone *</label>
                <input type="text" placeholder="enter phone number" />
              </div>
              <div className="form__field">
                <label htmlFor="">Address </label>
                <input type="email" placeholder="Enter Address" />
              </div>
            </div>
            <div className="form__field">
              <label htmlFor=""> Write your message or complain here *</label>
              <textarea></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
