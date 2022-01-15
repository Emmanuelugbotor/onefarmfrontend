import './WhatWeDo.scss';
export default function WhatWeDo() {
  return (
    <div>
      <section className="what_we_do">
        <div className="primary_heading">
          <h1>What We Do</h1>
        </div>

        <div className="what_we_do_wrapper">
          {/* <div className="what_we_do_box"> */}
          <div className="what_we_do_card">
            <div className="what_we_do_image">
              <img src="/images/vegetables.png" alt="" />
            </div>
            <div className="what_we_do_title">Fresh Vegetables</div>
            <div className="what_we_do_desc">
              We Provide the Best Vegetables that are affordable
            </div>

            {/* </div> */}
          </div>
          <div className="what_we_do_card">
            <div className="what_we_do_image">
              <img src="/images/fresh-fruits.png" alt="" />
            </div>
            <div className="what_we_do_title">Fresh fruits</div>
            <div className="what_we_do_desc">
              The best Nutrisious Friuts are ready to be delivered to you just
              at a tap
            </div>

            {/* </div> */}
          </div>
          <div className="what_we_do_card">
            <div className="what_we_do_image">
              <img src="/images/food-stuffs.png" alt="" />
            </div>
            <div className="what_we_do_title">Fresh stuffs</div>
            <div className="what_we_do_desc">
              Order Food stuffs at th comfort of your house
            </div>

            {/* </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
