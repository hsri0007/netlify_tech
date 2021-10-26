import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

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
    fontSize: "18px",
    color: "#666666",
    margin: "2px",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  tabsTitle: {
    fontSize: "25px",
    fontWeight: "600",
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
  PaymentMethod: {
    margin: "0 50px",
  },
  summary: {
    display: "flex",
    flexDirection: "column",
  },
  summarySection: {
    backgroundColor: "white",
    padding: "30px 0px",
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 5px 10px",
    margin: "0 50px",
    "@media (max-width: 1300px)": {
      width: "345px",
    },
    "@media (max-width: 935px)": {
      margin: "0px 0px 100px 0px",
      padding: "30px 0px",
    },
  },
  fields: {
    margin: "20px 10px",
  },
  title: {
    fontSize: "35px",
    color: "#666666",
    margin: "auto",
    "@media (max-width: 935px)": {
      fontSize: "30px",
      paddingLeft: "0px",
    },
  },
  paymentTitle: {
    fontSize: "35px",
    paddingTop: "20px",
    color: "#666666",
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
    width: 735,
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 5px 10px",
    "@media (max-width: 1300px)": {
      width: 585,
    },
    "@media (max-width: 935px)": {
      width: 345,
    },
  },

  paymentfieldsVertical: {
    margin: "20px 30px",
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
    margin: "20px 30px",
    "@media (max-width: 935px)": {
      margin: "0px",
      flexDirection: "column",
    },
  },
  paymentfieldsTwoHorizontal: {
    display: "flex",
    flexDirection: "column",
    width: "275px",
    justifyContent: "space-between",
    "@media (max-width: 1300px)": {
      width: 205,
    },
    "@media (max-width: 935px)": {
      flexDirection: "column",
      width: "100%",
      margin: "24px 0px",
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
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingLeft: "20px",
    "@media (max-width: 935px)": {
      paddingLeft: "0px",
    },
  },
  button: {
    alignSelf: "flex-end",
    paddingRight: "35px",
    paddingBottom: "35px",
  },
  payButton: {
    width: "175px",
    height: "58px",
    backgroundColor: "#f42525",
    color: "white",
    fontWeight: "600",
    "&:hover": {
      backgroundColor: "#d21414",
    },
  },
  paymentfieldsVerticalLast: {
    margin: "20px 30px",
  },
  mainbtn: {
    margin: "auto",
    fontSize: "18px",
    padding: "8px 16px",
    background: "#1358db",
    color: "white",
    textTransform: "none",
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





function details({ setPrice, price, trainingMode, setTrainingMode, currency, setCurrency, setCourse, course }) {
  const classes = useStyles();
  const theme = useTheme();

  // const [trainingMode, setTrainingMode] = React.useState("selfPlaced");
  // const [currency, setCurrency] = React.useState("INR");

  const [value, setValue] = React.useState(0);
  const [address2RazorPay, setAddress2RazorPay] = React.useState("");

  const [checked, setChecked] = React.useState(true);

  const handleChangeChecked = (event) => {
    setChecked(event.target.checked);
  };

  const handleChangeTraining = (event) => {
    setTrainingMode(event.target.value);
  };
  const handleChangeCurrency = (event) => {
    setCurrency(event.target.value);
  };
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

  // const formik = useFormik({
  //   initialValues: {
  //     course: "",
  //     price: "",
  //     name: "",
  //     email: "",
  //     phoneNumber: "",
  //     address1: "",
  //     town: "",
  //     zipCode: "",
  //     state: "",
  //   },
  //   validationSchema: validationSchema,
  //   onSubmit: (values) => {
  //     const valueObj = JSON.stringify(values, null, 2);
  //     alert(JSON.stringify(values, null, 2));
  //     displayRazorpay(valueObj);
  //   },
  // });

  return (
    <div>
      <div className={classes.summary}>
        <h2 className={classes.title}>Summary</h2>
        <Grid container>
          <Grid style={{ margin: "auto" }} item lg={6} md={8} sm={12} xs={12}>
            <form className={classes.root}>
              <Grid container>

                <Grid item lg={4} md={4} sm={12} xs={12}>
                  <div className={classes.fields}>
                    <h2 className={classes.fieldsTitle}>Training mode</h2>
                    <FormControl variant="outlined" className={classes.formControl}>
                      <Select
                        native
                        value={trainingMode}
                        onChange={handleChangeTraining}
                        InputLabelProps={{ shrink: true }}
                        inputProps={{
                          name: "training",
                          id: "outlined-age-native-simple",
                        }}
                      >
                        <option value={"selfPaced"}>Self Paced</option>
                        <option value={"liveVirtualTraining"}>
                          Live Virtual Training
                        </option>
                      </Select>
                    </FormControl>
                  </div>
                </Grid>
                <Grid item lg={8} md={8} sm={12} xs={12}>
                  <div className={classes.fields}>
                    <h2 className={classes.fieldsTitle}>Course</h2>
                    <TextField
                      required
                      id="outlined-required"
                      defaultValue="Hello World"
                      variant="outlined"
                      name="course"
                      label={course === "" ? "Enter course" : ""}
                      InputLabelProps={{ shrink: false }}
                      value={course}
                      onChange={(event) => { setCourse(event.target.value) }}
                    // error={formik.touched.course && Boolean(formik.errors.course)}
                    // helperText={formik.touched.course && formik.errors.course}
                    />
                  </div>
                </Grid>
                <Grid item lg={4} md={4} sm={12} xs={12}>
                  <div className={classes.fields}>
                    <h2 className={classes.fieldsTitle}>Currency</h2>
                    <FormControl variant="outlined" className={classes.formControl}>
                      <Select
                        native
                        value={currency}
                        InputLabelProps={{ shrink: true }}
                        onChange={handleChangeCurrency}
                        inputProps={{
                          name: "currency",
                          id: "outlined-age-native-simple",
                        }}
                      >
                        <option value={"INR"}>INR</option>
                        <option value={"USD"}>USD</option>
                      </Select>
                    </FormControl>
                  </div>
                </Grid>
                <Grid item lg={8} md={8} sm={12} xs={12}>
                  <div className={classes.fields}>
                    <h2 className={classes.fieldsTitle}>Price</h2>
                    <TextField
                      required
                      id="outlined-required"
                      defaultValue="Hello World"
                      variant="outlined"
                      name="price"
                      InputLabelProps={{ shrink: false }}
                      label={price === "" ? "Enter price" : ""}
                      value={price}
                      onChange={(event) => setPrice(event.target.value)}
                    // error={formik.touched.price && Boolean(formik.errors.price)}
                    // helperText={formik.touched.price && formik.errors.price}
                    />
                  </div>
                </Grid>
              </Grid>




              <h2 className={classes.tax}>
                Tax: {currency === "INR" ? "Rs" : "$"}{" "}
                {currency === "INR" ? price * 0.18 : price * 0.05}
              </h2>
              <h2 className={classes.tax}>
                Total: {currency === "INR" ? "Rs" : "$"}{" "}
                {parseInt(price) +
                  (currency === "INR" ? parseInt(price) * 0.18 : parseInt(price) * 0.05)}
              </h2>
              {/* <Grid style={{ marginRight: "auto", display: "flex" }} item lg={3} md={3} sm={6} xs={6}>
                <Button className={classes.mainbtn} variant="contained" type="submit">
                  Proceed
                </Button>
              </Grid> */}
            </form>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default details;
