'use babel'
// @flow

import React from 'react';
import Radium from 'radium';

export default Radium(({}: {}) => (
  <div style={{
    display: 'flex',
    flex: '1',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
    <span className="loading loading-spinner-medium"></span>
  </div>
));