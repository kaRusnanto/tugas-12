import { Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Popular from './pages/Popular';
import Add from './pages/Add';
import Layout from './layouts/Layout';
import { useState } from 'react';
import DataMovie from './utils/constans/DataMovie';
import GlobalStyle from './components/Global/GlobalStyle';

function App() {
  const [data, setData] = useState(DataMovie)

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path='/' element={<Home item={data} setItem={setData} />} />
          <Route path='/popular' element={<Popular />} />
          <Route path='/add' element={<Add item={data} setItem={setData} />} />
        </Routes>
      </Layout>
    </>

  );
}

export default App;
