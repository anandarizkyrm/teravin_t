import { Routes, Route } from "react-router-dom";
import { Home, FormSubmission, DetailData } from "./utils/importComponents";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/input" element={<FormSubmission />} />
        <Route path="/detail/:id" element={<DetailData />} />
      </Routes>
    </div>
  );
}

export default App;
