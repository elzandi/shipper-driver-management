import { Fragment, Routes, Route, BrowserRouter, Provider, lazy, Suspense } from "libraries";
import { store } from "modules";
import routes from "routes";
import Loading from "components/Loading";
import "assets/scss/global.scss";

const MainContainer = lazy(() => import('containers/MainContainer'));

function App() {
    return (
        <Fragment>
            <Provider store={store}>
                <Suspense fallback={<Loading />}>
                    <MainContainer>
                        <BrowserRouter>
                            <Routes>
                                {routes.map((route, index) => <Route {...route} key={index} />)}
                            </Routes>
                        </BrowserRouter>
                    </MainContainer>
                </Suspense>
            </Provider>
        </Fragment>
    );
};

export default App;
