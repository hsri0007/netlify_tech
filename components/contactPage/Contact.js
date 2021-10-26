import { Container } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PinDropIcon from '@material-ui/icons/PinDrop';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';

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

    line: {
        border:"none",
        margin: '0px',
        borderTop: "4px solid #ffcf00",
        width: '10%',
    },

    country:{
        display: "flex",
        alignItems: "flex-end",
    },
}));


const Contact = () => {
    const classes = useStyles();
    return (
        <div>
            <section className={classes.section}>
                <Container maxWidth="md">

                    <Grid container spacing={3}>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <h3 className={classes.mainhead}>Our Locations</h3>
                            <hr className={classes.line} />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <div className={classes.country}>
                                <img style={{ width: "300px", height: "120px" }} src="https://tekslateassets.s3.amazonaws.com/images/usa.svg" />
                            </div>
                            <h4>USA</h4>
                            <p className={classes.detail}><PinDropIcon className={classes.icon} /> 3722 Windmill Creek Dr Richmond, TX 77407, USA</p>
                            <p className={classes.detail}><PhoneIcon className={classes.icon} /> +1 930 200 4823</p>
                            <p className={classes.detail}><MailIcon className={classes.icon} /> info@tekslate.com</p>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <div className={classes.country}>
                                <img style={{ width: "300px", height: "120px" }} src="https://tekslateassets.s3.amazonaws.com/images/india.svg" />
                            </div>
                            <h4>India</h4>
                            <p className={classes.detail}><PinDropIcon className={classes.icon} /> #677, 1st Floor, Suite No.506, 27th Main, 13th Cross HSR Layout, Sector 1 Bangalore - 560102</p>
                            <p className={classes.detail}><PhoneIcon className={classes.icon} /> +91 90529 43388</p>
                            <p className={classes.detail}><MailIcon className={classes.icon} /> info@tekslate.com</p>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </div>
    )
}

export default Contact
