import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import ComputerIcon from '@material-ui/icons/Computer';
// import { Box, Button, TextField } from "@material-ui/core";
import CourseButtonComponent from "../CourseButtonComponent/CourseButtonComponent";
import HeadingsComponent from "../HeadingsComponent/HeadingsComponent";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import DemoDatesModal from '../FormModal/DemoDatesModal';
const { format } = require('date-fns');
// import { getIPDetails } from '../../../apiCalls';
import * as countryCodes from "country-codes-list";

const countryMap = countryCodes.customList(
    "countryNameEn",
    "{countryCode} +{countryCallingCode}"
);


const useStyles = makeStyles((theme) => ({
    section: {
        padding: "40px 0",
    },
    sideElement: {
        textAlign: "center",
        margin: 0,
        fontSize: "20px",
    },
    headtext: {
        marginTop: "0px",
        color: "#7b7b7b",
        fontWeight: "600",
        [theme.breakpoints.down("sm")]: {
            fontSize: "14px",
        },
    },
    subtext: {
        marginBottom: "0px",
        fontSize: "18px",
        fontWeight: "600",
        color: "#fc3d39",
    },
    text_justify: {
        textAlign: "justify",
    },
    trainingHeading: {
        textAlign: 'center',
        '& p': {
            width: '50%', margin: '0 auto',
            [theme.breakpoints.down('md')]: {
                width: '90%'
            }
        }
    },
    tableContent: {
        display: 'grid',
        gridTemplateColumns: '21% 36% 36%',
        width: '85%',
        margin: '0 auto',
        paddingBottom: '3rem',
        gridColumnGap: '1rem',
        [theme.breakpoints.down("md")]: {
            gridTemplateColumns: '50% 50%',
        },
        [theme.breakpoints.down("sm")]: {
            gridTemplateColumns: '100%',
        },
        '& table': {
            width: '100%',
            marginTop: "2rem",
        },
        '& td': {
            padding: '20px 13px',
            '& h2': {
                margin: 0,
                fontSize: '1rem'
            },
            '& p': {
                margin: 0
            }
        },
    },
    tableHeadings: {
        display: 'block',
        [theme.breakpoints.down("md")]: {
            display: 'none'
        },
    },
    specialTables: {
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        padding: '0.4rem',
        '& td': {
            fontWeight: 'bold',
            borderBottom: '1px solid #dcdbdb'
        }
    },
    firstTD: {
        display: 'flex',
        justifyContent: 'center',
        minHeight: '45px'
    },
    demoDatesTD: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.9rem 10px',
        height: '79px'
    },
    trainingDates: {
        display: 'grid',
        gridTemplateColumns: 'auto auto auto',
        justifyContent: 'space-evenly',
        padding: '0 4rem',
        [theme.breakpoints.down("md")]: {
            gridTemplateColumns: 'auto auto',
            justifyContent: 'space-around',
        },
        [theme.breakpoints.down("xs")]: {
            gridTemplateColumns: 'auto',
            padding: 0,
        },
        '& > div': {
            position: 'relative',
            marginBottom: '1.5rem',
            padding: '3rem 3rem',
            borderRadius: '8px',
            background: '#e0e0e0',
            boxShadow: '0 2px 8px 0 rgb(0 0 0 / 25%)'
        }
    },
    timeRibbons: {
        position: 'absolute',
        top: 0,
        left: 0,
        padding: '0.5rem 1.5rem 0.5rem 0.5rem',
        background: 'black',
        borderTopLeftRadius: '8px',
        color: 'white',
        clipPath: 'polygon(100% 0, 83% 51%, 100% 99%, 0 100%, 0 0)'
    },
    inputDiv: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '1rem',
    },
    formControl: {
        width: '100px'
    },
    singleDate: {
        cursor: 'pointer'
    },
    upcomingRoot: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '80%',
        margin: '0 auto',
        padding: '2rem 0'
    },
    submitbttnsRow: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '22.4px'
    }
}));

export default function TrainingOptions({ data }) {
    const classes = useStyles();

    const [time, setTime] = React.useState('');
    const [demoDates, setDemoDates] = React.useState(data.demo_dates);
    const [code, setCode] = React.useState("IN +91");
    const [selfPaced, setSelfPaced] = React.useState(false);

    const handleSelect = (e) => {
        setCode(e.target.value);
        // setTime()
        console.log(e.target.value, 'hello')
    };

    const [open, setOpen] = React.useState(false);
    const [thankyouPopup, setThankyouPopup] = React.useState(false);
    var course = data.overview.course.replace(' Training', '');

    const handleClose = () => {
        setOpen(false);
        setThankyouPopup(false);
        setSelfPaced(false);
    };
    return (
        <div id="Training_options">
            <section className={classes.section}>
                <Container>
                    <div className={classes.trainingHeading}>
                        <HeadingsComponent first='Training' last='Options' />
                        <h2 style={{ marginTop: '9px' }}>Different individuals. Different upgrade goals. Different modes of learning.</h2>
                        <p>We got solutions for everyone looking for an AWS Architect course. Opt in for your convenient upgrade option, and we will guide you through. </p>
                    </div>
                    <div className={classes.tableContent}>
                        <table className={classes.tableHeadings}>
                            <tr>
                                <td className={classes.firstTD} style={{ padding: '2.4rem 0' }}>
                                </td></tr>
                            <tr><td>Duration</td></tr>
                            <tr><td>One-on-one Session	</td></tr>
                            <tr><td>Support</td></tr>
                            <tr><td>Resources</td></tr>
                            <tr><td style={{ height: '79px' }}>Time</td></tr>
                            <tr><td>Fee</td></tr>
                        </table>
                        <div>
                            <table className={classes.specialTables}>
                                <tr>
                                    <td className={classes.firstTD}>
                                        <div style={{ paddingRight: '1rem' }}>
                                            <ComputerIcon />
                                        </div>
                                        <div style={{ marginTop: '0.2rem' }}>
                                            <h2>Live Online.</h2>
                                        </div>
                                    </td>
                                </tr>
                                <tr><td>{data.overview.duration} Hours</td></tr>
                                <tr><td>Yes</td></tr>
                                <tr><td>24x7</td></tr>
                                <tr><td>Additional tips from the trainer</td></tr>
                                <tr>
                                    <td className={classes.demoDatesTD}>
                                        {demoDates && demoDates.length > 2 ? (
                                            demoDates.filter((c, i) => i < 2).map(val => {
                                                const date = new Date(val.demo_date);
                                                return <p style={{ marginBottom: '0.3rem' }}>{format(date, 'dd MMMM yyyy, hh:mm a')}</p>
                                            })
                                        ) : <p>At your convenience</p>}
                                    </td>
                                </tr>
                                {data.offers !== null && data.offers?.selling_price !== 0 && <tr><td style={{ border: 0 }}>₹{data.offers.selling_price}</td></tr>}
                                {(data.offers === null || data.offers?.selling_price === 0) && <tr><td style={{ border: 0 }}>&nbsp;</td></tr>}
                            </table>
                            <div className={classes.submitbttnsRow}>
                                <CourseButtonComponent setSelfPaced={setSelfPaced} selfPaced={false} subject='Register Now' setOpen={setOpen} arrow={false} />
                            </div>
                        </div>
                        <div>
                            <table className={classes.specialTables}>
                                <tr>
                                    <td className={classes.firstTD}>
                                        <div style={{ paddingRight: '1rem' }}><OndemandVideoIcon /></div>
                                        <div style={{ marginTop: '0.2rem' }}>
                                            <h2>Self-Paced</h2>
                                        </div>
                                    </td>
                                </tr>
                                <tr><td>{data.overview.duration} Hours</td></tr>
                                <tr><td>No</td></tr>
                                <tr><td>Weekdays & Working Hours</td></tr>
                                <tr><td>Accessible through LMS </td></tr>
                                <tr><td style={{ height: '79px' }}>At your convenience</td></tr>
                                {data.offers !== null && data.offers?.selling_price_self_paced !== 0 && <tr><td style={{ border: 0 }}>₹{data.offers.selling_price_self_paced}</td></tr>}
                                {(data.offers === null || data.offers?.selling_price_self_paced === 0) && <tr><td style={{ border: 0 }}>&nbsp;</td></tr>}
                            </table>
                            <div className={classes.submitbttnsRow}>
                                {(data.offers === null || data.offers?.selling_price_self_paced === 0) && <CourseButtonComponent selfPaced={true} setSelfPaced={setSelfPaced} subject='Get Pricing' setOpen={setOpen} arrow={false} />
                                }
                                {data.offers !== null && data.offers?.selling_price_self_paced !== 0 && <CourseButtonComponent selfPaced={true} setSelfPaced={setSelfPaced} subject='Register Now' setOpen={setOpen} arrow={false} />
                                }
                            </div>
                        </div>
                    </div>
                </Container>
                {demoDates.length > 0 ? (
                    <Container>
                        <div className={classes.upcomingRoot}>
                            <h2>{data.overview.course} Upcoming Batches</h2>
                            {/* <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Country</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={code}
                                onChange={handleSelect}
                                defaultValue={code}
                                style={{ marginBottom: '1rem' }}
                            >
                                {Object.keys(countryMap).map((key, value) => (
                                    <MenuItem value={countryMap[key]}> {key}</MenuItem>
                                ))} */}
                            {/* {Object.keys(countryMap).map(function (key) {
                                    return <MenuItem value={key}>{countryMap[key]}</MenuItem>
                                })} */}
                            {/* </Select>
                        </FormControl> */}
                        </div>
                        <div className={classes.trainingDates}>
                            {demoDates.map((c, i) => (
                                <div className={classes.singleDate} onClick={() => setOpen(true)}>
                                    <div className={classes.timeRibbons}>
                                        {c.batch_type}
                                    </div>
                                    <div style={{ paddingBottom: '0.8rem' }}>{format(new Date(c.demo_date), 'dd MMMM yyyy')} to {addMonthDate(c.demo_date)}</div>
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#424242', fontSize: '0.9rem' }}>
                                        <div style={{ paddingTop: '4px' }}><AccessTimeIcon /></div>
                                        <div style={{ marginLeft: '0.5rem' }}>
                                            {format(new Date(c.demo_date), 'hh:mm a')}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div style={{ padding: '1rem' }}>
                                <img src='https://tekslateassets.s3.amazonaws.com/images/calendar.png' alt='calendar tekslate' height="100px" width='100px' />
                            </div>
                            <div>
                                <p>Schedules Doesn't Suit You ?</p>
                                <p>
                                    Our Team can set up a batch at your convinient time.
                                </p>
                                <div>
                                    <CourseButtonComponent subject='Let Us Know' setOpen={setOpen} arrow={false} />
                                </div>
                            </div>
                        </div>


                    </Container>
                ) : ''}
                <DemoDatesModal selfPaced={selfPaced} course={course} value={open} handleClose={handleClose} subject={"Demo Session"} thankyouPopup={thankyouPopup} setThankyouPopup={setThankyouPopup} />
            </section>
        </div >
    );
}

function addMonthDate(data) {
    let date = new Date(data);
    let newDate = date.setMonth(date.getMonth() + 1)
    return format(new Date(newDate), 'dd MMMM yyyy')
}

// let date = new Date;
// aryIannaTimeZones.forEach((timeZone) => {

//   let strTime = date.toLocaleString("en-US", {
//     timeZone: `${timeZone}`
//   });
//   console.log(timeZone, strTime);
// });