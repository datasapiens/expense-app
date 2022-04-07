import ReactLoader from "react-loaders";

export default function Loader() {
    return (
        <div className="loader-container" >
            <div className="loader-container-inner">
            <ReactLoader type="ball-grid-pulse" active />
                <h6 className="mt-3">
                    Please wait
                    <small>Loading...</small>
                </h6>
            </div>
        </div>
    );
}