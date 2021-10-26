import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { useTheme } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    "ul": {
        margin: "0",
        padding: "0",
        border: "0",
        fontSize: "100%",
        font: "inherit",
        verticalAlign: "baseline",
        listStyle: "none"
    },


    container: {
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        flexDirection: "row",
        width: "100%"
    },
    footer: {
        position: "relative",
        padding: "60px 0px",
        backgroundColor: "rgb(24, 22, 22)",
        display: "flex",
        flexWrap: "wrap",
        color: "white",
        [theme.breakpoints.down('sm')]: {
            textAlign:"center",
          },
    },

    linefooter: {
        borderBottom: "0.5px solid #ffffff4a",
        width: "100%",
        margin: "20px 0px",
    },

    upper: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        "@media (max-width: 600px)": {
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between"
        }
    },
    footerElements: {
        color: "white",
        wordWrap: "wrap",
        '& ul': {
            listStyle: "none",
            paddingTop: "20px"
        },
        '& ul li': {
            padding: "14px 0px"
        },
        '& ul li a': {
            textDecoration: "none",
            color: "rgb(161, 161, 160)"
        }
    },
    footerElementsContent: {
        fontSize: "14px",
        fontWeight: "400",
        color: "rgba(255,255,255,0.5)",
        textDecoration: "none",
    },
    footerElementsTitle: {
        fontSize: "16px",
        fontWeight: "500",
    },

    list1: {
        listStyle: "none",
        paddingLeft: "0px",
    },

    list2: {
        listStyle: "none",
        padding: "0px",
        display: "flex",
        [theme.breakpoints.down('sm')]: {
            justifyContent: "center",
          },
    },

    social_li: {
        margin: "0px 20px 0px 0px",
    },

    mid: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        paddingTop: "15px"
    },
    midTitle: {
        color: "white",
        paddingTop: "12px",
        borderBottom: "4px solid gray",
        fontSize: "17px"
    },
    midElements: {
        display: "flex",
        padding: "5px"
    },
    midLabels: {
        padding: "12px",
        '& a': {
            textDecoration: "none",
            color: "rgb(161, 161, 160)"
        }
    },
    midCopyright: {
        fontSize: "16px",
        color: "rgb(223, 219, 219)",
        borderTop: "1px solid gray",
        paddingTop: "15px",
        width: "60%",
        textAlign:"center",
    },
    midDisclaimer: {
        fontSize: "14px",
        paddingTop: "25px",
        color: "rgb(161, 161, 160)"
    }
}));

function footerComponent() {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Container>
                <Grid container spacing={3}>
                    <Grid item lg={3} md={6} sm={12} xs={12}>
                        <div>
                            <p className={classes.footerElementsTitle}>Social</p>
                            <ul className={classes.list2}>
                                <li className={classes.social_li}>
                                    <a target="_blank" href="https://www.facebook.com/tekslate/" className={classes.footerElementsContent}>
                                        <FacebookIcon />
                                    </a>
                                </li>
                                <li className={classes.social_li}>
                                    <a target="_blank" href="https://twitter.com/tekslatetutor" className={classes.footerElementsContent}>
                                        <TwitterIcon />
                                    </a>
                                </li>
                            </ul>
                            <ul className={classes.list2}>
                                <li className={classes.social_li}>
                                    <a target="_blank" href="https://www.linkedin.com/company/tekslate/about/" className={classes.footerElementsContent}>
                                        <LinkedInIcon/>
                                    </a>
                                </li>
                                <li className={classes.social_li}>
                                    <a target="_blank" href="https://www.instagram.com/tekslate/" className={classes.footerElementsContent}>
                                        <InstagramIcon />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item lg={3} md={6} sm={12} xs={12}>
                        <div>
                            <p className={classes.footerElementsTitle}>For Businesses</p>
                            <ul className={classes.list1}>
                                <li><a target="_blank" href="/corporate-training" className={classes.footerElementsContent}>Corporate Training</a></li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item lg={3} md={6} sm={12} xs={12}>
                        <div>
                            <p className={classes.footerElementsTitle}>Work with us</p>
                            <ul className={classes.list1}>
                                <li><a target="_blank" href="/become-an-instructor" className={classes.footerElementsContent}>Become and instructor</a></li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item lg={3} md={6} sm={12} xs={12}>
                        <div>
                            <p className={classes.footerElementsTitle}>Discover</p>
                            <ul className={classes.list1}>
                                <li><a target="_blank" href="/blog" className={classes.footerElementsContent}>Blog</a></li>
                            </ul>
                        </div>
                    </Grid>
                </Grid>

                <div className={classes.linefooter} />
                <div>
                    <p className={classes.footerElementsTitle}>Trending Course Categories</p>
                    <div>
                        <a target="_blank"  className={classes.footerElementsContent}>Cloud Computing Courses<span> | </span></a>
                        <a target="_blank"  className={classes.footerElementsContent}>Business Intelligence and Analytics Courses<span> | </span></a>
                        <a target="_blank"  className={classes.footerElementsContent}>Programming and Frameworks Courses<span> | </span></a>
                        <a target="_blank"  className={classes.footerElementsContent}>Project Management and Methodologies Courses<span> | </span></a>
                        <a target="_blank"  className={classes.footerElementsContent}>Cyber Security and SIEM Courses<span> | </span></a>
                        <a target="_blank"  className={classes.footerElementsContent}>Software Automation Testing Courses<span> | </span></a>
                        <a target="_blank"  className={classes.footerElementsContent}>Containerization Courses<span> | </span></a>
                        <a target="_blank"  className={classes.footerElementsContent}>Business Process Management Courses<span> | </span></a>
                        <a target="_blank"  className={classes.footerElementsContent}>SAP Courses</a>
                        <a target="_blank"  className={classes.footerElementsContent}>SAS Courses</a>
                    </div>
                </div>

                <div>
                    <p className={classes.footerElementsTitle}>Trending Courses</p>
                    <div>
                        <a target="_blank" href="/snowflake-training" className={classes.footerElementsContent}>Snowflake Training<span> | </span></a>
                        <a target="_blank" href="/informatica-training" className={classes.footerElementsContent}>Informatica Training<span> | </span></a>
                        <a target="_blank" href="/looker-training" className={classes.footerElementsContent}>Looker Training<span> | </span></a>
                        <a target="_blank" href="/uipath-training" className={classes.footerElementsContent}>Uipath Training<span> | </span></a>
                        <a target="_blank" href="/okta-training" className={classes.footerElementsContent}>Okta Training<span> | </span></a>
                        <a target="_blank" href="/commvault-training" className={classes.footerElementsContent}>Commvault Training<span> | </span></a>
                        <a target="_blank" href="/appian-training" className={classes.footerElementsContent}>Appian Training<span> | </span></a>
                        <a target="_blank" href="/apttus-training" className={classes.footerElementsContent}>Apttus Trainingg<span> | </span></a>
                        <a target="_blank" href="/tosca-training" className={classes.footerElementsContent}>Tosca Training</a>
                    </div>
                </div>

                <div>
                    <p className={classes.footerElementsTitle}>Popular Courses</p>
                    <div>
                        <a target="_blank" href="/workday-training" className={classes.footerElementsContent}>Workday Training<span> | </span></a>
                        <a target="_blank" href="/maximo-training" className={classes.footerElementsContent}>Maximo Training<span> | </span></a>
                        <a target="_blank" href="/salesforce-training" className={classes.footerElementsContent}>Salesforce Training<span> | </span></a>
                        <a target="_blank" href="/servicenow-training" className={classes.footerElementsContent}>ServiceNow Training<span> | </span></a>
                        <a target="_blank" href="/cyberark-training" className={classes.footerElementsContent}>CyberArk Training<span> | </span></a>
                        <a target="_blank" href="/aws-training" className={classes.footerElementsContent}>AWS Training<span> | </span></a>
                        <a target="_blank" href="/agileagile-training" className={classes.footerElementsContent}>Agile Training<span> | </span></a>
                        <a target="_blank" href="/arcsight-training" className={classes.footerElementsContent}>Arcsight Training<span> | </span></a>
                        <a target="_blank" href="/power-bi-training" className={classes.footerElementsContent}>Power BI Training</a>
                    </div>
                </div>
                <div className={classes.mid}>
                    <p className={classes.midTitle}>Company</p>
                    <div className={classes.midElements}>
                        <div className={classes.midLabels}><a target="_blank" href="/about" className={classes.footerElementsContent}>About Us</a></div>
                        <div className={classes.midLabels}><a target="_blank" href="/contact" className={classes.footerElementsContent}>Contact Us</a></div>
                        <div className={classes.midLabels}><a target="_blank" href="/disclaimer" className={classes.footerElementsContent}>Refund Policy</a></div>
                        <div className={classes.midLabels}><a target="_blank" href="/reviews" className={classes.footerElementsContent}>Reviews</a></div>
                    </div>
                    <p className={classes.midCopyright}>Copyright © 2021 <a target="_blank" style={{color:"white", textDecoration:"none"}} target="_blank" href="https://tekslate.com/" >&nbsp;Tekslate</a>. All Rights Reserved</p>
                    <p className={classes.midDisclaimer}>Disclaimer: The certification names and logos are the trademarks of their respective owners.</p>
                </div>


                {/* <div className={classes.container}>
                    <div className={classes.upper}>
                        <div className={classes.footerElements}>
                            <h2 className={classes.footerElementsTitle}>Trending Course Categories</h2>
                            <ul>
                                <li><a target="_blank" href="#" className={classes.footerElementsContent}>Business Intelligence and Analytics Courses</a></li>
                                <li><a target="_blank" href="#" className={classes.footerElementsContent}>Cloud Computing Courses</a></li>
                                <li><a target="_blank" href="#" className={classes.footerElementsContent}>Programming and Frameworks Courses</a></li>
                                <li><a target="_blank" href="#" className={classes.footerElementsContent}>Customer Relationship Mangement Courses</a></li>
                                <li><a target="_blank" href="#" className={classes.footerElementsContent}>Database Mangement and Adminstration Courses</a></li>
                                <li><a target="_blank" href="#" className={classes.footerElementsContent}>Business Process Mangement Courses</a></li>
                                <li><a target="_blank" href="#" className={classes.footerElementsContent}>Software and Automation Testing Courses</a></li>
                                <li><a target="_blank" href="#" className={classes.footerElementsContent}>IT Service Mangement Courses</a></li>
                                <li><a target="_blank" href="#" className={classes.footerElementsContent}>RPA Certification Courses</a></li>
                            </ul>
                        </div>
                         <div className={classes.footerElements}>
                         <h2 className={classes.footerElementsTitle}>Trending Course</h2>
                         <ul>
                                <li><a target="_blank" href="#" className={classes.footerElementsContent}>Power Bi Training</a></li>
                                <li><a target="_blank" href="#" className={classes.footerElementsContent}>Google Cloud Training</a></li>
                                <li><a target="_blank" href="#" className={classes.footerElementsContent}>Salesforce Training</a></li>
                                <li><a target="_blank" href="#" className={classes.footerElementsContent}>Oracle DBA Training</a></li>
                                <li><a target="_blank" href="#" className={classes.footerElementsContent}>Informatice Training</a></li>
                                <li><a target="_blank" href="#" className={classes.footerElementsContent}>Snowflake Training</a></li>
                                <li><a target="_blank" href="#" className={classes.footerElementsContent}>Jira Training</a></li>
                                <li><a target="_blank" href="#" className={classes.footerElementsContent}>Python Training</a></li>
                                <li><a target="_blank" href="#" className={classes.footerElementsContent}>Service Now Training</a></li>
                            </ul>
                        </div>
                         <div className={classes.footerElements}>
                         <h2 className={classes.footerElementsTitle}>Popular Course</h2>
                         <ul>
                                <li><a target="_blank" href="#" className={classes.footerElementsContent}>Agile Training</a></li>
                                <li><a target="_blank" href="#" className={classes.footerElementsContent}>ArcSight Training</a></li>
                                <li><a target="_blank" href="#" className={classes.footerElementsContent}>CyberArk Training</a></li>
                                <li><a target="_blank" href="#" className={classes.footerElementsContent}>Workday Training</a></li>
                                <li><a target="_blank" href="#" className={classes.footerElementsContent}>Locker Training</a></li>
                                <li><a target="_blank" href="#" className={classes.footerElementsContent}>AWS Training</a></li>
                                <li><a target="_blank" href="#" className={classes.footerElementsContent}>Alteryx Training</a></li>
                                <li><a target="_blank" href="#" className={classes.footerElementsContent}>Powershell Training</a></li>
                                <li><a target="_blank" href="#" className={classes.footerElementsContent}>UiPath Training</a></li>
                            </ul>
                        </div>
                         <div className={classes.footerElements}>
                            <div>
                            <div>
                                <h2 className={classes.footerElementsTitle}>For Businesses</h2>
                                <ul>
                                    <li><a target="_blank" href="#" className={classes.footerElementsContent}>Corporate</a></li>
                                    <li><a target="_blank" href="#" className={classes.footerElementsContent}>Training</a></li>
                                </ul>
                            </div>
                            <div>
                                <h2 className={classes.footerElementsTitle}>Work with us</h2>
                                <ul>
                                    <li><a target="_blank" href="#" className={classes.footerElementsContent}>Hire From US</a></li>
                                    <li><a target="_blank" href="#" className={classes.footerElementsContent}>Become and instructor</a></li>
                                    <li><a target="_blank" href="#" className={classes.footerElementsContent}>Write for us</a></li>
                                </ul>
                            </div>
                            <div>
                                <h2 className={classes.footerElementsTitle}>Discover</h2>
                                <ul>
                                    <li><a target="_blank" href="#" className={classes.footerElementsContent}>Community</a></li>
                                    <li><a target="_blank" href="#" className={classes.footerElementsContent}>Blog</a></li>
                                    <li><a target="_blank" href="#" className={classes.footerElementsContent}>Sample Resumes</a></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.mid}>
                        <h2 className={classes.midTitle}>Company</h2>
                        <div className={classes.midElements}>
                            <div className={classes.midLabels}><a target="_blank" href="#" className={classes.footerElementsContent}>About Us</a></div>
                            <div className={classes.midLabels}><a target="_blank" href="#" className={classes.footerElementsContent}>Contact Us</a></div>
                            <div className={classes.midLabels}><a target="_blank" href="#" className={classes.footerElementsContent}>Refund Policy</a></div>
                            <div className={classes.midLabels}><a target="_blank" href="#" className={classes.footerElementsContent}>Reviews</a></div>
                        </div>
                        <div className={classes.midElements}>
                            <div className={classes.midLabels}><a target="_blank" href="#" className={classes.footerElementsContent}><FacebookIcon/></a></div>
                            <div className={classes.midLabels}><a target="_blank" href="#" className={classes.footerElementsContent}><TwitterIcon/></a></div>
                            <div className={classes.midLabels}><a target="_blank" href="#" className={classes.footerElementsContent}><InstagramIcon/></a></div>
                            <div className={classes.midLabels}><a target="_blank" href="#" className={classes.footerElementsContent}><LinkedInIcon/></a></div>
                            <div className={classes.midLabels}><a target="_blank" href="#" className={classes.footerElementsContent}><YouTubeIcon/></a></div>
                        </div>
                        <h2 className={classes.midCopyright}>Copyright © 2021  Appmajix Technologies Private Limited. All Rights Reserved</h2>
                        <h2 className={classes.midDisclaimer}>Disclaimer: The certification names and logos are the trademarks of their respective owners.</h2>
                    </div>
                </div> */}
            </Container>
        </footer>
    )
}

export default footerComponent
