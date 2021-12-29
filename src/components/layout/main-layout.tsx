// outsource dependencies
import cn from 'classnames';
import React, { memo, PropsWithChildren } from 'react';

// local dependencies
import { Header } from './header';
import { Footer } from './footer';
import { BodyClassName } from './body-class-name';

interface IMainLayout {
  className?: string;
  classNameBody?: string;
}

export const MainLayout = memo<PropsWithChildren<IMainLayout>>(function MainLayout ({ className, classNameBody, children }) {
  return <BodyClassName className={cn('d-flex flex-column h-100', classNameBody)}>
    <Header />
    <main role="main" className={cn('flex-shrink-0', className)}> { children } </main>
    <Footer className={'footer mt-auto py-3 bg-light'} />
  </BodyClassName>;
});

