import { ReactElement} from 'react';
import { ContainerFlex } from './common/ContainerFlex';
import { Sidebar } from './common/Sidebar/Sidebar';

import './sass/Layout/_layout.scss';


const Layout: React.FC<{children: ReactElement}> = ({children}) =>{
    return(
        <div className='layout__container'>
            <Sidebar/>
            <ContainerFlex>
                {children}
            </ContainerFlex>
        </div>
    )
}

export default Layout;