import { Container } from '@material-ui/core';
import React from 'react'
import HeadingsComponent from '../HeadingsComponent/HeadingsComponent';
import { makeStyles } from '@material-ui/core/styles';
import DesktopProject from './DesktopProject';
import MobileProject from './MobileProject';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        // height: 224,
        '& > div:first-child': {
            display: 'none',
            [theme.breakpoints.down("sm")]: {
                display: 'block'
            },
        },
        '& > div:last-child': {
            display: 'flex',
            [theme.breakpoints.down("sm")]: {
                display: 'none'
            },
        },
    },
}));

const ProjectsComponent = ({ data }) => {
    const classes = useStyles();
    const projects = data.course_projects.map(val => {
        return {
            heading: val.project_name,
            description: val.description
        }
    });
    const [state, setState] = React.useState(projects);

    return (
        <div style={{ padding: '4rem 0' }}>
            <Container>
                <div style={{ textAlign: 'center' }}>
                    <HeadingsComponent first='Project' last='Details' />
                    <p style={{ fontWeight: 600, marginBottom: '2rem' }}>
                        We bring you the best learning experience by delivering all our training sessions practical. Following are the few use cases we shall discuss during the training.
                    </p>
                </div>

                <div className={classes.root}>
                    <div>
                        <MobileProject state={state} />
                    </div>
                    <div>{state && state.length > 0 ? (<DesktopProject state={state} />) : ''}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ProjectsComponent;
