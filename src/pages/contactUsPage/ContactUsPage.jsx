import Layout from '../../component/layout/Layout';
import './ContactUsPage.scss';
import { useEffect } from 'react';
export default function ContactUsPage() {
  useEffect(() => {
    document.title = 'contact-us | OneFarmTech';
  }, []);
  return (
    <Layout>
      <div className="contact-us">
        <div className="contact-us_wrapper">
          <div className="contact-us-left">
            <form>
              <div className="input-form">
                <input type="text" name="name" id="name"  required="true" />
                <label htmlFor="name">Name</label>
              </div>
              <div className="input-form">
                <input type="email" name="email" id="email" required="true" />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-form">
                <textarea name="message" id="" cols="30" rows="10"  required="true" ></textarea>
                <label htmlFor="message" className="message_label">
                  Message
                </label>
              </div>
              {/* <input type="submit" value="message" /> */}
              <button type="submit">message</button>
            </form>
          </div>
          <div className="contact-us-right">
            <img
              src="https://www.researchgate.net/profile/Sani-Mustapha/publication/297386764/figure/fig4/AS:337318507499524@1457434407694/Jabi-Utako-catchment-Google-Maps-2014.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
