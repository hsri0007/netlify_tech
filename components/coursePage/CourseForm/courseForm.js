import React from 'react'
import HeadingsComponent from '../HeadingsComponent/HeadingsComponent';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import CourseButtonComponent from "../CourseButtonComponent/CourseButtonComponent";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { postEnquiry, getIPDetails } from '../../../apiCalls';
// import * as countryCodes from "country-codes-list";
import MuiPhoneNumber from "mui-phone-input-ssr";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

// const countryMap = countryCodes.customList(
//     "countryNameEn",
//     "{countryCode} +{countryCallingCode}"
// );

// const countryNamesMap = countryCodes.customList(
//     "countryCode",
//     "{countryNameEn}"
// );

const useStyles = makeStyles((theme) => ({
    root: {
        width: "65%",
        margin: "0 auto",
        padding: '4rem 0 2rem 0',
        [theme.breakpoints.down("md")]: {
            width: '80%'
        },
        [theme.breakpoints.down("sm")]: {
            width: '95%'
        },
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    inputDiv: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        // border: '1px solid red',
        [theme.breakpoints.down("sm")]: {
            flexDirection: 'column'
        },
    },
    firstInput: {
        margin: '0 1rem 1rem 0',
        [theme.breakpoints.down("sm")]: {
            margin: '0 0 1rem 0'
        },
    },
    secondInput: {},
    inputNumberDate: {
        display: 'grid',
        gridTemplateColumns: '51% 49%',
        [theme.breakpoints.down("sm")]: {
            gridTemplateColumns: '100%',
        },
    },
    dateCustomStyle: {
        marginTop: '-3px',
        [theme.breakpoints.down("sm")]: {
            margin: '0 0 1rem 0'
        },
    },
    spamText: {
        fontSize: '0.8rem', textAlign: 'center',
        // [theme.breakpoints.down("sm")]: {
        //     flexDirection: 'column'
        // },
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

const CourseForm = ({ data, subject }) => {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [code, setCode] = React.useState("IN +91");
    const [thankyouPopup, setThankyouPopup] = React.useState(false);

    const handleSelect = (e) => {
        setCode(e.target.value);
    };

    var course = data.overview.course.replace(' Training', '');

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        // var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        // var phoneRegex = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
        // if (!emailRegex.test(e.target.email.value)) {
        //     alert('Email Invalid');
        //     return;
        // }
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
        // const lname = e.target.lname.value;
        const country_code = code;
        const phone_number = e.target.phone.value;
        formValue.phone = phone_number;
        formValue.email = e.target.email.value;
        formValue.message = e.target.message.value;
        formValue.page_url = window.location.href;
        if (course) formValue.course = course;
        if (ipData?.country_name) formValue.country = ipData.country_name;
        else formValue.country = "India";
        if (subject) formValue.subject = subject + " on " + selectedDate.toDateString();
        else formValue.subject = "Course Enquiry";
        formValue.fullname = fname;
        if (ipData?.ip) formValue.ip = ipData.ip;
        else formValue.ip = '127.0.0.1';
        // console.log('**********this is formValue*************', formValue);
        await postEnquiry({ ...formValue });
        document.getElementById('contact-form').reset();
        setThankyouPopup(true);
        setTimeout(handleClose, 2000);
        // setThankyouPopup(false);
    }
    const handleClose = () => setThankyouPopup(false)

    return (
        <div className={classes.root}>
            <Container>
                <div style={{ textAlign: 'center', paddingBottom: '2rem' }}>
                    <HeadingsComponent first={`Join a Free ${data.overview.course}`} last='Demo Session' />
                    <p>
                        See if this course is a fit for you by joining us for an online info session. You’ll meet our team, get an overview of the curriculum and course objectives, and learn about the benefits of being a student at Tekslate
                    </p>
                </div>

                <div>
                    <form className={classes.formBox} onSubmit={submitHandler} id="contact-form">
                        <div className={classes.inputDiv}>
                            <TextField id="filled-basic" size='small' name="fname" label="Name" fullWidth variant="standard" className={classes.firstInput} />
                            <TextField id="filled-basic" size='small' type='email' name="email" label="Email" fullWidth variant="standard"
                                className={classes.secondInput} style={{ marginBottom: '1rem' }} />
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
                                {/* <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={code}
                                    onChange={handleSelect}
                                    defaultValue={10}
                                    style={{ marginBottom: '1rem' }}
                                >
                                    {Object.keys(countryMap).map((key) => (
                                        <MenuItem value={countryMap[key]}> {key}</MenuItem>
                                    ))}
                                </Select> */}
                                {/* </FormControl> */}
                                {/* <TextField id="filled-basic" size='small' name="phone" label="Phone" fullWidth variant="standard" className={classes.firstInput} /> */}
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
                            <CourseButtonComponent subject='Contact Us' type='submit' />
                            {/* <Button variant='contained' color='primary' type="submit">CONTACT US</Button> */}
                        </div>
                        <div className={classes.spamText}>
                            By providing us with your details, We wont spam your inbox.
                        </div>
                    </form>
                </div>
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

        </div>
    )
}

export default CourseForm
