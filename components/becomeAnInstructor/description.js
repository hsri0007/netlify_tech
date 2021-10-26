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
        color: "#000000",
    fontSize: "20px",
    fontWeight: "600",
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
                <p className={classes.desc}>Who can become an Instructor?</p>
                <p>Anyone who is an authority in a particular field or area with a combination of experience and education. He must be an expert at how something should be taught. He also must understand how to chunk information in a way that is conducive to learning and retention. He must support students in better understanding the concepts through practical application. He must possess excellent oral communication skills.</p>
                <p className={classes.desc}>What TekSlate has in store for the Instructors?</p>
                <p>TekSlate allows instructors with the ability to perform their teaching duties at their convenience. The instructor can have the ability to conduct classes with students from across multiple time zones, without having to travel. TekSlate typically offers continuing education sessions throughout the year, providing instructors the opportunities for skill enhancement in areas such as giving feedback, problem-based learning, and critical thinking.</p>
                <p className={classes.desc}>How do we Hire?</p>
                <p>There are two steps involved in the hiring process.</p>
                <p className={classes.desc}>Recruitment and Selection of Trainers.</p>
                <p>Recruitment involves communicating and motivating qualified persons to apply for the job.</p>
                <p className={classes.desc}>Training the trainers.</p>
                <p>Trainers require both domain expertise and training delivery skills.</p>
                <p>All trainers are required to be trained in the areas in which they are deficient.</p>
                <p>You can partner with us in authoring the learning courses by creating content, and defining learning objectives.You can also apply your own instructional and graphical design to the course.</p>
                <p className={classes.desc}>Please send your profile to info@tekslate.com for consideration.</p>
                {/* <p className={classes.desc}>Sincerely,</p>
                <p className={classes.desc}>TekSlate, Founder and CEO</p> */}
                </Container>
            </section>
        </div>
    )
}

export default Description
