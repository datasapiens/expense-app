import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import './add.scss';

const Add = () => {
  return (
    <button className="button"><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button>
  )
}

export default Add