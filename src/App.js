import { Route, Routes } from 'react-router-dom';
import Page from './pages/Page';

const App = () => (
  <Routes>
    <Route path="/" element={<Page />} />
  </Routes>
);

export default App;
