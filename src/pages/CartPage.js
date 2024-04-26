export const CartPage = () => {
    return (
      <>
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
            Checkout
          </text>
        </svg>
      </div>
  
        <div className="container-fluid mt-0 pt-5 d-flex justify-content-center">
        <div className="card p-5 text-center" style={{width: 450, height: 500}}>
            <div className="card-body">
                <h5 className="card-title mt-3 titan-one-regular" style={{fontSize: 30, paddingBottom: 40}}>Your Cart is Empty</h5>
                <p className="card-text mt-2 mb-4">Add products from the products page!</p>
                {/* <div className="d-grid">
                    <button type="button" className="btn btn-primary lalezar-regular p-2">Add to Cart</button>
                </div> */}
            </div>
        </div>
        </div>

        <div className="container-fluid ps-0 pe-0">
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