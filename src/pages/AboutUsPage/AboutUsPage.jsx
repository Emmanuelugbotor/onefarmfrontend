import Layout from '../../component/layout/Layout';
import './AboutUsPage.scss';
import WhatWeDo from '../../component/WhatWeDo/WhatWeDo';
import OurFarmers from '../../component/OurFarmers/OurFarmers';
export default function AboutUsPage() {
  return (
    <Layout>
      <div className="about_us">
        <div className="about_us_main">
          <div className="about_us_main_left">
            <div className="about_us_main_left_image">
              <img src="/images/about-hero-img.png" alt="about-hero-img" />
            </div>
          </div>
          <div className="about_us_main_right">
            <h1 className="about_us_main_title">
              About <span>one</span>FarmTech
            </h1>
            <div className="about_us_main_text">
              Onefarmtech is an agritech company that is committed to empowering
              farmers through leveraging technology. The Platform offers
              solutions to a diverse range of agricultural challenges to
              consequently improve the end-to-end efficiency of the agro supply
              chain in Nigeria and beyond. We connect hundreds of thousands of
              local farmers with prospective buyers for seemly agricultural
              trading activities
            </div>
          </div>
        </div>
        <div className="about_us_secondary">
          <div className="about_us_secondary_left">
            <h1 className="about_us_secondary_title">
              oneFarm <span>vs</span> The Farmers
            </h1>
            <div className="about_us_secondary_text">
              Onefarmtech is an agritech company that is committed to empowering
              farmers through leveraging technology. The Platform offers
              solutions to a diverse range of agricultural challenges to
              consequently improve the end-to-end efficiency of the agro supply
              chain in Nigeria and beyond. We connect hundreds of thousands of
              local farmers with prospective buyers for seemly agricultural
              trading activities
            </div>
          </div>
          <div className="about_us_secondary_right">
            <div className="about_us_secondary_right_image">
              <img src="/images/vegetable-farm.png" alt="about-hero-img" />
            </div>
          </div>
        </div>
      </div>
      <WhatWeDo />
      <OurFarmers />
    </Layout>
  );
}
