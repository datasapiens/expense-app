import cn from 'classnames';
import { AppHeader } from 'components/UI/AppHeader';

type AppLayoutProps = {
  children: React.ReactNode;
  className?: string;
};

export const AppLayout: React.FC<AppLayoutProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn(className)}>
      <AppHeader />
      <>{children}</>
    </div>
  );
};
