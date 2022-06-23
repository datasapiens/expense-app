import React from 'react';
import '../../sass/components/sidebar.scss';

export const Sidebar:React.FC<{}> = () => {
  return (
    <section className='sidebar__container'>
        <ul className='sidebar_content_header'>
            <li>Overview</li>
            <li>Category</li>
            <li>Transaction</li>
            <li>Settings</li>
        </ul>
    </section>
  )
}
