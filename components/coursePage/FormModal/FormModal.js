import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Modal, Backdrop, Fade } from "@material-ui/core";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CloseIcon from '@material-ui/icons/Close';
import { postEnquiry, getIPDetails } from '../../../apiCalls';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CourseButtonComponent from '../CourseButtonComponent/CourseButtonComponent';
import MuiPhoneNumber from "mui-phone-input-ssr";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '720px',
        margin: '0 auto',
        [theme.breakpoints.down("sm")]: {
            width: '340px',
        },
    },
    paper: {
        background: '#fff',
        display: 'grid',
        gridTemplateColumns: '40% 60%',
        borderRadius: '4px',
        boxShadow: theme.shadows[5],
        [theme.breakpoints.down("sm")]: {
            gridTemplateColumns: 'auto',
        },
        '& > div:first-child': {
            padding: '1rem',
            background: '#f7faf7',
            borderRadius: '6px',
            [theme.breakpoints.down("sm")]: {
                display: 'none',
            },
            '& p': {
                display: 'flex',
                alignItems: 'center',
            }
        },
        '& > div:last-child': {
            position: 'relative',
            margin: '1rem'
        }
    },
    modalForm: {
        marginTop: '2.5rem'
    },
    closebttn: {
        position: 'absolute',
        right: 0,
        '&:hover': {
            cursor: 'pointer'
        }
    },
    inputDiv: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '1rem',
    },
    allInputStyle: {
        width: '220px',
        [theme.breakpoints.down("sm")]: {
            width: '100%',
        },
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

const FormModal = ({ value, handleClose, subject, thankyouPopup, setThankyouPopup, course, videoSub }) => {
    const classes = useStyles();
    const submitHandler = async (e) => {
        e.preventDefault();
        var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var phoneRegex = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
        if (!emailRegex.test(e.target.email.value)) {
            alert('Email Invalid');
            return;
        }
        if (!phoneRegex.test(e.target.phone.value)) {
            alert('Phone number Invalid');
            return;
        }
        const ipData = await getIPDetails();
        // console.log('**********this is ipData*************', ipData);
        const formValue = {};
        const fname = e.target.fname.value;
        const lname = e.target.lname.value;
        formValue.email = e.target.email.value;
        formValue.phone = e.target.phone.value;
        formValue.message = e.target.message.value;
        formValue.page_url = window.location.href;
        if (videoSub) formValue.videoSub = true;
        if (course) formValue.course = course;
        if (ipData?.country_name) formValue.country = ipData.country_name;
        else formValue.country = "India";
        if (subject) formValue.subject = subject;
        else formValue.subject = "Course Enquiry";
        formValue.fullname = fname + ' ' + lname;
        if (ipData?.ip) formValue.ip = ipData.ip;
        else formValue.ip = '127.0.0.1';
        await postEnquiry({ ...formValue });
        setThankyouPopup(true);
        setTimeout(handleClose, 2000);
    }

    return (
        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={value}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}>
                <Fade in={value}>
                    <div className={classes.paper}>
                        <div>
                            <h3>TekSlate offers world-class training solutions for your workforce upgrade.</h3>
                            <p><ChevronRightIcon style={{ color: '#2a32c5' }} /> Customised curriculum from expert trainers</p>
                            <p><ChevronRightIcon style={{ color: '#2a32c5' }} /> 100% practical approach</p>
                            <p><ChevronRightIcon style={{ color: '#2a32c5' }} /> On-demand support throughout the training</p>
                            {/* <div>
                                <img src={Learning} alt='learning' height="300px" width='auto' />
                            </div> */}
                        </div>
                        {!thankyouPopup && <div style={{ position: 'relative' }}>
                            <div className={classes.closebttn} onClick={handleClose}><CloseIcon /> </div>
                            <h3>Unleash the true potential of your team with us.</h3>
                            <p>Our learning advisor will come up with custom services to meet your need.</p>
                            <form className={classes.modalForm} onSubmit={submitHandler}>
                                <div className={classes.inputDiv}>
                                    <TextField id="outlined-basic" size='small' name="fname" label="First Name"
                                        className={classes.allInputStyle} variant="outlined" style={{ marginRight: '1rem' }} />
                                    <TextField id="outlined-basic" size='small' name="lname" label="Last Name" variant="outlined"
                                        className={classes.allInputStyle} />
                                </div>
                                <div className={classes.inputDiv}>
                                    <TextField id="outlined-basic" size='small' name="email" label="Email" variant="outlined"
                                        className={classes.allInputStyle}
                                        style={{ marginRight: '1rem' }} required />
                                    <MuiPhoneNumber
                                        size='small'
                                        name="phone"
                                        label="Phone"
                                        id="outlined-basic"
                                        variant="outlined"
                                        className={classes.allInputStyle}
                                        // className={classes.firstInput}
                                        defaultCountry={"in"}
                                        countryCodeEditable={false}
                                    // onChange={handleOnChange}
                                    />
                                    {/* <TextField id="outlined-basic" size='small' name="phone" label="Phone" variant="outlined" /> */}
                                </div>
                                <div className={classes.inputDiv}>
                                    <TextField
                                        id="Message"
                                        label="Message"
                                        name="message"
                                        multiline
                                        size='small'
                                        rows={5}
                                        // defaultValue="Default Value"
                                        variant="outlined"
                                        fullWidth
                                    />
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <CourseButtonComponent subject='Get Custom Quote' type={'submit'} arrow={true} />
                                    {/* <Button type="submit" variant='contained' color='primary' endIcon={<ChevronRightIcon />}>Get Custom Quote</Button> */}
                                </div>
                            </form>
                        </div>}
                        {thankyouPopup && <div className={classes.thanksbox}>
                            <CheckCircleOutlineIcon className={classes.checkicon} />
                            <p className={classes.thanksText}>Thanks for choosing us, our expert will call u soon.</p>
                        </div>}
                    </div>

                </Fade>
            </Modal>
        </>
    )
}

export default FormModal
