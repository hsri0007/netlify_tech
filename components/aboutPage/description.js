import { Container } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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
        margin: '0px',
        border:"none",
        borderTop: "4px solid #ffcf00",
        width: '10%',
    },

    desc: {
        fontSize: "16px",
        color: "#383838",
    },
    desc2:{
        fontSize: "18px",
        fontStyle:"italic",
    }
}));


const Description = () => {
    const classes = useStyles();
    return (
        <div>
            <section className={classes.section}>
                <Container maxWidth="lg">
                <h3 className={classes.mainhead}>About us</h3>
                <hr className={classes.line} />
                <p className={classes.desc}>TekSlate is a successful venture born out of an idea to bring all the tech resources under one platform. Our aim is to provide quality IT training to every individual and corporate firm and make online training an affordable option to upgrade.</p>
                <p className={classes.desc}>With a decade of experience in delivering quality training to the audience, we have been shaping the future of thousands of happy clients worldwide.</p>
                <p className={classes.desc}>We are clear with the vision of upbringing today’s engineers with tomorrow’s skills without compromising the quality and values of traditional learning through digital platforms.</p>
                <p className={classes.desc}>Anyone interested in learning various IT courses can join TekSlate.com and get instant access and start learning the stuff they want. Expect to master the skills you need to succeed as an IT professional with TekSlate.com</p>
                <p className={classes.desc2}>Watch, Learn, and Excel your IT dreams with TekSlate.</p>
                <p className={classes.desc}>We hope you enjoy our I.T Video Tutorials as much as we enjoy offering them to you. If you have any questions or comments, please don’t hesitate to contact us</p>
                {/* <p className={classes.desc}>Sincerely,</p>
                <p className={classes.desc}>TekSlate, Founder and CEO</p> */}
                </Container>
            </section>
        </div>
    )
}

export default Description
