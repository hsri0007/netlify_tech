import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import {
  razorpayOrder,
  addPayment,
  stripeOrder,
  getIPDetails,
} from "../../apiCalls";

import Checkbox from "@material-ui/core/Checkbox";

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import { Link } from "@material-ui/core";

import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
// const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);

const validationSchema = yup.object({
  course: yup.string("Enter your email").required("Course is required"),
  price: yup.number().required("Price is required"),
  email: yup.string().email().required("Required"),
  name: yup.string("Enter your Name").required("Name is required"),
  phoneNumber: yup.number().required("Phone number is required"),
  address1: yup.string("Enter your address").required("address is required"),
  town: yup.string("Enter your town").required("Town is required"),
  zipCode: yup.string("Enter your zip code").required("Zip code is required"),
  state: yup.string("Enter your state").required(" is required"),
});

const validationSchemaStripe = yup.object({
  course: yup.string("Enter your email").required("Course is required"),
  price: yup.number().required("Price is required"),
  email: yup.string().email().required("Required"),
  name: yup.string("Enter your Name").required("Name is required"),
  phoneNumber: yup.number().required("Phone number is required"),
  address1: yup.string("Enter your address").required("address is required"),
  town: yup.string("Enter your town").required("Town is required"),
  zipCode: yup.string("Enter your zip code").required("Zip code is required"),
  state: yup.string("Enter your state").required(" is required"),
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    "& .MuiTextField-root": {
      margin: theme.spacing(0),
      width: "100%",
      backgroundColor: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "gray",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#666666",
      },
      "&:hover fieldset": {
        borderColor: "#666666",
      },
      "&.Mui-focused fieldset": {
        borderColor: "gray",
      },
    },
  },
  formControl: {
    margin: theme.spacing(0),
    minWidth: "100%",
    backgroundColor: "white",
  },
  formControl2: {
    margin: theme.spacing(0),
    minWidth: "120%",
    backgroundColor: "white",
    "@media (max-width: 935px)": {
      minWidth: "100%",
    },
  },
  fieldsTitle: {
    fontSize: "16px",
    color: "#666666",
    margin: "2px",
    fontWeight: "500",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  tabsTitle: {
    fontSize: "20px",
    fontWeight: "600",
    padding: "15px 0px",
    backgroundColor: "white",
    "@media (max-width: 935px)": {
      fontSize: "20px",
      fontWeight: "600",
    },
  },
  paymentTitle: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: "50px",
    alignItems: "center",
    "@media (max-width: 935px)": {
      paddingLeft: "0px",
    },
  },
  paymentTitleHeading: {
    color: "black",
    "@media (max-width: 935px)": {
      fontSize: "18px",
    },
  },
  paymentTitleUnique: {
    color: "red",
    marginLeft: "10px",
    "@media (max-width: 935px)": {
      fontSize: "18px",
    },
  },
  paymentImg: {
    height: "40px",
    width: "90px",
    marginLeft: "10px",
    "@media (max-width: 935px)": {
      height: "25px",
      width: "60px",
    },
  },
  summary: {
    display: "flex",
    flexDirection: "column",
  },
  summarySection: {
    backgroundColor: "white",
    padding: "30px 0px",
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 5px 10px",
  },
  fields: {
    margin: "20px 10px",
  },
  title: {
    fontSize: "35px",
    paddingLeft: "50px",
    paddingTop: "20px",
    color: "#666666",
    "@media (max-width: 935px)": {
      fontSize: "30px",
      paddingLeft: "0px",
    },
  },
  paymentTitle: {
    fontSize: "35px",
    color: "#666666",
    paddingTop: "20px",
    textAlign: "center",
    margin: "0px 0px 20px 0px",
    "@media (max-width: 935px)": {
      fontSize: "30px",
    },
  },
  tax: {
    fontSize: "20px",
    paddingLeft: "50px",
    color: "#595959",
  },
  labels: {
    fontSize: "18px",
  },

  rootTabs: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 5px 10px",
  },

  paymentfieldsVertical: {
    margin: "10px 20px",
    "@media (max-width: 935px)": {
      margin: "22px 0px",
    },
  },
  paymentfieldsVertical2: {
    margin: "20px 35px",
    "@media (max-width: 935px)": {
      margin: "20px 0px",
    },
  },

  paymentfieldsHorizontal: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    "@media (max-width: 935px)": {
      flexDirection: "column",
    },
  },
  paymentfieldsTwo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "10px 20px",
    "@media (max-width: 935px)": {
      margin: "0px",
      flexDirection: "column",
    },
  },
  paymentfieldsTwoHorizontal: {
    margin: "10px 20px",
    "@media (max-width: 935px)": {
      margin: "10px 0px",
    },
  },
  paymentfieldsHorizontal2: {
    display: "flex",
    flexDirection: "row",
    "@media (max-width: 935px)": {
      flexDirection: "column",
    },
  },
  copyright: {
    fontSize: "14px",
    color: "#666666",
  },
  copyrightSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    margin: "20px",
  },
  button: {
    alignSelf: "flex-end",
    paddingRight: "35px",
    paddingBottom: "35px",
  },
  payButton: {
    width: "175px",
    height: "58px",
    backgroundColor: "#1358db",
    color: "white",
    fontWeight: "600",
    "&:hover": {
      backgroundColor: "#d21414",
    },
  },
  paymentfieldsVerticalLast: {
    margin: "10px 20px",
  },
}));
function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

async function displayRazorpay(props, setActiveStep) {
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
  const ipData = await getIPDetails();
  props.phoneNumber = "+" + ipData.location.calling_code + props.phoneNumber;
  const course_details = `Course: ${props.course}, ${props.trainingMode}`;
  const name = props.name;
  const email = props.email;
  const phno = props.phoneNumber;
  if (!res) {
    alert("Razorpay SDK failed to load. Are you online?");
    return;
  }

  // const data = await fetch("http://localhost:8000/backend/orders/razorpay", {
  //   method: "POST",
  //   body: JSON.parse(JSON.stringify(props)),
  //   headers: {
  //     "Content-Type": "application/json",
  //     "Access-Control-Allow-Origin": "*",
  //   },
  // }).then((t) => t.json());

  const data = await razorpayOrder({ ...props });
  // console.log('*******this is data*********: ', data);

  const options = {
    // key: "rzp_test_gphMb6emlffSYs",
    key: "rzp_live_hqxfS5byv2UR00",
    // secret: "1zW4uRcVn4Oa2GzGb773NnWJ",
    currency: data.currency,
    amount: data.amount.toString(),
    order_id: data.id,
    name: props.course + " Payment",
    description: "Please fill the details",
    // image: 'http://localhost:1337/logo.svg',
    handler: async function (response) {
      // alert(response.razorpay_order_id);
      // alert(response.razorpay_signature);
      var pay_id = {};
      pay_id["payment_id"] = response.razorpay_payment_id;
      pay_id["mode"] = "razorpay";
      // var pr = JSON.parse(props);

      const send_obj = {
        ...props,
        ...pay_id,
        course_details,
      };

      // const data = await fetch("http://localhost:8000/backend/addpayment", {
      //   method: "POST",
      //   body: JSON.stringify(send_obj),
      //   headers: {
      //     "Content-Type": "application/json",
      //     "Access-Control-Allow-Origin": "*",
      //   },
      // }).then((t) => {
      //   alert(response.razorpay_payment_id);
      //   t.json();
      // });
      // console.log('***********IN here*************');
      await addPayment(send_obj);
      setActiveStep(2);
    },
    prefill: {
      name,
      email: email,
      contact: phno,
    },
  };
  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}
const stripePromise = loadStripe(
  "pk_live_51JCblNSHjLkba7i35uKD6EsdyxzUK2o9JQHDzKdhO4TR1YpXpvO82zbpN4ILxbHGifavgt1RrQxxKtW9dVeOwbp100QM7cRhVb"
);
//"pk_test_51JCblNSHjLkba7i35s9DDiKqXI434VkDLJWVS8GGSKkhvMKDNUlqKVYRWcruGEr0DDLyRgIUvI2bKkaHuR2iGgIX00NaXsBB8H"

const CheckoutForm = ({
  course,
  price,
  setActiveStep,
  currency,
  trainingMode,
}) => {
  const stripe = useStripe();
  const elements = useElements();

  const classes = useStyles();
  const theme = useTheme();
  const course_details = `Course: ${course}, ${trainingMode}`;

  // const [trainingMode, setTrainingMode] = React.useState("selfPlaced");
  // const [currency, setCurrency] = React.useState("INR");

  const [value, setValue] = React.useState(0);
  const [address2, setAddress2] = React.useState("");

  const [checked, setChecked] = React.useState(true);

  const handleChangeChecked = (event) => {
    setChecked(event.target.checked);
  };

  // const handleChangeTraining = (event) => {
  //   setTrainingMode(event.target.value);
  // };
  // const handleChangeCurrency = (event) => {
  //   setCurrency(event.target.value);
  // };
  const handleChangeAddress2 = (event) => {
    setAddress2(event.target.value);
  };
  const [address2Stripe, setAddress2Stripe] = React.useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const formikStripe = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      address1: "",
      town: "",
      zipCode: "",
      state: "",
    },
    validationSchemaStripe: validationSchemaStripe,
    onSubmit: async (values) => {
      if (!stripe || !elements) {
        return;
      }
      // console.log('*******this is values********: ', values)
      const ipData = await getIPDetails();
      values.phoneNumber =
        "+" + ipData.location.calling_code + values.phoneNumber;
      const valueObj = JSON.stringify(values, null, 2);
      var pay_intent = {};

      pay_intent["amount"] = price;
      var pr = JSON.parse(valueObj);
      const back_intent = {
        ...pr,
        ...pay_intent,
      };

      // const data = await fetch("http://localhost:8000/backend/orders/stripe", {
      //   method: "POST",
      //   body: JSON.stringify(back_intent),
      //   headers: {
      //     "Content-Type": "application/json",
      //     "Access-Control-Allow-Origin": "*",
      //   },
      // }).then((t) => t.json());
      const data = await stripeOrder({ ...back_intent });

      const cardElement = elements.getElement(CardElement);

      const { error, paymentIntent } = await stripe.confirmCardPayment(
        data.client_secret.client_secret,
        {
          payment_method: {
            card: cardElement,
          },
        }
      );

      if (error) {
        console.log("In error");
        console.log("[error]", error);
      } else {
        var pay_id = {};
        pay_id["payment_id"] = paymentIntent.id;
        pay_id["course"] = course;
        pay_id["price"] = price;
        pay_id["mode"] = "stripe";
        pay_id["currency"] = currency;

        const send_obj = {
          ...pr,
          ...pay_id,
          course_details,
        };

        // const data = await fetch("http://localhost:8000/backend/addpayment", {
        //   method: "POST",
        //   body: JSON.stringify(send_obj),
        //   headers: {
        //     "Content-Type": "application/json",
        //     "Access-Control-Allow-Origin": "*",
        //   },
        // }).then((t) => {
        //   alert(response.razorpay_payment_id);
        //   t.json();
        // });
        const data = await addPayment(send_obj);
        setActiveStep(2);
      }
    },
  });

  return (
    <form className={classes.root} onSubmit={formikStripe.handleSubmit}>
      <span
        className={classes.paymentfieldsVertical}
        style={{
          height: "56px",
          backgroundColor: "darkblue",
          paddingTop: "15px",
          paddingLeft: "15px",
          paddingRight: "15px",
        }}
      >
        <CardElement
          options={{
            iconStyle: "solid",
            style: {
              base: {
                iconColor: "#c4f0ff",
                color: "#fff",
                fontWeight: 700,
                fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
                fontSize: "18px",
                fontSmoothing: "antialiased",
                "::placeholder": {
                  color: "#87bbfd",
                  height: "100px",
                },
              },
              invalid: {
                iconColor: "#ffc7ee",
                color: "#ffc7ee",
              },
              height: "100px",
            },
          }}
        />
      </span>
      <Grid container>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <div className={classes.paymentfieldsVertical}>
            <h2 className={classes.fieldsTitle}>Name</h2>
            <TextField
              required
              id="outlined-required"
              defaultValue="Hello World"
              variant="outlined"
              name="name"
              label={formikStripe.values.name === "" ? "Enter name" : ""}
              InputLabelProps={{ shrink: false }}
              value={formikStripe.values.name}
              onChange={formikStripe.handleChange}
              error={
                formikStripe.touched.name && Boolean(formikStripe.errors.name)
              }
              helperText={formikStripe.touched.name && formikStripe.errors.name}
            />
          </div>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <div className={classes.paymentfieldsVertical}>
            <h2 className={classes.fieldsTitle}>Phone Number</h2>
            <TextField
              required
              id="outlined-required"
              defaultValue="Hello World"
              variant="outlined"
              name="phoneNumber"
              label={
                formikStripe.values.phoneNumber === ""
                  ? "Enter phone number"
                  : ""
              }
              InputLabelProps={{ shrink: false }}
              value={formikStripe.values.phoneNumber}
              onChange={formikStripe.handleChange}
              error={
                formikStripe.touched.phoneNumber &&
                Boolean(formikStripe.errors.phoneNumber)
              }
              helperText={
                formikStripe.touched.phoneNumber &&
                formikStripe.errors.phoneNumber
              }
            />
          </div>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <div className={classes.paymentfieldsVertical}>
            <h2 className={classes.fieldsTitle}>Email</h2>
            <TextField
              required
              id="outlined-required"
              defaultValue="Hello World"
              variant="outlined"
              name="email"
              label={formikStripe.values.email === "" ? "Enter email" : ""}
              InputLabelProps={{ shrink: false }}
              value={formikStripe.values.email}
              onChange={formikStripe.handleChange}
              error={
                formikStripe.touched.email && Boolean(formikStripe.errors.email)
              }
              helperText={
                formikStripe.touched.email && formikStripe.errors.email
              }
            />
          </div>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <div className={classes.paymentfieldsVertical}>
            <h2 className={classes.fieldsTitle}>Address 1</h2>
            <TextField
              required
              id="outlined-required"
              defaultValue="Hello World"
              variant="outlined"
              name="address1"
              multiline
              rows={4}
              label={formikStripe.values.address1 === "" ? "Enter address" : ""}
              InputLabelProps={{ shrink: false }}
              value={formikStripe.values.address1}
              onChange={formikStripe.handleChange}
              style={{
                color: "black",
              }}
              error={
                formikStripe.touched.address1 &&
                Boolean(formikStripe.errors.address1)
              }
              helperText={
                formikStripe.touched.address1 && formikStripe.errors.address1
              }
            />
          </div>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <div className={classes.paymentfieldsVertical}>
            <h2 className={classes.fieldsTitle}>Address 2</h2>
            <TextField
              required
              id="outlined-textarea"
              defaultValue=""
              variant="outlined"
              multiline
              rows={4}
              name="address2"
              label={address2Stripe === "" ? "Enter Address 2" : ""}
              InputLabelProps={{ shrink: false }}
              value={address2Stripe}
              onChange={(e) => setAddress2Stripe(e.target.value)}
            />
          </div>
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <div className={classes.paymentfieldsTwoHorizontal}>
            <h2 className={classes.fieldsTitle}>Town/City</h2>

            <TextField
              required
              id="outlined-required"
              defaultValue="Hello World"
              variant="outlined"
              name="town"
              label={formikStripe.values.town === "" ? "Enter town/city" : ""}
              InputLabelProps={{ shrink: false }}
              value={formikStripe.values.town}
              onChange={formikStripe.handleChange}
              error={
                formikStripe.touched.town && Boolean(formikStripe.errors.town)
              }
              helperText={formikStripe.touched.town && formikStripe.errors.town}
            />
          </div>
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <div className={classes.paymentfieldsTwoHorizontal}>
            <h2 className={classes.fieldsTitle}>Zip Code</h2>
            <TextField
              required
              id="outlined-required"
              defaultValue="Hello World"
              variant="outlined"
              name="zipCode"
              label={formikStripe.values.zipCode === "" ? "Enter Zip code" : ""}
              InputLabelProps={{ shrink: false }}
              value={formikStripe.values.zipCode}
              onChange={formikStripe.handleChange}
              error={
                formikStripe.touched.zipCode &&
                Boolean(formikStripe.errors.zipCode)
              }
              helperText={
                formikStripe.touched.zipCode && formikStripe.errors.zipCode
              }
            />
          </div>
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <div className={classes.paymentfieldsTwoHorizontal}>
            <h2 className={classes.fieldsTitle}>State</h2>
            <TextField
              required
              id="outlined-required"
              defaultValue="Hello World"
              variant="outlined"
              name="state"
              label={formikStripe.values.state === "" ? "Enter state" : ""}
              InputLabelProps={{ shrink: false }}
              value={formikStripe.values.state}
              onChange={formikStripe.handleChange}
              error={
                formikStripe.touched.state && Boolean(formikStripe.errors.state)
              }
              helperText={
                formikStripe.touched.state && formikStripe.errors.state
              }
            />
          </div>
        </Grid>
      </Grid>

      <div className={classes.copyrightSection}>
        <Checkbox
          defaultChecked
          color="primary"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
        <h2 className={classes.copyright}>
          I agree and accept the above mentioned HOW REFUND POLICY WORKS of
          Mindmajix.com.
        </h2>
      </div>
      <div className={classes.button}>
        <Button
          variant="contained"
          className={classes.payButton}
          type="submit"
          disabled={!stripe}
        >
          <ArrowForwardIcon /> Pay Securely
        </Button>
      </div>
    </form>
  );
};

function payment({ setActiveStep, price, course, currency, trainingMode }) {
  const classes = useStyles();
  const theme = useTheme();

  // const [trainingMode, setTrainingMode] = React.useState("selfPlaced");
  // const [currency, setCurrency] = React.useState("INR");

  const [value, setValue] = React.useState(0);
  const [address2RazorPay, setAddress2RazorPay] = React.useState("");

  const [checked, setChecked] = React.useState(true);

  const CourseTotalFeeWithTax = () => {
    if (currency === "INR") {
      return +((18 / 100) * price).toFixed(0) + +price;
    } else {
      return +((5 / 100) * price).toFixed(0) + +price;
    }
  };

  const handleChangeChecked = (event) => {
    setChecked(event.target.checked);
  };

  // const handleChangeTraining = (event) => {
  //   setTrainingMode(event.target.value);
  // };
  // const handleChangeCurrency = (event) => {
  //   setCurrency(event.target.value);
  // };
  const handleChangeAddress2 = (event) => {
    setAddress2(event.target.value);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  // const stripePromise = loadStripe(
  //   "pk_test_51JCblNSHjLkba7i35s9DDiKqXI434VkDLJWVS8GGSKkhvMKDNUlqKVYRWcruGEr0DDLyRgIUvI2bKkaHuR2iGgIX00NaXsBB8H"
  // );

  const formik = useFormik({
    initialValues: {
      course,
      price: CourseTotalFeeWithTax(),
      trainingMode,
      currency,
      name: "",
      email: "",
      phoneNumber: "",
      address1: "",
      town: "",
      zipCode: "",
      state: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const valueObj = JSON.parse(JSON.stringify(values, null, 2));
      // console.log('**********this is valueObj***********: ', valueObj);
      // alert(JSON.stringify(values, null, 2));
      displayRazorpay(valueObj, setActiveStep);
    },
  });

  return (
    <div>
      <div>
        <h2 className={classes.paymentTitle}>Payment method</h2>
        <Grid container>
          <Grid style={{ margin: "auto" }} item lg={8} md={8} sm={12} xs={12}>
            <div className={classes.rootTabs}>
              <AppBar position="static" color="default">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  variant="fullWidth"
                  aria-label="full width tabs example"
                >
                  <Tab
                    label="Razorpay"
                    {...a11yProps(0)}
                    className={classes.tabsTitle}
                  />
                  <Tab
                    label="Stripe"
                    {...a11yProps(1)}
                    className={classes.tabsTitle}
                  />
                </Tabs>
              </AppBar>
              <SwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={value}
                onChangeIndex={handleChangeIndex}
                style={{ backgroundColor: "white" }}
              >
                <TabPanel value={value} index={0} dir={theme.direction}>
                  <form className={classes.root} onSubmit={formik.handleSubmit}>
                    {/* <div className={classes.paymentTitle}>
                  <h2 className={classes.paymentTitleHeading}>Pay using</h2>
                  <h2 className={classes.paymentTitleUnique}>Razorpay</h2>
                  <img
                    className={classes.paymentImg}
                    src="https://www.usbank.com/dam/images/businessbanking/credit-cards/contactless/business_leverage_business_platinum_business_cash_contactless.png"
                  />
                </div> */}
                    <Grid container>
                      <Grid item lg={12} md={12} sm={12} xs={12}>
                        <div className={classes.paymentfieldsVertical}>
                          <h2 className={classes.fieldsTitle}>Name</h2>
                          <TextField
                            required
                            id="outlined-required"
                            defaultValue="Hello World"
                            variant="outlined"
                            name="name"
                            label={
                              formik.values.name === "" ? "Enter name" : ""
                            }
                            InputLabelProps={{ shrink: false }}
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            error={
                              formik.touched.name && Boolean(formik.errors.name)
                            }
                            helperText={
                              formik.touched.name && formik.errors.name
                            }
                          />
                        </div>
                      </Grid>

                      <Grid item lg={6} md={6} sm={12} xs={12}>
                        <div className={classes.paymentfieldsTwoHorizontal}>
                          <h2 className={classes.fieldsTitle}>Phone Number</h2>
                          <TextField
                            required
                            id="outlined-required"
                            defaultValue="Hello World"
                            variant="outlined"
                            name="phoneNumber"
                            label={
                              formik.values.phoneNumber === ""
                                ? "Enter phone number"
                                : ""
                            }
                            InputLabelProps={{ shrink: false }}
                            value={formik.values.phoneNumber}
                            onChange={formik.handleChange}
                            error={
                              formik.touched.phoneNumber &&
                              Boolean(formik.errors.phoneNumber)
                            }
                            helperText={
                              formik.touched.phoneNumber &&
                              formik.errors.phoneNumber
                            }
                          />
                        </div>
                      </Grid>
                      <Grid item lg={6} md={6} sm={12} xs={12}>
                        <div className={classes.paymentfieldsVertical}>
                          <h2 className={classes.fieldsTitle}>Email</h2>
                          <TextField
                            required
                            id="outlined-required"
                            defaultValue="Hello World"
                            variant="outlined"
                            name="email"
                            label={
                              formik.values.email === "" ? "Enter email" : ""
                            }
                            InputLabelProps={{ shrink: false }}
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={
                              formik.touched.email &&
                              Boolean(formik.errors.email)
                            }
                            helperText={
                              formik.touched.email && formik.errors.email
                            }
                          />
                        </div>
                      </Grid>
                      <Grid item lg={6} md={6} sm={12} xs={12}>
                        <div className={classes.paymentfieldsVertical}>
                          <h2 className={classes.fieldsTitle}>Address 1</h2>
                          <TextField
                            required
                            id="outlined-required"
                            defaultValue="Hello World"
                            variant="outlined"
                            name="address1"
                            rows={4}
                            multiline
                            label={
                              formik.values.address1 === ""
                                ? "Enter address"
                                : ""
                            }
                            InputLabelProps={{ shrink: false }}
                            value={formik.values.address1}
                            onChange={formik.handleChange}
                            error={
                              formik.touched.address1 &&
                              Boolean(formik.errors.address1)
                            }
                            helperText={
                              formik.touched.address1 && formik.errors.address1
                            }
                          />
                        </div>
                      </Grid>
                      <Grid item lg={6} md={6} sm={12} xs={12}>
                        <div className={classes.paymentfieldsVertical}>
                          <h2 className={classes.fieldsTitle}>Address 2</h2>
                          <TextField
                            required
                            id="outlined-textarea"
                            defaultValue=""
                            variant="outlined"
                            multiline
                            name="address2"
                            rows={4}
                            label={
                              address2RazorPay === "" ? "Enter address" : ""
                            }
                            InputLabelProps={{ shrink: false }}
                            value={address2RazorPay}
                            onChange={(e) =>
                              setAddress2RazorPay(e.target.value)
                            }
                          />
                        </div>
                      </Grid>
                      <Grid item lg={4} md={4} sm={12} xs={12}>
                        <div className={classes.paymentfieldsTwoHorizontal}>
                          <h2 className={classes.fieldsTitle}>Town/City</h2>

                          <TextField
                            required
                            id="outlined-required"
                            defaultValue="Hello World"
                            variant="outlined"
                            name="town"
                            label={
                              formik.values.town === "" ? "Enter town/city" : ""
                            }
                            InputLabelProps={{ shrink: false }}
                            value={formik.values.town}
                            onChange={formik.handleChange}
                            error={
                              formik.touched.town && Boolean(formik.errors.town)
                            }
                            helperText={
                              formik.touched.town && formik.errors.town
                            }
                          />
                        </div>
                      </Grid>
                      <Grid item lg={4} md={4} sm={12} xs={12}>
                        <div className={classes.paymentfieldsTwoHorizontal}>
                          <h2 className={classes.fieldsTitle}>Zip Code</h2>
                          <TextField
                            required
                            id="outlined-required"
                            defaultValue="Hello World"
                            variant="outlined"
                            name="zipCode"
                            label={
                              formik.values.zipCode === ""
                                ? "Enter Zip code"
                                : ""
                            }
                            InputLabelProps={{ shrink: false }}
                            value={formik.values.zipCode}
                            onChange={formik.handleChange}
                            error={
                              formik.touched.zipCode &&
                              Boolean(formik.errors.zipCode)
                            }
                            helperText={
                              formik.touched.zipCode && formik.errors.zipCode
                            }
                          />
                        </div>
                      </Grid>
                      <Grid item lg={4} md={4} sm={12} xs={12}>
                        <div className={classes.paymentfieldsTwoHorizontal}>
                          <h2 className={classes.fieldsTitle}>State</h2>
                          <TextField
                            required
                            id="outlined-required"
                            defaultValue="Hello World"
                            variant="outlined"
                            name="state"
                            label={
                              formik.values.state === "" ? "Enter state" : ""
                            }
                            InputLabelProps={{ shrink: false }}
                            value={formik.values.state}
                            onChange={formik.handleChange}
                            error={
                              formik.touched.state &&
                              Boolean(formik.errors.state)
                            }
                            helperText={
                              formik.touched.state && formik.errors.state
                            }
                          />
                        </div>
                      </Grid>
                    </Grid>

                    <div className={classes.copyrightSection}>
                      <Checkbox
                        defaultChecked
                        color="primary"
                        inputProps={{ "aria-label": "secondary checkbox" }}
                      />
                      <h2 className={classes.copyright}>
                        I agree and accept the above mentioned HOW REFUND POLICY
                        WORKS of Mindmajix.com.
                      </h2>
                    </div>
                    <div className={classes.button}>
                      <Button
                        type="submit"
                        variant="contained"
                        className={classes.payButton}
                        // onClick={formik.handleSubmit}
                      >
                        <ArrowForwardIcon /> Pay Securely
                      </Button>
                    </div>
                  </form>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                  <Elements stripe={stripePromise}>
                    <CheckoutForm
                      course={formik.values.course}
                      price={formik.values.price}
                      setActiveStep={setActiveStep}
                      currency={currency}
                      trainingMode={trainingMode}
                    />
                  </Elements>
                </TabPanel>
              </SwipeableViews>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default payment;
