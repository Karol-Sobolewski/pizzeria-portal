import React from 'react';
import PropTypes from 'prop-types';
//import styles from './HappyHourAd.scss';
import PageNav from '../PageNav/PageNav';

const MainLayout = ({children}) => (
  <div>
    <main>
      {children}
      <PageNav />
    </main>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
