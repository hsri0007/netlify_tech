import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Tabs, Tab, Box } from "@material-ui/core";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{ width: '600px' }}
    >
      {value === index && (
        <Box style={{ padding: '6px 24px' }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    '&.MuiTabs-vertical': {
      width: '400px',
      '& button': {
        maxWidth: '100% !important',
        textAlign: 'left',
        '& span': {
          alignItems: 'flex-start'
        }
      },
    },
  },
}));

const DesktopProject = ({ state }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        {state.map((c, i) => {
          return <Tab label={c.heading} {...a11yProps(i)} />
        })}
      </Tabs>
      {state.map((c, i) => {
        return <TabPanel value={value} index={i}>

          <h3 style={{ margin: 0 }}>Project Highlights:</h3>
          <span dangerouslySetInnerHTML={{ __html: c.description }} />
          {/* <ul>
            {c.description.map((c) => {
              return <span dangerouslySetInnerHTML={{ __html: c }} />
            })}
          </ul> */}
          {/* <div>
            <h3>Problem Statement:</h3>Analyze Daily data to get yearly Revenue losses and profits.
          </div>
          <div>
            <h3>Description:</h3>A taxi business was facing a problem to increase their profit margin due to lack of analysis of data and is trying to expand its business for which they want regular reports in order to analyse data related to different prospective and want some solution that they can see that report at the time of meetings and through mobile and can access from anywhere.
          </div> */}
        </TabPanel>
      })}
    </>
  )
}

export default DesktopProject
