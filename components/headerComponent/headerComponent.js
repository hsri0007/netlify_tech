import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";
import { Fragment } from "react";
import MobileNav from "../mobileNav/mobileNav";
import MenuIcon from "@material-ui/icons/Menu";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import InputAdornment from "@material-ui/core/InputAdornment";
import { getAllCourses } from "../../apiCalls";
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  rootNavBar: {
    display: "grid",
    gridTemplateColumns: "65% auto",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "75% auto",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  rootShortcuts: {
    background: "#e6ecef",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  rootMobileNav: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  rootLeftnav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  shortcutsNav: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    "& ul": {
      display: "flex",
      flexDirection: "row",
      listStyleType: "none",
      width: "55%",
      margin: "0.5rem",
      justifyContent: "space-evenly",
      [theme.breakpoints.down("md")]: {
        width: "70%",
      },
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
  },
  dropdown: {
    position: "relative",
    overflow: "hidden",
    color: "#fff",
    backgroundColor: "#2e3191",
  },
  dropdownContent: {
    position: "absolute",
    // backgroundColor: "#f9f9f9",
    width: "800px",
    // top: "2.5rem",
    // left: "-2rem",
    // boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
    zIndex: 1,
  },
  column: {
    float: "left",
    width: "33.33%",
    padding: "10px",
    backgroundColor: "#ccc",
    height: "250px",
  },
  column: {
    "& a": {
      float: "none",
      color: "black",
      padding: "10px",
      textDecoration: "none",
      display: "block",
      textAlign: "left",
    },
    "& a:hover": {
      backgroundColor: "#ddd",
    },
  },

  subnav: {
    color: "rgb(58 58 58 / 87%)",
    textDecoration: "none",
    fontWeight: "500",
  },

  row: {
    display: "grid",
    gridTemplateColumns: "auto auto auto auto",
    gridColumnGap: "1rem ",
    minHeight: "50vh",
    padding: "1rem",
    borderRadius: "1rem",
    "&:after": {
      content: "",
      display: "table",
      clear: "both",
    },
  },

  btn_Primary: {
    color: "#2e3191",
    border: "1px solid #2e3191",
  },
}));

const HeaderComponent = () => {
  const classes = useStyles();
  const [state, setState] = React.useState(false);
  const [totalCourses, setTotalCourses] = React.useState([]);

  const handleSearch = async (e) => {
    const allCourses = await getAllCourses({
      search_string: e.target.value,
      limit: 5,
    });
    setTotalCourses(allCourses.final_obj);
  };

  const handleRedirect = async (e) => {
    setTimeout(async () => {
      const allCourses = await getAllCourses({
        search_string: document.getElementsByName("searchStr")[0].value,
        limit: 1,
      });
      if (allCourses.final_obj.length === 1)
        window.location.href = `/${allCourses.final_obj[0].url_title}`;
    }, 1000);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const fefr = open ? 'simple-popover' : undefined;

  return (
    <Fragment>
      <div className={classes.rootShortcuts}>
        <Container>
          <div className={classes.shortcutsNav}>
            <ul>
              <li>
                <a
                  target="_blank"
                  className={classes.subnav}
                  target="_blank"
                  href="/blog"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  className={classes.subnav}
                  target="_blank"
                  href="/corporate-training"
                >
                  Corporate Training
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  className={classes.subnav}
                  target="_blank"
                  href="/become-an-instructor"
                >
                  Become an Instructor
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </div>
      <div style={{ boxShadow: "0 2px 8px 0 rgb(0 0 0 / 10%)" }}>
        <Container>
          <div className={classes.rootMobileNav}>
            <MobileNav />
          </div>
          <div className={classes.rootNavBar}>
            <div className={classes.rootLeftnav}>
              <div>
                <img
                  onClick={() => (window.location.href = `/`)}
                  src="https://tekslateassets.s3.amazonaws.com/images/logo.svg"
                  style={{
                    width: "80px",
                    height: "50px",
                    margin: "10px 0px",
                    cursor: "pointer",
                  }}
                />
                {/* <h2>Tekslate</h2> */}
              </div>
              <div style={{ position: "relative" }}>
                <Button id="allcourses"  className={classes.dropdown} aria-describedby={fefr} variant="contained" color="primary" onClick={handleClick}>
                <MenuIcon style={{marginRight: "5px", fontSize: "20px"}} /> All courses
                </Button>
                <Popover  className={classes.dropdownContent}
                  id={fefr}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                >
                  <div>
                    <div className={classes.row}>
                      <div className={classes.column}>
                        <h3 style={{padding:"0px 10px"}}>Cloud Computing</h3>
                        <a target="_blank" href="/salesforce-training">
                          Salesforce Training
                        </a>
                        <a target="_blank" href="/aws-training">
                          AWS Training
                        </a>
                        <a target="_blank" href="/microsoft-azure-training">
                          Azure Training
                        </a>
                        <a target="_blank" href="/informatica-cloud-training">
                          Informatica Cloud Training
                        </a>
                        <a target="_blank" href="/netapp-training">
                          NetApp Training
                        </a>
                        <a target="_blank" href="/openstack-training">
                          OpenStack Training
                        </a>
                        <a target="_blank" href="/vmware-training">
                          VMware Training
                        </a>
                      </div>
                      <div className={classes.column}>
                        <h3 style={{padding:"0px 10px"}}>Programming and Frameworks</h3>
                        <a target="_blank" href="/mean-stack-training">
                          MEAN Stack Training
                        </a>
                        <a target="_blank" href="/golang-training">
                          Go Training
                        </a>
                        <a target="_blank" href="/kotlin-training">
                          Kotlin Training
                        </a>
                        <a target="_blank" href="/labview-training">
                          LabVIEW Training
                        </a>
                        <a target="_blank" href="/powerapps-training">
                          PowerApps Training
                        </a>
                        <a target="_blank" href="/oracle-apex-training">
                          Oracle Apex Training
                        </a>
                        <a target="_blank" href="/microservices-training">
                          Microservices Training
                        </a>
                      </div>
                      <div className={classes.column}>
                        <h3 style={{padding:"0px 10px"}}>Big Data Analytics Courses</h3>
                        <a target="_blank" href="/denodo-training">
                          Denodo Training
                        </a>
                        <a target="_blank" href="/elasticsearch-training">
                          Elasticsearch Training
                        </a>
                        <a target="_blank" href="/elk-stack-training">
                          ELK Stack Training
                        </a>
                        <a target="_blank" href="/apache-spark-training">
                          Apache Spark Training
                        </a>
                        <a
                          target="_blank"
                          href="/apache-spark-and-scala-training"
                        >
                          Apache Scala Training
                        </a>
                        <a target="_blank" href="/splunk-training">
                          Splunk Training
                        </a>
                        <a target="_blank" href="/apache-kafka-training">
                          Apache Kafka Training
                        </a>
                      </div>
                      <div className={classes.column}>
                        <h3 style={{padding:"0px 10px"}}>ERP Courses</h3>
                        <a target="_blank" href="/netsuite-training">
                          NetSuite Technical Training
                        </a>
                        <a target="_blank" href="/netsuite-training">
                          NetSuite Training
                        </a>
                        <a target="_blank" href="/peoplesoft-fscm-training">
                          Peoplesoft FSCM Training
                        </a>
                        <a
                          target="_blank"
                          href="/microsoft-dynamics-365-training"
                        >
                          Microsoft Dynamics 365 Training
                        </a>
                        <a target="_blank" href="/peoplesoft-hrms-training">
                          PeopleSoft HRMS Training
                        </a>
                        <a target="_blank" href="/workday-training">
                          Workday Training
                        </a>
                        <a
                          target="_blank"
                          href="/peoplesoft-financials-training"
                        >
                          PeopleSoft Financials Training
                        </a>
                      </div>
                    </div>
                  </div>
                </Popover>


                {/* <Button
                  variant="contained"
                  startIcon={<MenuIcon />}
                  className={classes.dropdown}
                  onClick={() => setState(!state)}
                >
                  All courses
                </Button> */}
                {/* {state ? (
                  <div className={classes.dropdownContent}>
                    <div className={classes.row}>
                      <div className={classes.column}>
                        <h3 style={{padding:"0px 10px"}}>Cloud Computing</h3>
                        <a target="_blank" href="/salesforce-training">
                          Salesforce Training
                        </a>
                        <a target="_blank" href="/aws-training">
                          AWS Training
                        </a>
                        <a target="_blank" href="/microsoft-azure-training">
                          Azure Training
                        </a>
                        <a target="_blank" href="/informatica-cloud-training">
                          Informatica Cloud Training
                        </a>
                        <a target="_blank" href="/netapp-training">
                          NetApp Training
                        </a>
                        <a target="_blank" href="/openstack-training">
                          OpenStack Training
                        </a>
                        <a target="_blank" href="/vmware-training">
                          VMware Training
                        </a>
                      </div>
                      <div className={classes.column}>
                        <h3 style={{padding:"0px 10px"}}>Programming and Frameworks</h3>
                        <a target="_blank" href="/mean-stack-training">
                          MEAN Stack Training
                        </a>
                        <a target="_blank" href="/golang-training">
                          Go Training
                        </a>
                        <a target="_blank" href="/kotlin-training">
                          Kotlin Training
                        </a>
                        <a target="_blank" href="/labview-training">
                          LabVIEW Training
                        </a>
                        <a target="_blank" href="/powerapps-training">
                          PowerApps Training
                        </a>
                        <a target="_blank" href="/oracle-apex-training">
                          Oracle Apex Training
                        </a>
                        <a target="_blank" href="/microservices-training">
                          Microservices Training
                        </a>
                      </div>
                      <div className={classes.column}>
                        <h3 style={{padding:"0px 10px"}}>Big Data Analytics Courses</h3>
                        <a target="_blank" href="/denodo-training">
                          Denodo Training
                        </a>
                        <a target="_blank" href="/elasticsearch-training">
                          Elasticsearch Training
                        </a>
                        <a target="_blank" href="/elk-stack-training">
                          ELK Stack Training
                        </a>
                        <a target="_blank" href="/apache-spark-training">
                          Apache Spark Training
                        </a>
                        <a
                          target="_blank"
                          href="/apache-spark-and-scala-training"
                        >
                          Apache Scala Training
                        </a>
                        <a target="_blank" href="/splunk-training">
                          Splunk Training
                        </a>
                        <a target="_blank" href="/apache-kafka-training">
                          Apache Kafka Training
                        </a>
                      </div>
                      <div className={classes.column}>
                        <h3 style={{padding:"0px 10px"}}>ERP Courses</h3>
                        <a target="_blank" href="/netsuite-training">
                          NetSuite Technical Training
                        </a>
                        <a target="_blank" href="/netsuite-training">
                          NetSuite Training
                        </a>
                        <a target="_blank" href="/peoplesoft-fscm-training">
                          Peoplesoft FSCM Training
                        </a>
                        <a
                          target="_blank"
                          href="/microsoft-dynamics-365-training"
                        >
                          Microsoft Dynamics 365 Training
                        </a>
                        <a target="_blank" href="/peoplesoft-hrms-training">
                          PeopleSoft HRMS Training
                        </a>
                        <a target="_blank" href="/workday-training">
                          Workday Training
                        </a>
                        <a
                          target="_blank"
                          href="/peoplesoft-financials-training"
                        >
                          PeopleSoft Financials Training
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )} */}
              </div>
              <div style={{ width: "420px" }}>
                <Autocomplete
                  freeSolo
                  id="free-solo-2-demo"
                  disableClearable
                  options={totalCourses.map((option) => option.course)}
                  onClose={handleRedirect}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      margin="normal"
                      placeholder="What do you want to learn"
                      name="searchStr"
                      size="small"
                      variant="outlined"
                      onChange={handleSearch}
                      InputProps={{
                        ...params.InputProps,
                        type: "search",
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                />
              </div>
            </div>
            {/* <div>
              <Button
                variant="outlined"
                className={classes.btn_Primary}
                href="#outlined-buttons"
              >
                <PersonIcon />
                &nbsp;Log in
              </Button>
            </div> */}
          </div>
        </Container>
      </div>
    </Fragment>
  );
};

export default HeaderComponent;
