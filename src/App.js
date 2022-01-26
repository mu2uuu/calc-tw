import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import "./App.css";

function App() {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate([today, tomorrow]));
  const [values, setValues] = useState([today, tomorrow]);
  return (
    <>
      <DatePicker
        sort={true}
        multiple
        value={values}
        onChange={setValues}
        format="D"
      />
    </>
  );
}

export default App;
