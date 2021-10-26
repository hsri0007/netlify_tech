import { Container, Button } from '@material-ui/core';
import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { postEnquiry, getIPDetails } from '../../apiCalls';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import MuiPhoneNumber from "mui-phone-input-ssr";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    maintext: {
        color: ' #fff',
        fontSize: '34px',
        fontWeight: '500',
        margin: 'auto',
        padding: '30px 0px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '24px',
        },
    },

    bannerbg: {
        background: '#101d42',
        padding: "60px 0px",
        display: 'flex',
        alignItems: 'center'
    },
    input: {
        background: 'white',
        color: 'black',
        width: '100%',
        borderRadius: '3px',
        div: {
            background: 'white !important',
            padding: '15px !important',
            borderRadius: '5px !important',
            color: 'black !important',
        }
    },

    textarea: {
        background: 'white',
        color: 'black',
        width: '100%',
        borderRadius: '3px',
        // height: '80px',
        overflow: 'hidden',
        padding: '10px',
        fontSize: '16px',
        fontFamily: 'inherit',
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
        float: "right",
        "&:hover": {
            borderColor: "#003fc2",
            backgroundColor: "#003fc2",
        },
    },

    btnArrow: {
        fontSize: "16px",
        marginLeft: "10px"
    },

    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        // border: '2px solid #000',
        borderRadius: '6px',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    thanksbox: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
    },


    checkicon: {
        fontSize: "100px",
        color: "#000",
    },


    thanksText: {
        fontWeight: "600",
        color: "#000",
        fontSize: "18px",
    }
}));


const ContactForm = ({ subject }) => {
    const [thankyouPopup, setThankyouPopup] = React.useState(false);

    const classes = useStyles();
    const submitHandler = async (e) => {
        e.preventDefault();
        var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        // var phoneRegex = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
        if (!emailRegex.test(e.target.email.value)) {
            alert('Email Invalid');
            return;
        }
        // if (!phoneRegex.test(e.target.phone.value)) {
        //     alert('Phone number Invalid');
        //     return;
        // }
        if (e.target.phone.value.length < 10) {
            alert('Phone number Invalid');
            return;
        }
        const ipData = await getIPDetails();
        const formValue = {};
        const fname = e.target.fname.value;
        // const phone_number = e.target.phone.value;
        // const lname = e.target.lname.value;
        formValue.email = e.target.email.value;
        // formValue.phone = "";
        formValue.phone = e.target.phone.value;
        formValue.message = e.target.message.value;
        formValue.page_url = window.location.href;
        if (ipData?.ip) formValue.country = ipData.country_name;
        else formValue.country = "India";
        if (subject) formValue.subject = subject;
        else formValue.subject = "Course Enquiry";
        formValue.fullname = fname;
        if (ipData?.ip) formValue.ip = ipData.ip;
        else formValue.ip = '127.0.0.1';
        console.log('**********this is formValue*************', formValue);
        await postEnquiry({ ...formValue });
        document.getElementById('contact-form').reset();
        // document.getElementsByName('phone').value = undefined;
        // e.target.phone.value = undefined;
        // console.log(numberInput.current);
        setThankyouPopup(true);
        setTimeout(handleClose, 2000);
    }
    const handleClose = () => setThankyouPopup(false)

    return (
        <div>
            <section className={classes.bannerbg}>
                <Container maxWidth="lg">
                    <Grid container spacing={3}>
                        <Grid style={{ margin: 'auto' }} item lg={6} md={6} sm={12} xs={12}>
                            <h2 className={classes.maintext}>Have questions about Tekslate?
                                Connect with us.</h2>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <form className={classes.root} noValidate autoComplete="off" onSubmit={submitHandler} id="contact-form">
                                <Grid container spacing={3}>
                                    <Grid item lg={6} md={6} sm={12} xs={12}>
                                        <TextField
                                            className={classes.input}
                                            id="filled-textarea"
                                            label="First Name"
                                            name="fname"
                                            multiline
                                            variant="filled"
                                        />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={12} xs={12}>
                                        {/* <TextField
                                            className={classes.input}
                                            id="filled-textarea"
                                            label="Last Name"
                                            name="lname"
                                            multiline
                                            variant="filled"
                                        /> */}
                                        <MuiPhoneNumber
                                            size='normal'
                                            name="phone"
                                            label="Phone"
                                            fullWidth
                                            id='phone'
                                            variant="filled"
                                            className={classes.input}
                                            defaultCountry={"in"}
                                            countryCodeEditable={false}
                                        // onChange={handleOnChange}
                                        />
                                    </Grid>
                                    <Grid item lg={12} md={12} sm={12} xs={12}>
                                        <TextField
                                            className={classes.input}
                                            id="filled-textarea"
                                            label="Email"
                                            name="email"
                                            multiline
                                            variant="filled"
                                        />
                                    </Grid>
                                    <Grid item lg={12} md={12} sm={12} xs={12}>
                                        <TextareaAutosize className={classes.textarea} name="message" aria-label="minimum height" rowsMin="3" placeholder="Message" />;
                                    </Grid>
                                    <Grid item lg={12} md={12} sm={12} xs={12}>
                                        <Button className={classes.btn} type="submit" >Submit <ArrowForwardIosIcon className={classes.btnArrow} /></Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid>
                    </Grid>
                </Container>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={thankyouPopup}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={thankyouPopup}>
                        <div className={classes.paper}>
                            <div className={classes.thanksbox}>
                                <CheckCircleOutlineIcon className={classes.checkicon} />
                                <p className={classes.thanksText}>Thanks for choosing us, our expert will call u soon.</p>
                            </div>
                        </div>
                    </Fade>
                </Modal>
            </section>
        </div>
    )
}

export default ContactForm
