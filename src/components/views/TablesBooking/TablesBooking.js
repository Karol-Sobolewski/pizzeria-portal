import React from 'react';
import styles from './TablesBooking.module.scss';
import { useParams } from 'react-router-dom';

const TablesBooking = (props) => {

  console.log(props.match.params.id);
  const { id } = useParams();
  return (
    <div className={styles.component}>
      <h2>TablesBooking view</h2>
      { id }
    </div>
  );

};

export default TablesBooking;
