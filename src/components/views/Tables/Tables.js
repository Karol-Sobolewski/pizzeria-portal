import React from 'react';
import styles from './Tables.module.scss';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Tables = (id) => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <Link to={`/booking/${id}`} className={styles.link}>Booking ID:</Link>
    <Link to={`/booking/new`} className={styles.link}>New booking</Link>
    <Link to={`/events/${id}`} className={styles.link}>Event ID:</Link>
    <Link to={`tables/events/new`} className={styles.link}>New event</Link>
  </div>
);

Tables.propTypes = {
  id: PropTypes.string,
};

export default Tables;
