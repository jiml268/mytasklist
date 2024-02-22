import { Route, Routes } from 'react-router-dom';
import TaskBoard from '../pages/TaskBoard'

export const App = () => {

  

  return (
   <div className="App">
      <Routes>
        <Route path="/" element={<TaskBoard />} />
        <Route path="/:id" element={<TaskBoard />} />

        <Route path="*" element={<p>Path not resolved</p>} />
       </Routes>
      </div>
  );
};
