import Layout from "../../component/layout/Layout";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./home.scss";
// import  from '@mui/icons-material'
export default function Home() {
  return (
    <Layout>
      <div className="_container">
        <header>
          <div className="info">
            <h2 className="title">
              World Best Organic & Healthy Farmers Industry
            </h2>
            <p>
              Lorem ipsum dolor isut dolor mente albilor ratere solor menter
              lomotifite
            </p>
            <a href="#" className="btn btn--white">Learn More</a>
          </div>
        </header>
        <main>
          <div className="primary">
            <h1>Market Update</h1>
            <div className="right">
              <p>
                Lorem ipsum dolor siti is molor doloroto this is mani felito
                loto mina ter java la sentry man ate yolo ahd hard ahmen ahhh
                jeff. adherent gum is quite useful for plumbers loewkey
              </p>
              <p>
                Lorem ipsum dolor siti is molor doloroto this is mani felito
                loto mina ter java la sentry man ate yolo ahd hard ahmen ahhh
                jeff. adherent gum is quite useful for plumbers loewkey
              </p>
            </div>
          </div>
          <div className="secondary">
            <div className="secondary_wrapper">
              <h2>Lagos Market Update</h2>
              <p>
                Lorem ipsum dolor siti is molor doloroto this is mani felito
                loto mina ter
              </p>
            </div>
            <div className="secondary_wrapper">
              <h2>Lagos Market Update</h2>
              <p>
                Lorem ipsum dolor siti is molor doloroto this is mani felito
                loto mina ter
              </p>
            </div>
            <div className="secondary_wrapper">
              <h2>Lagos Market Update</h2>
              <p>
                Lorem ipsum dolor siti is molor doloroto this is mani felito
                loto mina ter
              </p>
            </div>
          </div>
        </main>
        <div className="product_gallery">
          <div className="product_gallery_left">
            <img src="/images/image_2.png" alt="" />
          </div>
          <div className="product_gallery_right">
            <div className="product_gallery_right_top">
              <img src="/images/image_33.png" alt="" />
            </div>
            <div className="product_gallery_right_bottom">
              <div className="image_wrap please">
                <img src="/images/image_34.png" alt="" />
              </div>
              <div className="image_wrap">
                <img src="/images/image_35.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="local_merchant_gallery">
          <div className="local_merchant_gallery-left">
            <figure>
              <img src="/images/image_36.png" alt="" />
            </figure>
          </div>
          <div className="local_merchant_gallery-right">
            <h1>over 400 Local merchants </h1>
            <p>
              Lorem ipsum dolor siti is molor doloroto this is mani felito loto
              mina ter java la sentry man ate yolo ahd hard ahmen ahhh jeff.
              adherent gum is quite useful for plumbers loewkey
            </p>
            <span>
              Become a Merchant <ArrowForwardIcon className="arrow_icon" />
            </span>
          </div>
        </div>
        <div className="local_merchant_gallery second-local">
          <div className="local_merchant_gallery-right second">
            <h1>100% Organic Product </h1>
            <p>
              Lorem ipsum dolor siti is molor doloroto this is mani felito loto
              mina ter java la sentry man ate yolo ahd hard ahmen ahhh jeff.
              adherent gum is quite useful for plumbers loewkey
            </p>
            <span>
              Go to Marketplace <ArrowForwardIcon className="arrow_icon" />
            </span>
          </div>
          <div className="local_merchant_gallery-left">
            <figure className="second_figure">
              <img src="/images/image_37.png" alt="" />
            </figure>
          </div>
        </div>
        <section className="stats">
          <ul>
            <li>
              <figure>
                <img src="/images/leaves.png" alt="" />
              </figure>
            </li>
            <li>
              <figure>
                <img src="/images/award.png" alt="" />
              </figure>
            </li>
            <li>
              <figure>
                <img src="/images/farmer_1.png" alt="" />
              </figure>
            </li>
          </ul>
        </section>
        <section className="vid">
          <img src="/images/Rectangle_vid.png" alt="" />
        </section>
        <section className="upcoming_events">
          <div className="heading">
            <h1>Upcoming Events</h1>
            <p>
              Lorem ipsum dolor siti is molor doloroto this is mani felito loto
              mina ter
            </p>
          </div>
          <div className="events_details_wrapper">
            <div className="events_details_content">
              <h1>Organic Crop cultivation Event 2017</h1>
              <p>
                Lorem ipsum dolor siti is molor doloroto this is mani felito
                loto mina ter
              </p>
              <span>
                Learn More <ArrowForwardIcon className="arrow_icon" />
              </span>
            </div>
            <div className="events_details_content">
              <h1>Organic Crop cultivation Event 2017</h1>
              <p>
                Lorem ipsum dolor siti is molor doloroto this is mani felito
                loto mina ter
              </p>
              <span>
                Learn More <ArrowForwardIcon className="arrow_icon" />
              </span>
            </div>
          </div>
        </section>
        <section className="newsletter">
          <div className="form_wrapper">
            <h1>Newsletter</h1>
            <form action="">
              <div className="form_field">
                <input type="text" name="" id="" placeholder="Full name" />
              </div>
              <div className="form_field">
                <input type="text" name="" id="" placeholder="Email address" />
              </div>
              <input type="submit" value="Suscribe now" />
            </form>
          </div>
        </section>
      </div>
    </Layout>
  );
}
