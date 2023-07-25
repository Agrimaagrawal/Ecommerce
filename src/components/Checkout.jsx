import StripeCheckout from 'react-stripe-checkout';

const Checkout = ({total}) => {
  const onToken=(token)=>{
    console.log(token);
  }
  return (
    <>
    <StripeCheckout
     name="Pay to StyleHub"
    token={onToken}
    amount={total*100}// cents
    currency="USD"

    stripeKey="pk_test_51NWjf3SCYu0YWxv2s8Jvsc18JL0wu6jzJmyWxkhvUFkoAcFBEr6F12oEbCFXCX5muxMuMZrNx0EzSirMi1C1e7jp00WuDNHBgi"
  />
  </>
  )
}

export default Checkout
