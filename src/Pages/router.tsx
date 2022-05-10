import { Navigate, Route, Routes } from "react-router-dom";
import React, { Suspense} from "react";
import ExtendedRouter from "../extendedRouter";
import history from "../history";
import MainLayout from "../components/MainLayout";
import Loader from "../components/Loader";
import Graphs from "./Graphs";
import TransactionDetail from "./Transaction/TransactionDetail";
import CategoryDetail from "./Category/CategoryDetail";
import { Home } from './Home';

class Router extends React.Component {
    
    render() {
        return (
            <ExtendedRouter history={history}>
                <Suspense fallback={<Loader />}>
                    <MainLayout>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/graphs" element={<Graphs />} />
                            <Route path="/category-detail/:id" element={<CategoryDetail />} />
                            <Route path="/transaction-details/:id" element={<TransactionDetail />} />
                            <Route path="*" element={<Navigate to="/" replace />} />
                        </Routes>
                    </MainLayout>
                </Suspense>
            </ExtendedRouter>
        );
    }
}

export default Router;
