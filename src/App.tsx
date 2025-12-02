import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

// Determine if this app is in production or in development
const appBasename = import.meta.env.PROD ? "/daese-website" : "";

function App() {
  return (
    <Router basename={appBasename}>
      <Routes>
        {/* Main Page Route */}
        <Route
          path="/"
          element={
            <Layout>
              <HomePage></HomePage>
            </Layout>
          }
        ></Route>
        {/* Profile Page Route */}
        <Route
          path="/profile"
          element={
            <Layout>
              <ProfilePage></ProfilePage>
            </Layout>
          }
        ></Route>
        {/* Product Page Route */}
        <Route
          path="/product"
          element={
            <Layout>
              <ProductPage></ProductPage>
            </Layout>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
