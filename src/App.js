import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage.js";
import { ProductsPage } from "./pages/ProductsPage.js";
import { AboutPage } from "./pages/AboutPage.js";
import { CartPage } from "./pages/CartPage.js";

import { Amplify } from 'aws-amplify';
import LoginPage from "./pages/LoginPage.js";
import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App() {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lalezar&family=Titan+One&family=Black+Han+Sans&display=swap"
          rel="stylesheet"
        />
      </head>
      <nav
        class="navbar navbar-expand-lg bg-dark sticky-top"
        data-bs-theme="dark"
        // style={{borderBottomLeftRadius: 15, borderBottomRightRadius: 15}}
      >
        <div class="container-fluid ps-5 pe-5 pt-2 pb-2">
          <Link
            to="/"
            className="navbar-brand titan-one-regular"
            style={{ fontSize: 35 }}
          >
            Slushie World
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <Link
                  to="/"
                  className="nav-link lalezar-regular me-4"
                  style={{ fontSize: 25 }}
                >
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="/products"
                  className="nav-link lalezar-regular me-4"
                  style={{ fontSize: 25 }}
                >
                  Products
                </Link>
              </li>
              <li
                class="nav-item lalezar-regular me-4"
                style={{ fontSize: 25 }}
              >
                <Link to="/about/" className="nav-link">
                  About
                </Link>
              </li>
              <li
                class="nav-item pe-4 lalezar-regular me-4"
                style={{ fontSize: 25 }}
              >
                <Link to="/cart/" className="nav-link">
                  Cart
                </Link>
              </li>
              <li class="nav-item lalezar-regular">
                {/* <button
                  type="button"
                  class="btn btn-secondary"
                  style={{ fontSize: 25 }}
                > */}
                  <Link
                  to="/login"
                  className="nav-link lalezar-regular me-4"
                  style={{ fontSize: 25 }}
                >Login</Link>
              </li>
            </ul>
            {/* <ul class="navbar-nav titan-one-regular">
              <li class="nav-item pe-4">
                  <button type="button" class="btn btn-secondary">Login</button>
              </li>
            </ul>*/}
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about/" element={<AboutPage />} />
        <Route path="/cart/" element={<CartPage />} />
        <Route path="/login/" element={<LoginPage/>} />
      </Routes>

      <footer class="footer mt-auto py-3 bg-light">
        <div className="container">
          <div className="row titan-one-regular">
            <div class="container-fluid pt-0 mb-4">
              © Slushie World Inc. All Rights Reserved.
            </div>
          </div>
          <div className="row">
            <p className="mb-0">상호 : 주식회사 슬러쉬 월드 | 대표 : 톰</p>
          </div>
          <div className="row">
            <p className="mb-0">사업자번호 : (724) 351-1234</p>
          </div>
          <div className="row">
            <div className="col">
              <p>통신판매업신고 : 2024-서울성동-0321</p>
            </div>
            <div className="col">
              <p className="lalezar-regular float-end">Site by Tom Krusinski</p>
            </div>
          </div>
        </div>
      </footer>

      {/* <footer class="footer mt-auto py-3 bg-light">
        <div className="row titan-one-regular">
          <div class="container pt-0 mb-4 ps-5 ms-5">
            © Slushie World Inc. All Rights Reserved.
          </div>
          <div>

          </div>
        </div>
      </footer> */}
    </>
  );
}

export default App;
