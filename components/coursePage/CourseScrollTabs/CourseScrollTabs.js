import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import throttle from "lodash/throttle";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Button, Tabs, Tab } from "@material-ui/core";
import FormModalComponent from '../FormModal/FormModal';

const tabHeight = 50;
const StyledTabs = withStyles({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#2a32c5",
    color: "#2a32c5",
    // "& > div": {
    //     maxWidth: 30,
    //     width: "100%",
    // }
  },
})((props) => (
  <Tabs
    {...props}
    // indicatorColor="primary"
    textColor="primary"
    variant={"scrollable"}
    scrollButtons={"on"}
    TabIndicatorProps={{ children: <div /> }}
  />
));

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    height: tabHeight,
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.pxToRem(16),
    marginRight: theme.spacing(1),
    "&:focus": {
      opacity: 1,
    },
  },
}))((props) => <Tab {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  // indicator: {
  //     padding: theme.spacing(1)
  // },
  demo2: {
    display: 'flex',
    justifyContent: 'center',
    width: "80%",
    margin: '0 auto ',
    [theme.breakpoints.down("md")]: {
      width: '100%',
    }
  },
  customTab: {
    position: "sticky !important",
    top: 0,
    width: '100%',
    boxShadow: '0 2px 8px 0 rgb(0 0 0 / 10%)',
    backgroundColor: "#fff",
    zIndex: 1,
  },
  btnStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  customButton: {
    [theme.breakpoints.down("md")]: {
      width: '72px',
      height: '32px'
    }
  }
}));

/******* This is the scroll spy magic */
/*
Credits: Material UI
Source: 
https://github.com/mui-org/material-ui/blob/404c2ba16816f5c7ab7d8b2caf6bbc3d2218b820/docs/src/modules/utils/textToHash.js
*/
const makeUnique = (hash, unique, i = 1) => {
  const uniqueHash = i === 1 ? hash : `${hash}-${i}`;

  if (!unique[uniqueHash]) {
    unique[uniqueHash] = true;
    return uniqueHash;
  }

  return makeUnique(hash, unique, i + 1);
};

const textToHash = (text, unique = {}) => {
  return makeUnique(
    encodeURI(
      text
        .toLowerCase()
        .replace(/=&gt;|&lt;| \/&gt;|<code>|<\/code>|&#39;/g, "")
        // eslint-disable-next-line no-useless-escape
        .replace(/[!@#\$%\^&\*\(\)=_\+\[\]{}`~;:'"\|,\.<>\/\?\s]+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "")
    ),
    unique
  );
};
const noop = () => { };

function useThrottledOnScroll(callback, delay) {
  const throttledCallback = useMemo(
    () => (callback ? throttle(callback, delay) : noop),
    [callback, delay]
  );

  useEffect(() => {
    if (throttledCallback === noop) return undefined;

    window.addEventListener("scroll", throttledCallback);
    return () => {
      window.removeEventListener("scroll", throttledCallback);
      throttledCallback.cancel();
    };
  }, [throttledCallback]);
}

function ScrollSpyTabs(props) {
  const [activeState, setActiveState] = useState(null);
  const { tabsInScroll } = props;
  // var course = data.overview.course.replace(' Training', '');

  let itemsServer = tabsInScroll.map((tab) => {
    const hash = textToHash(tab.text);
    return {
      icon: tab.icon || "",
      text: tab.text,
      component: tab.component,
      hash: hash,
      node: hash,
    };
  });

  if (typeof window !== "undefined") {
    itemsServer = tabsInScroll.map((tab) => {
      const hash = textToHash(tab.text);
      return {
        icon: tab.icon || "",
        text: tab.text,
        component: tab.component,
        hash: hash,
        node: document.getElementById(hash),
      };
    });
  }

  const itemsClientRef = useRef([]);
  useEffect(() => {
    itemsClientRef.current = itemsServer;
  }, [itemsServer]);

  const [open, setOpen] = useState(false);
  const [thankyouPopup, setThankyouPopup] = React.useState(false);

  const clickedRef = useRef(false);
  const unsetClickedRef = useRef(null);
  const findActiveIndex = useCallback(() => {
    // set default if activeState is null
    if (activeState === null) setActiveState(itemsServer[0].hash);

    // Don't set the active index based on scroll if a link was just clicked
    if (clickedRef.current) return;

    let active;
    for (let i = itemsClientRef.current.length - 1; i >= 0; i -= 1) {
      // No hash if we're near the top of the page
      if (document.documentElement.scrollTop < 0) {
        active = { hash: null };
        break;
      }

      const item = itemsClientRef.current[i];

      if (
        item.node &&
        item.node.offsetTop <
        document.documentElement.scrollTop +
        document.documentElement.clientHeight / 8 +
        tabHeight
      ) {
        active = item;
        break;
      }
    }

    if (active && activeState !== active.hash) {
      setActiveState(active.hash);
    }
  }, [activeState, itemsServer]);

  // Corresponds to 10 frames at 60 Hz
  useThrottledOnScroll(itemsServer.length > 0 ? findActiveIndex : null, 166);

  const handleClick = (hash) => () => {
    // Used to disable findActiveIndex if the page scrolls due to a click
    clickedRef.current = true;
    unsetClickedRef.current = setTimeout(() => {
      clickedRef.current = false;
    }, 1000);

    if (activeState !== hash) {
      setActiveState(hash);

      if (window)
        window.scrollTo({
          top:
            document.getElementById(hash).getBoundingClientRect().top +
            window.pageYOffset,
          behavior: "smooth",
        });
    }
  };

  useEffect(
    () => () => {
      clearTimeout(unsetClickedRef.current);
    },
    []
  );

  const classes = useStyles();

  return (
    <div>
      <div className={classes.customTab}>
        <nav className={classes.demo2}>
          <StyledTabs value={activeState ? activeState : itemsServer[0].hash}>
            {itemsServer.map(item2 => (
              <StyledTab
                key={item2.hash}
                label={item2.text}
                onClick={handleClick(item2.hash)}
                value={item2.hash}
              />
            ))}
          </StyledTabs>
          <div className={classes.btnStyle}>
            <Button variant='contained' color="primary" className={classes.customButton} onClick={() => setOpen(true)}>Enroll</Button>
          </div>
          <div className={classes.indicator} />
        </nav>
      </div>
      <FormModalComponent thankyouPopup={thankyouPopup} setThankyouPopup={setThankyouPopup} value={open} handleClose={() => {
        setOpen(false);
        setThankyouPopup(false);
      }} />

      <div className="container">
        {itemsServer.map(item1 => (
          <article id={item1.hash} key={item1.text}>
            {item1.component}
          </article>
        ))}
      </div>
    </div>
  );
}

export default ScrollSpyTabs;
