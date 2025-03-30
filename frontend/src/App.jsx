import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import SendMoney from './pages/SendMoney';

function App() {
  
  return (
    <div>
      <div className='font-bold text-2xl text-center p-4 bg-slate-300'>
        Payment Application
      </div>
      <BrowserRouter>
      <Routes>
        <Route path='/signin' element={<Signin /> } />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/send-money' element={<SendMoney />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
