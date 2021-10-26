import { Container } from '@material-ui/core';
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { LinkedinShareButton, FacebookShareButton, TwitterShareButton } from "react-share";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },


    iconsSection: {
        display: "flex",
        listStyle: "none",
        justifyContent: "center",
        padding: "0px",
        margin: "80px 0px 40px 0px",
    },


    social_li: {
        margin: "0px 20px",
    },

    icon: {
        fontSize: "32px",
        color: "#444444",
    },

}));


const SocialIcons = () => {
    const classes = useStyles();
    const [url, setUrl] = React.useState("");
    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (window.document.domain === "localhost") {
                setUrl(`https://tekslate.com${window.location.pathname}`)
            } else {
                setUrl(window.location.href)
            }
        }
    }, [url])
    return (
        <div>
            <section >
                <Container maxWidth="md" style={{ borderBottom: "1px solid #e8e8e8" }}>
                    <ul className={classes.iconsSection}>
                        <li className={classes.social_li}>
                            <a className={classes.footerElementsContent}>
                                <FacebookShareButton url={url} >
                                    <FacebookIcon className={classes.icon} />
                                </FacebookShareButton>
                            </a>
                            {/* <a href="#" className={classes.footerElementsContent}>
                                <FacebookIcon className={classes.icon} />
                            </a> */}
                        </li>
                        <li className={classes.social_li}>
                            <a className={classes.footerElementsContent}>
                                <TwitterShareButton url={url}>
                                    <TwitterIcon className={classes.icon} />
                                </TwitterShareButton>
                            </a>
                            {/* <a href="#" className={classes.footerElementsContent}>
                                <TwitterIcon className={classes.icon} />
                            </a> */}
                        </li>
                        <li className={classes.social_li}>
                            <a className={classes.footerElementsContent} >
                                <LinkedinShareButton url={url} >
                                    <LinkedInIcon className={classes.icon} />
                                </LinkedinShareButton>

                            </a>
                            {/* <a href="#" className={classes.footerElementsContent}>
                                <InstagramIcon className={classes.icon} />
                            </a> */}
                        </li>
                        {/* <li className={classes.social_li}>
                            <a href="#" className={classes.footerElementsContent}>
                                <YouTubeIcon className={classes.icon} />
                            </a>
                        </li> */}
                    </ul>
                </Container>

            </section>
        </div>
    )
}

export default SocialIcons
