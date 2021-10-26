import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container:{
      display: "flex",
      flexDirection:"column",
      margin: "100px auto" ,
      padding: "100px",
      justifyContent:"center",
      alignItems: "center",
      width: "87%",
      backgroundColor: "#ffffcc",
    "@media (max-width: 600px)": {
      display: "flex",
      flexDirection:"column",
      padding: "20px",
      justifyContent:"center",
      alignItems: "space-between",
      width: "100%",
      backgroundColor: "#ffffcc"
    }
      
  },
  logos: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    "@media (max-width: 600px)": {
        display: "none"
    }
  },
  secondPageHeading: {

  },
  secondPageContentHeading:{
      fontSize: "40px",
    "@media (max-width: 600px)": {
      fontSize: "25px",
      display: "flex",
    }
  },
  secondPageContentParagraph:{
    fontSize: "20px",
    padding: "0px 0px",
    wordSpacing: "5px",
    lineHeight: "1.6",
    color: "#646462",
    "@media (max-width: 600px)": {
      fontSize: "15px",
    padding: "0px 0px",
    wordSpacing: "5px",
    lineHeight: "1.6",
    color: "#646462",
    }
  },
  unique:{
    backgroundColor: "rgb(248, 203, 203)",
        color: "rgb(241, 56, 56)",
        fontSize: "40px",
        padding: "2px 15px",
        margin: "0px 10px",
        width: "150px",
        alignItems: "center",
        justifyContent: "center",
      "@media (max-width: 600px)": {
        color: "rgb(241, 56, 56)",
        fontSize: "25px",
        padding: "2px 9px",
        margin: "0px 5px",
        width: "179px",
        alignItems: "center",
        justifyContent: "center",

    }
        
  },
  mainContent:{
    display: "flex",
    flexDirection: "row"   
  },
  left:{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      "@media (max-width: 600px)": {
        display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
        width: "100%",
      }
  },
  row:{
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      width: "95%",
      padding: "20px 0",
      "@media (max-width: 600px)": {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
      }
  },
  points:{
      fontSize: "27px",
      color: "red",
      "@media (max-width: 600px)": {
        fontSize: "20px",
        color: "red",
      }
  },
  heading:{
      fontSize: "22px",
      "@media (max-width: 600px)": {
        fontSize: "16px"
      }
  },
  para:{
      fontSize: "16px",
    color: "#646462",
      "@media (max-width: 600px)": {
        fontSize: "12px",
        color: "#646462",
      }

  },
  lastNote:{
      fontSize: "18px",
      color: "red",
      "@media (max-width: 600px)": {
        fontSize: "14px",
        color: "red",
      }

  },
    img:{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      "@media (max-width: 800px)": {
        display: "none"
      },
      "@media (max-width: 600px)": {
        display: "none"
      }
    }
});

function SecondPage() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.logos}>
        <img
          src="http://www.clipartbest.com/cliparts/yTk/4or/yTk4or48c.jpeg"
          height="150px"
          width="200px"
        />
        <img
          src="http://www.clipartbest.com/cliparts/yTk/4or/yTk4or48c.jpeg"
          height="150px"
          width="200px"
        />
        <img
          src="http://www.clipartbest.com/cliparts/yTk/4or/yTk4or48c.jpeg"
          height="150px"
          width="200px"
        /> 
      </div>
      <div className={classes.secondPageHeading}>
        <h2 className={classes.secondPageContentHeading}>
          A<span className={classes.unique}>life-changing</span>
          experience
        </h2>
        <p className={classes.secondPageContentParagraph}>
         During our 9-week (full-time) or24-week (part-time) coding bootcamp, learn the most in-demand skills with motivated students, passionate teachers and a hands-on curriculum teaching you how to build software and solve problems.
        </p>
      </div>
      <div className={classes.mainContent}>
        <div className={classes.left}>
            <div className={classes.row}>
                <div>
                    <h2 className={classes.points}>4.99/5</h2>
                    <h4 className={classes.heading}>average review</h4>
                    <p className={classes.para}>We are focused on our students experience our bootcamps have the best student reviews and Net Promoter Score (NPS) of all coding Bootcamps</p>
                    <h4 className={classes.lastNote}>what our students say</h4>
                </div>
                <div>
                    <h2 className={classes.points}>4.99/5</h2>
                    <h4 className={classes.heading}>average review</h4>
                    <p className={classes.para}>We are focused on our students experience our bootcamps have the best student reviews and Net Promoter Score (NPS) of all coding Bootcamps</p>
                    <h4 className={classes.lastNote}>what our students say</h4>
                </div>
            </div>
            <div className={classes.row}>
                <div>
                    <h2 className={classes.points}>4.99/5</h2>
                    <h4 className={classes.heading}>average review</h4>
                    <p className={classes.para}>We are focused on our students experience our bootcamps have the best student reviews and Net Promoter Score (NPS) of all coding Bootcamps</p>
                    <h4 className={classes.lastNote}>what our students say</h4>
                </div>
                <div>
                    <h2 className={classes.points}>4.99/5</h2>
                    <h4 className={classes.heading}>average review</h4>
                    <p className={classes.para}>We are focused on our students experience our bootcamps have the best student reviews and Net Promoter Score (NPS) of all coding Bootcamps</p>
                    <h4 className={classes.lastNote}>what our students say</h4>
                </div>
            </div>
        </div>
        <div className={classes.img}>
            <img src="https://img.money.com/2016/09/160919_em_mrrobot.jpg?quality=60&w=1600" height="400px" widht="50px"/>
        </div>
      </div>
    </div>
  );
}

export default SecondPage;
