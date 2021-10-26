import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Backdrop, Fade } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '660px',
        margin: '0 auto',
        [theme.breakpoints.down("sm")]: {
            width: '340px',
        },
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    video: {
        width: '100%',
        height: '420px',
        borderRadius: '0.25rem',
        border: '3px solid #ebebeb',
        [theme.breakpoints.down("md")]: {
            width: '100%',
            height: '270px'
        },
        [theme.breakpoints.down("xs")]: {
            width: '100%',
            height: '200px'
        },
    }
}));

function VideoPopup({ show, onClose, video, data, vimeo, coursename }) {
    const classes = useStyles();

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={show}
            onClose={onClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={show}>
                {vimeo ? (
                    <iframe
                        className={classes.video}
                        src={`${video}`}
                        webkitallowfullscreen
                        mozallowfullscreen
                        allowfullscreen
                    />
                ) : (
                    <iframe
                        className={classes.video}
                        src={`https://www.youtube.com/embed/${video}`}
                        frameborder="0"
                        allowfullscreen="1"
                    />
                )}
            </Fade>
        </Modal>
        // <Modal
        //   // size={video ? "xl" : "md"}
        //   size="lg"
        //   aria-labelledby="contained-modal-title-vcenter"
        //   centered
        //   show={show}
        //   onHide={onClose}
        // //   className="bg_none video_popup"
        // >
        //   <Modal.Header className="bg_none p-0ss" closeButton></Modal.Header>
        //   <Modal.Body className="bg_none">

        //   </Modal.Body>
        // </Modal>
    );
}

export default VideoPopup;