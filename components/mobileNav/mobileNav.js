import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
// import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CancelPresentationRoundedIcon from '@material-ui/icons/CancelPresentationRounded';
import MenuIcon from '@material-ui/icons/Menu';
// import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import InputAdornment from '@material-ui/core/InputAdornment';
import { getAllCourses } from "../../apiCalls";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        height: '74px',
        overflow: 'hidden',
    },
    toggleBox: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'end',
        width: '100%',
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    category: {
        margin: " 10px 0px",
        textDecoration: "underline",
        fontSize: "14px",
        fontWeight: "600",
    },
    positionBox: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)'
    },
    searchBarResponsive: {
        width: '400px',
        [theme.breakpoints.down("sm")]: {
            width: '210px !important'
        },
    },
    iconCenter: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // padding: 0,
        marginBottom: '6px'
    },
}));

const MobileNav = () => {
    const classes = useStyles();
    const [state, setState] = React.useState(false);
    const [expanded, setExpanded] = React.useState(false);
    const [toggleSearch, setToggleSearch] = React.useState(false);
    const [totalCourses, setTotalCourses] = React.useState([]);

    const handleSearch = async (e) => {
        const allCourses = await getAllCourses({ search_string: e.target.value, limit: 5 });
        setTotalCourses(allCourses.final_obj);
    };

    const handleRedirect = async (e) => {
        setTimeout(async () => {
            const allCourses = await getAllCourses({ search_string: document.getElementsByName("searchStr")[0].value, limit: 5 });
            if (allCourses.final_obj.length === 1) window.location.href = `/${allCourses.final_obj[0].url_title}`;
        }, 1000);
    }

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState(open);
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
        >
            <Accordion
                expanded={expanded === "panel1"}
                style={{ boxShadow: "none" }}
                onChange={handleChange("panel1")}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <ListItem style={{ padding: 0 }} >
                        <ListItemIcon>
                            <AddCircleOutlineIcon />
                        </ListItemIcon>
                        <ListItemText primary="Courses" />
                    </ListItem>
                </AccordionSummary>
                <AccordionDetails
                    style={{ display: "flex", flexDirection: "column" }}
                >
                    <div className={classes.column}>
                        <p className={classes.category}>Cloud Computing</p>
                        <a href="https://tekslate.com/salesforce-training">Salesforce Training</a> <br />
                        <a href="https://tekslate.com/aws-training">AWS Training</a> <br />
                        <a href="https://tekslate.com/microsoft-azure-training">Azure Training</a> <br />
                        <a href="https://tekslate.com/informatica-cloud-training">Informatica Cloud Training</a> <br />
                        <a href="https://tekslate.com/netapp-training">NetApp Training</a> <br />
                        <a href="https://tekslate.com/openstack-training">OpenStack Training</a> <br />
                        <a href="https://tekslate.com/vmware-training">VMware Training</a> <br />
                    </div>
                    <Divider style={{ margin: "10px 0px" }} />
                    <div className={classes.column}>
                        <p className={classes.category}>Programming and Frameworks</p>
                        <a href="https://tekslate.com/mean-stack-training">MEAN Stack Training</a> <br />
                        <a href="https://tekslate.com/golang-training">Go Training</a> <br />
                        <a href="https://tekslate.com/kotlin-training">Kotlin Training</a> <br />
                        <a href="https://tekslate.com/labview-training">LabVIEW Training</a> <br />
                        <a href="https://tekslate.com/powerapps-training">PowerApps Training</a> <br />
                        <a href="https://tekslate.com/oracle-apex-training">Oracle Apex Training</a> <br />
                        <a href="https://tekslate.com/microservices-training">Microservices Training</a> <br />
                    </div>
                    <Divider style={{ margin: "10px 0px" }} />
                    <div className={classes.column}>
                        <p className={classes.category}>Big Data Analytics Courses</p>
                        <a href="https://tekslate.com/denodo-training">Denodo Training</a> <br />
                        <a href="https://tekslate.com/elasticsearch-training">Elasticsearch Training</a> <br />
                        <a href="https://tekslate.com/elk-stack-training">ELK Stack Training</a> <br />
                        <a href="https://tekslate.com/apache-spark-training">Apache Spark Training</a> <br />
                        <a href="https://tekslate.com/apache-spark-and-scala-training">Apache Scala Training</a> <br />
                        <a href="https://tekslate.com/splunk-training">Splunk Training</a> <br />
                        <a href="https://tekslate.com/apache-kafka-training">Apache Kafka Training</a> <br />
                    </div>
                    <Divider style={{ margin: "10px 0px" }} />
                    <div className={classes.column}>
                        <p className={classes.category}>ERP Courses</p>
                        <a href="https://tekslate.com/netsuite-training">NetSuite Technical Training</a> <br />
                        <a href="https://tekslate.com/netsuite-training">NetSuite Training</a> <br />
                        <a href="https://tekslate.com/peoplesoft-fscm-training">Peoplesoft FSCM Training</a> <br />
                        <a href="https://tekslate.com/microsoft-dynamics-365-training">Microsoft Dynamics 365 Training</a> <br />
                        <a href="https://tekslate.com/peoplesoft-hrms-training">PeopleSoft HRMS Training</a> <br />
                        <a href="https://tekslate.com/workday-training">Workday Training</a> <br />
                        <a href="https://tekslate.com/peoplesoft-financials-training">PeopleSoft Financials Training</a> <br />
                    </div>
                </AccordionDetails>
            </Accordion>

            <ListItem>
                <ListItemIcon>
                    <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText><a className={classes.subnav} target="_blank" href="/blog">
                    Blog
                </a> </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText><a
                    className={classes.subnav}
                    target="_blank"
                    href="/corporate-training"
                >
                    Corporate Training
                </a> </ListItemText>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText> <a
                    className={classes.subnav}
                    target="_blank"
                    href="/become-an-instructor"
                >
                    Become an Instructor
                </a></ListItemText>
            </ListItem>

        </div >
    );

    return (
        <div className={classes.root}>
            <div className={classes.iconCenter}>
                <MenuIcon onClick={toggleDrawer("right", true)} />
            </div>
            <Drawer anchor="right" open={state} onClose={toggleDrawer("right", false)}>
                {list("right")}
            </Drawer>
            {toggleSearch ? (
                <div className={classes.toggleBox}>
                    <div className={classes.positionBox} >
                        <Autocomplete
                            freeSolo
                            id="free-solo-2-demo"
                            disableClearable

                            options={totalCourses.map((option) => option.course)}
                            onClose={handleRedirect}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    placeholder="What do you want to learn"
                                    size="small"
                                    variant="outlined"
                                    onChange={handleSearch}
                                    name="searchStr"
                                    style={{ width: '258px' }}
                                    className={classes.searchBarResponsive}
                                    InputProps={{
                                        ...params.InputProps, type: 'search',
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SearchIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            )}
                        />
                    </div>
                    <div className={classes.iconCenter} style={{ marginTop: '4px' }}>
                        <CancelPresentationRoundedIcon onClick={() => setToggleSearch(false)} />
                    </div>
                </div>) :
                <div className={classes.toggleBox}>
                    <div className={classes.positionBox}>
                        <img
                            src="https://tekslateassets.s3.amazonaws.com/images/logo.svg"
                            height='50px' width='100px'
                        />
                    </div>
                    <div className={classes.iconCenter} style={{ marginTop: '4px' }}>
                        <SearchIcon onClick={() => setToggleSearch(true)} />
                    </div>
                </div>
            }
        </div>
    )
}

export default MobileNav;