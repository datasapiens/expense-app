import React from 'react';
import { Link } from 'react-router-dom';
import '../../sass/components/sidebar.scss';

export const Sidebar:React.FC<{}> = () => {
  return (
    <section className='sidebar__container'>
        <ul className='sidebar_content_header'>
            <li><Link to='/'>Category</Link></li>
            <li><Link to='/graph'>graph</Link></li>
    
        </ul>
    </section>
  )
}
