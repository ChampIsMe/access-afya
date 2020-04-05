import React from 'react';
import theme from '../../../../theme'
import {Box, colors, Grid, IconButton} from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  issueItems: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    '&:hover': {
      backgroundColor: 'rgba(154,154,154,0.1)',
      color: theme.palette.grey[600],
      '& $icon': {
        color: theme.palette.grey[500]
      }
    },
  },
}))

function IssueItem({issue,selectedIssue,changeSelectedIssue,i}) {
  const classes = useStyles()
  return (
    <Grid
      item
      key={i}
    >
      <div className={classes.issueItems} style={{
        padding: '2px',
        border: (i === selectedIssue) ? `1.5px solid ${theme.palette.primary.main}` : `0.5px solid ${theme.palette.grey[400]}`,
        borderRadius: 4,
        cursor: "pointer",
      }}
           onClick={() => changeSelectedIssue(i)}>
        <div>
          <Box style={{margin: '2px'}} fontWeight="fontWeightMedium" fontSize={14} m={1}>
            {issue.title}
          </Box>
          <Box style={{margin: '2px'}} fontWeight="fontWeightRegular" fontSize={12} m={1}
               color={theme.palette.grey[500]}>
            {issue.location}
          </Box>
        </div>
        <IconButton style={{margin: '3px'}}
                    edge="end"
                    size="small"
        >
          <MoreVertIcon/>
        </IconButton>
      </div>

    </Grid>
  );
}

export default IssueItem;
