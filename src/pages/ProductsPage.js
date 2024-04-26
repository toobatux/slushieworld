import { ProductComponent } from "../components/ProductComponent";

export const ProductsPage = () => {
  return (
    <>
      {/* <div className="container">
        <img
          src={process.env.PUBLIC_URL + "/productback.jpg"}
          class="img-fluid"
          alt="..."
        /> */}

      <div className="container-fluid ps-0 pe-0">
        <svg viewBox="0 25 310 50" width="100%">
          <rect x="0" y="0" width="500" height="80" fill="#212529" />
          <path fill="var()" />
          <path
            d="M0 47v75h375v-14.99c-78.339-72.46-180.105-42.829-231.209-35.956C98.397 77.159 41 80.764 0 47"
            class=""
            fill="#fff"
          />
          <g clip-path="url(#a)" fill="var(--color-secondary)">
            <path d="" />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#000" d="" />
            </clipPath>
          </defs>
          <text
            x="50%"
            y="90%"
            dominant-baseline="middle"
            text-anchor="middle"
            fill="#ffffff"
            font-size="24"
            className="lalezar-regular"
          >
            Slushies
          </text>
        </svg>
      </div>

      <div className="container-fluid">
        {/* <div className="container">
          <div className="row text-center">
            <h1 className="lalezar-regular" style={{ fontSize: 60 }}>
              Products
            </h1>
          </div>
        </div> */}

        <div className="row">
          <div className="col-3">
            {/* <div className="row mt-5 mb-5 ms-5">
            <img src={process.env.PUBLIC_URL + "/hearteyes.png"} class="img" style={{height: 160, width: 200}} alt="..."/>
          </div> */}
            <div className="row mt-5 mb-5 ps-2">
              <img
                src={process.env.PUBLIC_URL + "/awe1.png"}
                class="img ps-5"
                style={{ marginBottom: 400 }}
                alt="..."
              />
            </div>
            <div className="row mt-5 mb-5 ps-5">
              <img
                src={process.env.PUBLIC_URL + "/yummy1.png"}
                class="img ps-5 pe-5"
                style={{ marginBottom: 400 }}
                alt="..."
              />
            </div>
            <div className="row mt-5 mb-0 ps-5">
              <img
                src={process.env.PUBLIC_URL + "/pee.png"}
                class="img ps-5"
                alt="..."
              />
            </div>
            {/* <div className="row">
            <img src={process.env.PUBLIC_URL + "/yummy.png"} class="img" alt="..."/>
          </div> */}
          </div>
          <div className="col-6">
            <div className="container">
              <div className="row justify-content-center mb-5">
                <ProductComponent />
                <ProductComponent />
                <ProductComponent />
                <ProductComponent />
                <ProductComponent />
                <ProductComponent />
                <ProductComponent />
                <ProductComponent />
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="row mt-5 mb-5 ms-2 pe-5">
              <img
                src={process.env.PUBLIC_URL + "/awe2.png"}
                class="img"
                style={{ marginBottom: 300 }}
                alt="..."
              />
            </div>
            <div className="row mt-5 mb-5 ms-2 pe-5">
              <img
                src={process.env.PUBLIC_URL + "/shock.png"}
                class="img ps-5"
                style={{ marginBottom: 340 }}
                alt="..."
              />
            </div>
            <div className="row mt-5 mb-0 ms-2 pe-5">
              <img
                src={process.env.PUBLIC_URL + "/dance.png"}
                class="img"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="container-fluid ps-0 pe-0 mt-0">
        <svg viewBox="0 45 310 50" width="100%" transform="rotate(180)">
          <rect x="0" y="0" width="500" height="80" fill="#F8F9FA" />
          <path fill="var()" />
          <path
            d="M0 47v75h375v-14.99c-78.339-72.46-180.105-42.829-231.209-35.956C98.397 77.159 41 80.764 0 47"
            class=""
            fill="#fff"
          />
          <g clip-path="url(#a)" fill="var(--color-secondary)">
            <path d="" />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#000" d="" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </>
  );
};
