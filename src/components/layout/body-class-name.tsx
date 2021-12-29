// outsource dependencies
import _ from 'lodash';
import { Children, cloneElement, isValidElement, memo, PropsWithChildren, useEffect } from 'react';


const addBodyClass = (className: string) => document.body.classList.add(className);
const removeBodyClass = (className: string) => document.body.classList.remove(className);

interface IBodyClassName {
  className?: string;
}

export const BodyClassName = memo<PropsWithChildren<IBodyClassName>>(function BodyClassName ({ className, children }) {
  useEffect(() => {
    // NOTE Set up
    !_.isEmpty(className) && className?.split(' ').map((classItemName) => addBodyClass(classItemName));
    // NOTE Clean up
    return () => {
      !_.isEmpty(className) && className?.split(' ').map((classItemName) => removeBodyClass(classItemName));
    };
  }, [className]);

  return (<>
    { Children.map(children, (child) => {
      if (!isValidElement(child)) {
        return child;
      }
      return cloneElement(child, {  });
    })}
  </>)
});
