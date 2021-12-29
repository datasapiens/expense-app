// outsource dependencies
import cn from 'classnames';
import React, { memo } from 'react';

// local dependencies

interface IFooter  {
  className?: string;
}

export const Footer = memo<IFooter>(function Footer ({ className }) {
  return (
    <footer id="footer" className={cn('footer', className)}>

    </footer>
  );
});
