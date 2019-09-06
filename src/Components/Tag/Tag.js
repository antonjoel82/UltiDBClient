import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  wrapper: {
    // display: 'flex',
    borderWidth: '2px',
    borderColor: theme.palette.grey[400],
    borderStyle: 'solid',
    padding: theme.spacing(0.75, 1, 0.75, 1),
    borderRadius: '5px',
    '&:hover': {
      // color: 'white',
      borderColor: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.light,
      cursor: 'pointer'
    }
  },
  label: {
    // fontSize: theme.typography.subtitle2.fontSize,
    fontSize: '0.75rem' // TODO define a property for this
  }
}));

const Tag = ({ tag }) => {
  const classes = useStyles();

  function handleClick (event) {
    window.alert('You clicked a tag!');
  }

  return (
    <Box className={classes.wrapper} m={0.5} onClick={handleClick}>
      <Typography className={classes.label}>{tag}</Typography>
    </Box>
  );
};
export default Tag;
