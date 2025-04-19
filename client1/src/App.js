import "./App.css";
import Header from "./header";
import Layout from "./layout";
import Post from "./post";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <main>
              <Post />
            </main>
          }
        />
        <Route
          path={"/login"}
          element={
            <main>
              <div>login Page</div>
            </main>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
