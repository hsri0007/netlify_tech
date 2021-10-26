import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField, Modal, Backdrop, Fade } from "@material-ui/core";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CloseIcon from '@material-ui/icons/Close';
import { postEnquiry, getIPDetails } from '../../../apiCalls';
// import { Container, Button, TextField, MenuItem, Select } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
// import { postEnquiry, getIPDetails } from '../../../apiCalls';
// import * as countryCodes from "country-codes-list";
import MuiPhoneNumber from "mui-phone-input-ssr";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

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
        gridTemplateColumns: '100%',
        borderRadius: '4px',
        boxShadow: theme.shadows[5],
        [theme.breakpoints.down("sm")]: {
            gridTemplateColumns: 'auto',
        },
        '& > div': {
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

const DemoDatesModal = ({ course, value, handleClose, subject, thankyouPopup, setThankyouPopup, selfPaced }) => {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const submitHandler = async (e) => {
        e.preventDefault();
        var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        // var phoneRegex = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
        if (!emailRegex.test(e.target.email.value)) {
            alert('Email Invalid');
            return;
        }
        if (e.target.phone.value.length < 10) {
            alert('Phone number Invalid');
            return;
        }
        // if (!phoneRegex.test(e.target.phone.value)) {
        //     alert('Phone number Invalid');
        //     return;
        // }
        const ipData = await getIPDetails();
        // console.log('**********this is ipData*************', ipData);
        const formValue = {};
        // const fname = e.target.fname.value;
        // const lname = e.target.lname.value;
        formValue.email = e.target.email.value;
        formValue.name = e.target.name.value;
        formValue.phone = e.target.phone.value;
        formValue.message = e.target.message.value;
        formValue.page_url = window.location.href;
        if (selfPaced) formValue.selfPaced = true;
        if (course) formValue.course = course;
        if (ipData?.country_name) formValue.country = ipData.country_name;
        else formValue.country = "India";
        if (subject) formValue.subject = subject + ' on ' + selectedDate.toDateString();
        else formValue.subject = "Course Enquiry";
        formValue.fullname = '';
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
                        {!thankyouPopup && <div style={{ position: 'relative' }}>
                            <div className={classes.closebttn} onClick={handleClose}><CloseIcon /> </div>
                            <h3>Join us for a Free Demo</h3>
                            <p>Please feel free to reach out if you have any questions.</p>
                            <div>
                                <form className={classes.formBox} onSubmit={submitHandler} id="contact-form">
                                    <div className={classes.inputDiv}>
                                        <TextField id="filled-basic"
                                            type='text'
                                            size='small'
                                            name="name"
                                            label="Name"
                                            fullWidth
                                            variant="standard"
                                            className={classes.firstInput}
                                        />
                                    </div>
                                    <div className={classes.inputDiv}>
                                        <TextField id="filled-basic"
                                            type='email'
                                            size='small'
                                            name="email"
                                            label="Email"
                                            fullWidth
                                            variant="standard"
                                            className={classes.firstInput}
                                        />
                                    </div>
                                    <div className={classes.inputNumberDate}>
                                        <div style={{ display: 'flex' }}>
                                            {/* <FormControl className={classes.formControl}> */}
                                            <MuiPhoneNumber
                                                size='small'
                                                name="phone"
                                                label="Phone"
                                                fullWidth
                                                variant="standard"
                                                className={classes.firstInput}
                                                defaultCountry={"in"}
                                                countryCodeEditable={false}
                                            // onChange={handleOnChange}
                                            />
                                        </div>
                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                            <KeyboardDatePicker
                                                // disableToolbar
                                                // variant="inline"
                                                format="dd-MM-yyyy"
                                                margin="normal"
                                                // id="date-picker-dialog"
                                                // label="Date picker dialog"
                                                id="date-picker-inline"
                                                label="Select your demo date"
                                                fullWidth
                                                className={classes.dateCustomStyle}
                                                value={selectedDate}
                                                onChange={handleDateChange}
                                                KeyboardButtonProps={{
                                                    'aria-label': 'change date',
                                                }}
                                            />
                                        </MuiPickersUtilsProvider>
                                    </div>
                                    <div className={classes.inputDiv}>
                                        <TextField
                                            id="Message"
                                            label="Message"
                                            name="message"
                                            multiline
                                            size='small'
                                            rows={5}
                                            style={{ marginBottom: '1rem' }}
                                            // defaultValue="Default Value"
                                            variant="standard"
                                            fullWidth
                                        />
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'center', padding: '1rem 0' }}>
                                        <Button variant='contained' color='primary' type="submit">CONTACT US</Button>
                                    </div>
                                    <div className={classes.spamText}>
                                        By providing us with your details, We wont spam your inbox.
                                    </div>
                                </form>
                            </div>
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

export default DemoDatesModal
