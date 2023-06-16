import './App.css'
import { Routes, Route } from 'react-router-dom';

import { Homepage } from './pages/Homepage.tsx';
import { Blogpage } from './pages/Blogpage.tsx';
import { Singlepage } from './pages/Singlepage.tsx';
import { Aboutpage } from './pages/Aboutpage.tsx';
import { Notfoundpage } from './pages/Notfoundpage.tsx';
import { Editpost } from './pages/Editpost.tsx';
import { LoginPage } from './components/Loginpage.tsx';

import { Layout } from './components/Layout.tsx';

import { RequireAuth } from './components/hoc/RequireAuth.tsx';
import { AuthProvider } from './hoc/AuthProvider.tsx'

function App() {
  return (
    <>
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Homepage/>}/>
        <Route path='about' element={<Aboutpage/>}/>
        <Route path='posts' element={<Blogpage/>}/>
        <Route path='posts/:id' element={<Singlepage/>}/>
        <Route path='posts/:id/edit' element={
          <RequireAuth>
            <Editpost/>
          </RequireAuth>
        }/>
        <Route path='login' element={<LoginPage/>}/>
        <Route path='*' element={<Notfoundpage/>}/>
        </Route>
      </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
