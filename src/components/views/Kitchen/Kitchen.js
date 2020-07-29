import React from 'react';
import styles from './Kitchen.module.scss';
import EnhancedTable from './KitchenOrders';

const Kitchen = (/*{title}*/) => (
  <div className={styles.component}>
    <h2>Kitchen view</h2>
    <EnhancedTable />
  </div>
);

/*Login.propTypes = {
  title: PropTypes.string,
};
*/
export default Kitchen;
