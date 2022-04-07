import Menu from './Menu';
import Nav from './Nav';

 const MainLayout = (props: any) => {


    return (
      <>
        <Nav />

        <div className="container-fluid">
          <div className="row">
            <Menu />

            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                {props.children}
            </main>
          </div>
        </div>
      </>
    );
  }
  export default MainLayout;

