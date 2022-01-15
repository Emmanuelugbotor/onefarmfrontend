import './OurFarmers.scss';
export default function OurFarmers() {
  return (
    <div>
      <section className="our_farmers">
        <div className="primary_heading">
          <h1>Our Farmers</h1>
        </div>
        <div className="our_farmers_wrapper">
          <div
            className="our_farmers_card"
            style={{ background: 'url(/images/about-basket.png)' }}
          >
            <div className="our_farmers_name">Adetutu joy</div>
            <div className="our_farmers_desc">Vegetable farmer</div>
          </div>
          <div
            className="our_farmers_card"
            style={{
              background: 'url(/images/about-farm.png)',
            }}
          >
            <div className="our_farmers_name">Emmanuel Obi</div>
            <div className="our_farmers_desc">Vegetable farmer</div>
          </div>
          <div
            className="our_farmers_card"
            style={{ background: 'url(/images/about-man.png)' }}
          >
            <div className="our_farmers_name">Daniel Bishop</div>
            <div className="our_farmers_desc">Vegetable farmer</div>
          </div>
        </div>
      </section>
    </div>
  );
}
