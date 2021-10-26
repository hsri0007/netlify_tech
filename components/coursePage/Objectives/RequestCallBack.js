import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import CourseButtonComponent from "../CourseButtonComponent/CourseButtonComponent";
import PhoneIcon from '@material-ui/icons/Phone';
import { getIPDetails } from '../../../apiCalls';

const useStyles = makeStyles((theme) => ({
    contactUs: {
        display: 'block',
        padding: '16px 25px',
        transition: 'all .8s ease',
        width: '300px',
        margin: ' 0 auto',
        height: '140px',
        boxShadow: '0 2px 8px 0 rgb(0 0 0 / 24%)',
        // [theme.breakpoints.down("md")]: {
        //     display: 'none'
        // },
    }
}));

const RequestCallBack = ({ setOpen }) => {
    const classes = useStyles();

    const [state, setState] = React.useState('')

    React.useEffect(async () => {
        const ipData = await getIPDetails();
        setState(ipData.country_code);
        console.log(ipData, 'ip address')
    }, [])

    // const ipData = await getIPDetails();

    // console.log(ipData, 'ipdata')


    return (
        <>
            <div className={classes.contactUs}>
                <div style={{ marginBottom: '10px', padding: 0 }}>
                    contact us
                </div>
                <div style={{ display: "flex", justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{
                        fontSize: '24px',
                        letterSpacing: '2px',
                        color: '#272c37',
                        margin: '8px 0'
                    }}>{state && state === 'IN' ? '+91 90529 43388' : '+1 930 200 4823'}</div>
                    <div><PhoneIcon /></div>
                </div>
                <div style={{ marginTop: '10px' }}>( Toll Free )</div>
                <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '2rem' }}>
                    <CourseButtonComponent subject='Request call back' setOpen={setOpen} />
                </div>
            </div>
        </>
    )
}

export default RequestCallBack
