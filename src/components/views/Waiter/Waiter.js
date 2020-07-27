import React from 'react';
import styles from './Waiter.module.scss';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';


const Waiter = (id) => (
  <div className={styles.component}>
    <h2>Waiter view</h2>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper className={styles.paper}>
          <Link to={`waiter/order/${id}`} className={styles.link}>Order ID:</Link>
          <Tooltip title="New order" aria-label="new-order">
            <Fab color="secondary" className={styles.absolute} component = {Link} exact to={`waiter/order/new`}>
              <AddIcon/>
            </Fab>
          </Tooltip>
        </Paper>
      </Grid>
    </Grid>
  </div>
);

Waiter.propTypes = {
  id: PropTypes.string,
};

export default Waiter;
