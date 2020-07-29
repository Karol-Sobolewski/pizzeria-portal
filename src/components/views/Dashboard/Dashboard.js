import React from 'react';
import styles from './Dashboard.module.scss';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import DeliveryStats from './DeliveryStats';
import RestaurantStats from './RestaurantStats';

const Dashboard = () => {


  return (
    <div className={styles.component}>
      <h2>Dashboard view</h2>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper className={styles.paper}>
            <RestaurantStats />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={styles.paper}>
            <DeliveryStats />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={styles.paper}>list</Paper>
        </Grid>
      </Grid>
    </div>
  );
};


/*Login.propTypes = {
  title: PropTypes.string,
};
*/
export default Dashboard;
