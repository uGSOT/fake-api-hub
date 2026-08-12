import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.jsx';
import Home from './pages/Home.jsx';
import ApiLibrary from './pages/ApiLibrary.jsx';
import Categories from './pages/Categories.jsx';
import Documentation from './pages/Documentation.jsx';
import Contribute from './pages/Contribute.jsx';
import HospitalApiMain from './pages/HospitalApiMain.jsx';
import HospitalApiResource from './pages/HospitalApiResource.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="apis" element={<ApiLibrary />} />
        <Route path="apis/hospital" element={<HospitalApiMain />} />
        <Route path="apis/hospital/:resource" element={<HospitalApiResource />} />
        <Route path="apis/hospital/:resource/:id" element={<HospitalApiResource />} />
        <Route path="categories" element={<Categories />} />
        <Route path="documentation" element={<Documentation />} />
        <Route path="contribute" element={<Contribute />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
