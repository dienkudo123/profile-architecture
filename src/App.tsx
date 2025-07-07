import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page from './pages/';
import { MainLayout } from './layouts/main-layout';

function App() {
    return (
        <Router>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Page />} />
                    {/* Thêm các page khác */}
                </Routes>
            </MainLayout>
        </Router>
    );
}

export default App;
