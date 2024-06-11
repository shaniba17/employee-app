import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddEmployee from './components/AddEmployee';
import DeleteEmployee from './components/DeleteEmployee';
import SearchEmployee from './components/SearchEmployee';
import ViewEmployee from './components/ViewEmployee';

function App() {
  return (
    <div>
      <BrowserRouter>
    <Routes>
     <Route path='/' element={<AddEmployee/>}/>
     <Route path='/search' element={<SearchEmployee/>}/>
     <Route path='/delete' element={<DeleteEmployee/>}/>
     <Route path='/view' element={<ViewEmployee/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
