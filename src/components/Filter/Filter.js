import React from 'react';
import styles from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({value, оnChange}) => (
    <label>
     FInd contacts by name
     <input 
     type="text" 
     value={value}
     onChange={оnChange}
     />
    </label>
);

export default Filter;