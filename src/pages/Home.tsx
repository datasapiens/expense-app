import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <>
      <Sidebar />
      <div className="home">
        <div className="sidebar"></div>
        <div className="homepage">
          <h3>Homepage</h3>
        </div>
      </div>
    </>
  );
}

export default Home;
