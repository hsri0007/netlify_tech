import { Container } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Grid from "@material-ui/core/Grid";
import FlareIcon from "@material-ui/icons/Flare";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },

    section: {
        padding: '60px 0px'
    },

    mainhead: {
        fontSize: '28px',
        margin: '15px 0px',
    },

    icon: {
        marginBottom: '-4px',
        marginRight: '5px',
        color: '#959fb2',
    },

    detail: {
        fontSize: '14px',
        color: '#212121',
    },

    title: {
        fontSize: "32px",
        textAlign: "center",
        margin: "15px",
    },
    Category_title: {
        fontSize: "20px",
        fontWeight: "600",
        margin: "auto",
    },
    line: {
        border: "none",
        borderTop: "4px solid #ffcf00",
        width: "10%",
        margin: "0px auto 30px auto",
    },
    cardActions: {
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },

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
        marginTop: "50px",
        "&:hover": {
            borderColor: "#003fc2",
            backgroundColor: "#003fc2",
        },
    },

    btnArrow2: {
        fontSize: "16px",
        marginLeft: "10px",
        color: "white",
    },

    btnArrow: {
        fontSize: "16px",
        color: "#003292",
        margin: "auto",
    },

    titleIcon: {
        marginRight: "15px",
        fontSize: "20px",
    },

    categoryCard: {
        margin: "0",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        boxShadow: "0 2px 18px 0 rgb(0 0 0 / 8%)",
        border: "1px solid #e7e7e7",
        borderRadius: "3px",
        width: "100%",
        color: "unset !important",
        textDecoration: "none",
        padding: "25px",
    },

    ArrowBox: {
        margin: "auto",
        display: "flex",
        alignItems: "center",
    },

}));


const BestCourses = () => {
    const classes = useStyles();
    return (
        <div>
            <section className={classes.section}>
                <Container maxWidth="lg">
                    <h3 className={classes.title}>Industry Best Courses</h3>
                    <hr className={classes.line} />
                    <p style={{ fontSize: "16px", textAlign: "center" }}>The main area of focus of Tekslate is the productivity enhancement training.</p>
                    <Grid style={{ marginTop: "20px" }} container spacing={3}>
                        <Grid item lg={4} md={6} sm={12} xs={12}>
                            <a className={classes.categoryCard} href='/netsuite-training' target="_blank">
                                <Grid container spacing={3}>
                                    <Grid item lg={10} md={10} sm={10} xs={10}>
                                        <p className={classes.Category_title}>
                                            <FlareIcon className={classes.titleIcon} />
                                            NetSuite Training
                                        </p>
                                    </Grid>
                                    <Grid
                                        item
                                        className={classes.ArrowBox}
                                        lg={2}
                                        md={2}
                                        sm={2}
                                        xs={2}
                                    >
                                        <ArrowForwardIosIcon className={classes.btnArrow} />
                                    </Grid>
                                </Grid>
                            </a>
                        </Grid>
                        <Grid item lg={4} md={6} sm={12} xs={12}>
                            <a className={classes.categoryCard} href='/workday-training' target="_blank">
                                <Grid container spacing={3}>
                                    <Grid item lg={10} md={10} sm={10} xs={10}>
                                        <p className={classes.Category_title}>
                                            <FlareIcon className={classes.titleIcon} />
                                            Workday Training
                                        </p>
                                    </Grid>
                                    <Grid
                                        item
                                        className={classes.ArrowBox}
                                        lg={2}
                                        md={2}
                                        sm={2}
                                        xs={2}
                                    >
                                        <ArrowForwardIosIcon className={classes.btnArrow} />
                                    </Grid>
                                </Grid>
                            </a>
                        </Grid>
                        <Grid item lg={4} md={6} sm={12} xs={12}>
                            <a className={classes.categoryCard} href='/snowflake-training' target="_blank">
                                <Grid container spacing={3}>
                                    <Grid item lg={10} md={10} sm={10} xs={10}>
                                        <p className={classes.Category_title}>
                                            <FlareIcon className={classes.titleIcon} />
                                            SnowFlake Training
                                        </p>
                                    </Grid>
                                    <Grid
                                        item
                                        className={classes.ArrowBox}
                                        lg={2}
                                        md={2}
                                        sm={2}
                                        xs={2}
                                    >
                                        <ArrowForwardIosIcon className={classes.btnArrow} />
                                    </Grid>
                                </Grid>
                            </a>
                        </Grid>
                        <Grid item lg={4} md={6} sm={12} xs={12}>
                            <a className={classes.categoryCard} href='/okta-training' target="_blank">
                                <Grid container spacing={3}>
                                    <Grid item lg={10} md={10} sm={10} xs={10}>
                                        <p className={classes.Category_title}>
                                            <FlareIcon className={classes.titleIcon} />
                                            OKTA Training
                                        </p>
                                    </Grid>
                                    <Grid
                                        item
                                        className={classes.ArrowBox}
                                        lg={2}
                                        md={2}
                                        sm={2}
                                        xs={2}
                                    >
                                        <ArrowForwardIosIcon className={classes.btnArrow} />
                                    </Grid>
                                </Grid>
                            </a>
                        </Grid>
                        <Grid item lg={4} md={6} sm={12} xs={12}>
                            <a className={classes.categoryCard} href='/sitecore-training' target="_blank">
                                <Grid container spacing={3}>
                                    <Grid item lg={10} md={10} sm={10} xs={10}>
                                        <p className={classes.Category_title}>
                                            <FlareIcon className={classes.titleIcon} />
                                            SiteCore Training
                                        </p>
                                    </Grid>
                                    <Grid
                                        item
                                        className={classes.ArrowBox}
                                        lg={2}
                                        md={2}
                                        sm={2}
                                        xs={2}
                                    >
                                        <ArrowForwardIosIcon className={classes.btnArrow} />
                                    </Grid>
                                </Grid>
                            </a>
                        </Grid>
                        <Grid item lg={4} md={6} sm={12} xs={12}>
                            <a className={classes.categoryCard} href='/datastage-training' target="_blank">
                                <Grid container spacing={3}>
                                    <Grid item lg={10} md={10} sm={10} xs={10}>
                                        <p className={classes.Category_title}>
                                            <FlareIcon className={classes.titleIcon} />
                                            Datastage Training
                                        </p>
                                    </Grid>
                                    <Grid
                                        item
                                        className={classes.ArrowBox}
                                        lg={2}
                                        md={2}
                                        sm={2}
                                        xs={2}
                                    >
                                        <ArrowForwardIosIcon className={classes.btnArrow} />
                                    </Grid>
                                </Grid>
                            </a>
                        </Grid>
                    </Grid>

                </Container>
            </section>
        </div>
    )
}

export default BestCourses
