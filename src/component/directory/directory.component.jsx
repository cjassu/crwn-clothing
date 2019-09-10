import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from './directory.selector';

import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';

const Directory = ({ sections }) => (

            <div className='directory-menu'>
                {
                    sections.map(({id, ...otherSectionProp}) => (
                        <MenuItem key={id} {...otherSectionProp} />
                    ))
                }
            </div>
);

const mapStateToProps =createStructuredSelector({
  sections: selectDirectorySections
 })
export default connect(mapStateToProps)(Directory);