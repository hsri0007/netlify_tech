import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: "20px",
    background: "linear-gradient(145deg, #e6e6e6, #ffffff)",
    boxShadow: "5px 5px 10px #e3e3e3,-5px -5px 10px #ffffff;",
    width: "350px",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
    },
  },
  details: {
    display: "flex",
    flexDirection: "column",
    background: "#ededee",
    flex: 1,
    textAlign: "center",
  },
  descContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
  cover: {
    width: 151,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function MediaControlCard({ review, idx }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <a href={review.slug} target="_blank" rel="noreferrer">
      <Card className={classes.root}>
        <div className={classes.details1}>
          <CardContent className={classes.content}>
            <Typography
              component="h6"
              variant="h6"
              style={{
                color: "black",
                fontSize: "1.2rem",
                fontFamily: theme.palette.typography.fontFamily,
                fontWeight: "bold",
                paddingBottom: "40px",
              }}
            >
              {review.name}
            </Typography>
            <div>
              <div className={classes.descContent}>
                <CalendarTodayIcon style={{ marginRight: "10px" }} />
                <div>{review.duration} hrs</div>
              </div>
              <div
                className={classes.descContent}
                style={{ marginTop: "10px" }}
              >
                <PersonOutlineOutlinedIcon style={{ marginRight: "10px" }} />
                <div>{review.enrolled} Learners</div>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </a>
  );
}
