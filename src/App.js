import React from "react"
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from "./redux/store";
import Greeting from "./components/Greeting";
import Index from "./components/Index";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/greeting" element={<Greeting />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;