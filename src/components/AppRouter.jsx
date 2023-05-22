import { Route, Routes, Navigate } from 'react-router-dom';
import { routes } from '../router/router';

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(route =>
                <Route
                    element={route.element}
                    path={route.path}
                    key={route.path}
                />
            )}
            <Route path='/*' element={<Navigate to='/films' replace />}/>
        </Routes>
    );
}

export default AppRouter;
