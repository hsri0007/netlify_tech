import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  categoryPage: {},
  firstSection: {
    backgroundColor: "#000033",
    height: "350px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  firstSectionHeading: {
    color: "white",
    fontSize: "35px",
  },
  firstSectionPara: {
    color: "white",
    fontSize: "20px",
    alignSelf: "center",
  },

  root: {
    display: "flex",
    justifyContent: "center",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      marginLeft: drawerWidth,
      marginTop: "160px",
      position: "absolute",
    },
    background: "#000033",
    alignSelf: "center",
    height: "320px",
    "@media (max-width: 600px)": {
      height: "60px",
      position: "fixed",
    },
  },
  menuButton: {
    // marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  list: {
    paddingLeft: "35px",
    "&:hover": {
      background: "white",
      color: "black",
      opacity: "0.9",
      borderLeft: "10px solid #d9d9d9",
    },
  },
  // necessary for content to be below app bar
  // toolbar: theme.mixins.toolbar,
  toolbar: {
    minHeight: "8px",
  },
  drawerPaper: {
    background: "#000033",
    width: "303px",
    color: "white",
    marginTop: "377px",
    position: "static",
    height: "140vh",
    marginLeft: "60px",
    marginBottom: "120px",
    "@media (max-width: 600px)": {
      background: "#000033",
      width: "303px",
      color: "white",
      marginTop: "0px",
      position: "static",
      height: "115vh",
      marginLeft: "0px",
      marginBottom: "120px",
      paddingBottom: "170px",
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    margin: "320px 0px 0px 120px",
    "@media (max-width: 600px)": {
      margin: "0px",
      padding: "0px",
    },
  },
  tool: {
    alignItems: "center",
  },
  categoryTitle: {
    color: "White",
    fontSize: "26px",
    borderBottom: "2px solid white",
    marginLeft: "65px",
    width: "140px",
    "@media (max-width: 600px)": {
      maxWidth: 350,
      height: "50px",
    },
  },
  cardActions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "7px 25px",
    "@media (max-width: 600px)": {
      padding: "7px 20px",
    },
  },

  cardRoot: {
    maxWidth: 355,
    marginLeft: 10,
    marginRight: 10,
    height: 380,
    "@media (max-width: 1700px)": {
      maxWidth: 405,
      height: 380,
    },
    "@media (max-width: 1400px)": {
      maxWidth: 295,
      height: 375,
    },
    "@media (max-width: 600px)": {
      maxWidth: 350,
      height: 355,
      margin: "20px 10px",
    },
  },
  media: {
    height: "195px",
    width: "400px",
    "@media (max-width: 1700px)": {
      height: 155,
      width: 340,
    },
    "@media (max-width: 600px)": {
      maxWidth: 340,
      height: 175,
    },
  },
  cardRows: {
    display: "flex",
    flexDirection: "row",
    padding: "34px 0px",
    justifyContent: "space-evenly",
    width: "90%",
    "@media (max-width: 600px)": {
      flexDirection: "column",
      padding: "0px",
      width: "100%",
    },
  },
  cardColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  categoryText: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    justifyContent: "center",
    paddingTop: "50px",
    "@media (max-width: 600px)": {
      display: "none",
    },
  },
  categoryHead: {
    alignSelf: "center",
    justifyContent: "center",
    width: "100%",
    "@media (max-width: 600px)": {
      alignSelf: "center",
      justifyContent: "flex-start",
      width: "100%",
    },
  },
  loadMoreButton: {
    display: "flex",
    justifyContent: "center",
    margin: "25px 0px",
  },
  loadButton: {
    backgroundColor: "#000033",
    color: "white",
    width: "155px",
    height: "60px",
    "&:hover": {
      backgroundColor: "#000080",
    },
  },
  cardTexts: {
    padding: "15px 35px",
    "@media (max-width: 600px)": {
      padding: "15px 25px",
    },
  },
  menuItems: {
    display: "none",
    "@media (max-width: 600px)": {
      display: "flex",
      flexDirection: "column",
    },
  },
}));

function Category(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  {
    /* <div className={classes.firstSection}>
        <h2 className={classes.firstSectionHeading}>
          Artificial Intelligence and Machine learning Courses
        </h2>
        <p className={classes.firstSectionPara}>
          Learn new skills, purse your intrests or advance your career with our
          online courses
        </p>
      </div> */
  }
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List className={classes.menuItems}>
        {["Courses", "Job reports", "Events", "Alumni"].map((text, index) => (
          <ListItem button key={text} className={classes.list}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <h2 className={classes.categoryTitle}>Categories</h2>
      <List>
        {[
          "Artificial Intelligence and Machine Learning Courses",
          "Cloud Computing Courses",
          "Big Data Analytics Courses",
          "Programming & Frameworks Courses",
          "ERP Courses",
          "Enterprise Application Integrations Courses",
          "Software Automation Testing Courses",
          "Cyber Security and SIEM Courses",
          "RPA Certification Courses",
          "Database Management & Administration Certification Courses",
          "CMS Certification Courses",
          "Business Process Management Courses",
          "Operating System & Administration Courses",
          "Data Warehousing Certification Courses",
        ].map((text, index) => (
          <ListItem button key={text} className={classes.list}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );
  const [more, setMore] = useState(3);
  function showMore() {
    if (more === 4) {
      setMore(3);
    } else {
      setMore(4);
    }
  }

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.categoryPage}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar style={{}} className={classes.categoryHead}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              {/* <MenuIcon /> */}
              <ArrowForwardIcon />
            </IconButton>
            <Typography variant="h6" noWrap className={classes.categoryText}>
              <h2 className={classes.firstSectionHeading}>
                Artificial Intelligence and Machine learning Courses
              </h2>
              <p className={classes.firstSectionPara}>
                Learn new skills, purse your intrests or advance your career
                with our online courses
              </p>
            </Typography>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              containerStyle={{ height: "calc(100% - 264px)", top: 64 }}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.cardColumn}>
            {Array(more)
              .fill(null)
              .map((value, index) => (
                <div className={classes.cardRows}>
                  <div className={classes.card}>
                    <Card className={classes.cardRoot}>
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image="https://stimg.cardekho.com/images/carexteriorimages/630x420/Lamborghini/Aventador/7636/1621848973765/front-left-side-47.jpg?imwidth=420&impolicy=resize"
                          title="Contemplative Reptile"
                        />
                        <CardContent className={classes.cardTexts}>
                          <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            Lizards are a widespread group of squamate reptiles,
                            with over 6,000 species, ranging across all
                            continents except Antarctica
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions className={classes.cardActions}>
                        <Button size="small" color="primary">
                          Share
                        </Button>
                        <Button size="small" color="primary">
                          Learn More
                        </Button>
                      </CardActions>
                    </Card>
                  </div>
                  <div className={classes.card}>
                    <Card className={classes.cardRoot}>
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image="https://stimg.cardekho.com/images/carexteriorimages/630x420/Lamborghini/Aventador/7636/1621848973765/front-left-side-47.jpg?imwidth=420&impolicy=resize"
                          title="Contemplative Reptile"
                        />
                        <CardContent className={classes.cardTexts}>
                          <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            Lizards are a widespread group of squamate reptiles,
                            with over 6,000 species, ranging across all
                            continents except Antarctica
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions className={classes.cardActions}>
                        <Button size="small" color="primary">
                          Share
                        </Button>
                        <Button size="small" color="primary">
                          Learn More
                        </Button>
                      </CardActions>
                    </Card>
                  </div>
                  <div className={classes.card}>
                    <Card className={classes.cardRoot}>
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image="https://stimg.cardekho.com/images/carexteriorimages/630x420/Lamborghini/Aventador/7636/1621848973765/front-left-side-47.jpg?imwidth=420&impolicy=resize"
                          title="Contemplative Reptile"
                        />
                        <CardContent className={classes.cardTexts}>
                          <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            Lizards are a widespread group of squamate reptiles,
                            with over 6,000 species, ranging across all
                            continents except Antarctica
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions className={classes.cardActions}>
                        <Button size="small" color="primary">
                          Share
                        </Button>
                        <Button size="small" color="primary">
                          Learn More
                        </Button>
                      </CardActions>
                    </Card>
                  </div>
                </div>
              ))}
          </div>

          <div className={classes.loadMoreButton}>
            <Button
              variant="contained"
              size="large"
              className={classes.loadButton}
              onClick={showMore}
            >
              {more === 3 ? "Load More" : "Load Less"}
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Category;
