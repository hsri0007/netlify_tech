// // @noflow

// import React from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import {
//   CardElement,
//   Elements,
//   useElements,
//   useStripe,
// } from "@stripe/react-stripe-js";

// // import "../styles/common.css";

// const CheckoutForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async (event) => {
//     // Block native form submission.
//     event.preventDefault();

//     if (!stripe || !elements) {
//       // Stripe.js has not loaded yet. Make sure to disable
//       // form submission until Stripe.js has loaded.
//       return;
//     }

//     // Get a reference to a mounted CardElement. Elements knows how
//     // to find your CardElement because there can only ever be one of
//     // each type of element.
//     const cardElement = elements.getElement(CardElement);

//     // Use your card Element with other Stripe.js APIs
//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card: cardElement,
//     });

//     if (error) {
//       console.log("[error]", error);
//     } else {
//       console.log("[PaymentMethod]", paymentMethod);
//       console.log("[PaymentMethod]", paymentMethod);
//         var pay_id = {};
//         pay_id["payment_id"] = paymentMethod.id;
//         pay_id["course"] = course;
//         pay_id["price"] = price;
//         pay_id["mode"] = "stripe";

//         console.log(pr);
//         const send_obj = {
//           ...pr,
//           ...pay_id,
//         };

//         console.log(send_obj);
//         const data = await fetch("http://localhost:8000/backend/addpayment", {
//           method: "POST",
//           body: JSON.stringify(send_obj),
//           headers: {
//             "Content-Type": "application/json",
//             "Access-Control-Allow-Origin": "*",
//           },
//         }).then((t) => {
//           alert(response.razorpay_payment_id);
//           t.json();
//         });
//       }
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <CardElement
//         options={{
//           style: {
//             base: {
//               fontSize: "16px",
//               color: "#424770",
//               "::placeholder": {
//                 color: "#aab7c4",
//               },
//             },
//             invalid: {
//               color: "#9e2146",
//             },
//           },
//         }}
//       />
//       <button type="submit" disabled={!stripe}>
//         Pay
//       </button>
//     </form>
//   );
// };

// // Make sure to call `loadStripe` outside of a component’s render to avoid
// // recreating the `Stripe` object on every render.
// const stripePromise = loadStripe(
//   "pk_test_51JCblNSHjLkba7i35s9DDiKqXI434VkDLJWVS8GGSKkhvMKDNUlqKVYRWcruGEr0DDLyRgIUvI2bKkaHuR2iGgIX00NaXsBB8H"
// );

// const DisplayStripe = () => {
//   return (
//     <Elements stripe={stripePromise}>
//       <CheckoutForm />
//     </Elements>
//   );
// };

// export default DisplayStripe;
