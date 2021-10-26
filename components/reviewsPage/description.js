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
        border:"none",
        margin: '0px',
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
                <p className={classes.desc}>Welcome to TekSlate.com, your number one source for high quality online Video Tutorials of various courses in IT. We’re dedicated to giving you the very best of Video Tutorials, Self-paced Video courses, eLearning and various IT training videos with a difference. We sell online Video Tutorials of various courses in IT and also we offer free tutorials for various courses in IT. With our videos, you’re on the fast track to mastery with a focus on dependability, customer service and uniqueness.</p>
                <p className={classes.desc}>Founded in 2012 with the goal of providing quality content at low cost by avoiding traditional class room learning which is becoming expensive these days. Not everyone can learn by reading books! Most time the best way is to watch someone else first. Rather than having to put up your hand and wait for the tutor to teach you how to do something in class room, you can now find out for yourself by watching Video Tutorials of various courses in I.T, stop it, start it, rewind, fast forward. You can work at your own pace and see it as many times as you need.</p>
                <p className={classes.desc}>Our video experts are coaches and tutors from people who have industry experience. TekSlate.com is also a platform for IT tutors who are interested in teaching and can also sell their courses in our website.</p>
                <p className={classes.desc}>Anyone interested in learning various IT courses can join TekSlate.com and get instant access and start learning the stuff they want. Expect to master the skills you need to succeed as an IT professional with TekSlate.com</p>
                <p className={classes.desc2}>At TekSlate.com Watch, Learn and Excel</p>
                <p className={classes.desc}>We hope you enjoy our I.T Video Tutorials as much as we enjoy offering them to you. If you have any questions or comments, please don’t hesitate to contact us</p>
                <p className={classes.desc}>Sincerely,</p>
                <p className={classes.desc}>TekSlate, Founder and CEO</p>
                </Container>
            </section>
        </div>
    )
}

export default Description
