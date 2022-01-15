import Layout from '../../component/layout/Layout';
import FormComponent from '../../component/FormComponent/FormComponent';
export default function SIgnUpPage() {
  return (
    <Layout>
      <FormComponent
        text="SignUp to Get Started"
        farmerLink="farmer_signUpPage"
        buyerLink="buyers_SignUpPage"
        farmerDesc="Farmers Sign Up"
        buyerDesc="Buyer Sign Up"
      />
    </Layout>
  );
}
