import { Container } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PinDropIcon from '@material-ui/icons/PinDrop';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';

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
    }
}));


const Description = () => {
    const classes = useStyles();
    return (
        <div>
            <section className={classes.section}>
                <Container maxWidth="lg">
                    <h3 className={classes.mainhead}>CORPORATE TRAINING SOLUTIONS</h3>
                    <hr className={classes.line} />
                    <p style={{ fontSize: "16px" }}>The main area of focus of Tekslate is productivity enhancement training. This is to build a productive and skilled workforce in order to meet the challenges of worldwide business competitions by corporates. Tekslate provides industry-best training and skill-building services, highly effective guidance on professional certifications, standardized quality content development, and delivery.</p>
                    <p style={{ fontSize: "16px" }}>With the rapid improvements in the technology trends, nowadays, every IT organization struggles extremely hard to keep its resources in time with the changes in technology. The reason for their struggle is the shortage of knowledge delivery personnel and they are the need of the hour today for most of the software companies. This is the area we serve best with our corporate Software Training Division.</p>
                    <p style={{ fontSize: "16px" }}>TekSlate ensures:</p>
                    <ul style={{ fontSize: "16px" }}>
                        <li>Expert trainers with the most comprehensive working experience in the real-time industry.</li>
                        <li>Exposure to real-time usage of technologies and tools in the corporate world.</li>
                        <li>We fill the skill gap between the existing workforce and the futuristic opportunities of the Corporates.</li>
                    </ul>
                </Container>
            </section>
        </div>
    )
}

export default Description
