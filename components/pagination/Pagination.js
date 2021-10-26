import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function PaginationOutlined() {
  const classes = useStyles();

  return (
    <div style={{margin:"auto"}} className={classes.root}>
      <Pagination count={10} variant="outlined" color="primary" />
    </div>
  );
}
