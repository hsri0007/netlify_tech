import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles((theme) => ({
    btn: {
        textTransform: "inherit",
        border: "1px solid #2e3191",
        borderRadius: "3px",
        backgroundColor: "#2e3191",
        padding: "8px 30px",
        display: "inline-flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "16px",
        fontWeight: "600",
        fontStyle: "normal",
        textAlign: "center",
        color: "#fff",
        "&:hover": {
            borderColor: "#003fc2",
            backgroundColor: "#003fc2",
        },
    },
    btnArrow: {
        fontSize: "16px",
        marginLeft: "10px",
    },
    btnWhite: {
        textTransform: "inherit",
        border: "1px solid #2e3191",
        borderRadius: "3px",
        backgroundColor: "#e0e0e0",
        padding: "8px 30px",
        display: "inline-flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "16px",
        fontWeight: "600",
        fontStyle: "normal",
        textAlign: "center",
        color: "rgb(0 0 0 / 87%)",
        "&:hover": {
            borderColor: "#003fc2",
            backgroundColor: "#d5d5d5",
        },
    },
    btnArrowWhite: {
        fontSize: "16px",
        marginLeft: "10px",
    },
}));

const CourseButtonComponent = ({ selfPaced, setSelfPaced, subject, setOpen, color, arrow, type }) => {
    const classes = useStyles();
    return <>{type === 'submit' ? (
        <Button className={color && color === 'white' ? classes.btnWhite : classes.btn} type='submit' >
            {subject}
            {arrow && arrow ? <ArrowForwardIosIcon className={classes.btnArrow} /> : ''}
        </Button>
    ) : (
        <Button className={color && color === 'white' ? classes.btnWhite : classes.btn} onClick={() => {
            if (selfPaced) setSelfPaced(true);
            setOpen(true)
        }}>
            {subject}
            <ArrowForwardIosIcon className={classes.btnArrow} />
        </Button>)
    }</>
}
export default CourseButtonComponent
