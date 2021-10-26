import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    accordionStyles: {
        marginBottom: '0.4rem',
        boxShadow: '0 2px 13px 0 rgb(0 0 0 / 2%)',
    },
    accordionDetailsStyles: {
        display: 'flex',
        flexDirection: 'column'
    },
    '&.MuiAccordionSummary-root': {
        '&:hover': {
            // background: '#000',
            color: '#ffcf00'
        }
    },
    heading: {
        '&:hover': {
            // background: '#000',
            color: '#ffcf00',
            fontSize: 'bold'
        },
        '&:hover svg': {
            color: '#ffcf00'
        }
    },
}));

const AccordionComponent = ({ handleChange, expanded, i, title, description }) => {
    const classes = useStyles();

    return (
        <>
            <Accordion
                expanded={expanded === `panel${i}`}
                onChange={handleChange(`panel${i}`)}
                className={classes.accordionStyles}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${i}bh-content`}
                    id={`panel${i}bh-header`}
                    className={classes.heading}
                >
                    <Typography className={classes.heading}>
                        {i + 1}. &nbsp; {title}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails
                    className={classes.accordionDetailsStyles}
                >
                    <span
                        dangerouslySetInnerHTML={{
                            __html: description,
                        }}
                    />
                </AccordionDetails>
            </Accordion>
        </>
    )
}

export default AccordionComponent
