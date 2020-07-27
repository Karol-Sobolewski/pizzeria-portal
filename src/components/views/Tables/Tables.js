import React from 'react';
import styles from './Tables.module.scss';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';

const Tables = (id) => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper className={styles.paper}>
          date + hour
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={styles.paper}>
          table
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper className={styles.paper}>
          <Link to={`/booking/${id}`} className={styles.link}>Booking ID:</Link>
          <Tooltip title="New Booking" aria-label="new-booking">
            <Fab color="secondary" className={styles.absolute} component = {Link} exact to={`/booking/new`}>
              <AddIcon/>
            </Fab>
          </Tooltip>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper className={styles.paper}>
          <Link to={`/events/${id}`} className={styles.link}>Event ID:</Link>
          <Tooltip title="New Event" aria-label="new-event">
            <Fab color="secondary" className={styles.absolute} component = {Link} exact to={`tables/events/new`}>
              <AddIcon/>
            </Fab>
          </Tooltip>
        </Paper>
      </Grid>
    </Grid>




  </div>
);

Tables.propTypes = {
  id: PropTypes.string,
};

export default Tables;
