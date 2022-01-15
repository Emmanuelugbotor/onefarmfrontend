import Layout from '../../component/layout/Layout';
import FormComponent from '../../component/FormComponent/FormComponent';

export default function LoginPage() {
  return (
    <Layout>
      <FormComponent
        text="Login to Get Started"
        farmerLink="farmer_loginPage"
        buyerLink="buyers_loginPage"
        farmerDesc="Farmers Login"
        buyerDesc="Buyer Login"
      />
    </Layout>
  );
}
