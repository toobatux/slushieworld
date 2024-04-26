export const HomePage = () => {
  return (
    <>
      <div
        className="container-fluid"
        style={{ paddingLeft: 5, paddingRight: 5, paddingTop: 5 }}
      >
        {/* <div className="card ps-0 pt-0 pb-0 pe-0" style={{ borderRadius: 15}}> */}
        <img
          src={process.env.PUBLIC_URL + "/blog_slushie.png"}
          className="img-fluid"
          style={{ borderRadius: 5 }}
          alt="..."
        />
        {/* </div> */}
      </div>

      <div
        className="container-fluid"
        style={{ paddingLeft: 5, paddingRight: 5, paddingTop: 5 }}
      >
        <div className="row">

          <div className="col-4" style={{ paddingRight: 5 }}>
            <div className="card" style={{ height: 450, background: "#6C757D" }}>
              {/* <img src={process.env.PUBLIC_URL + "/blueraspslush.jpg"} style={{ height: "100%", width: "auto", borderRadius: 5}}/> */}
            </div>
            <div className="container" style={{height: 5}}></div>
            <div className="card" style={{ height: 320, background: "#212529" }}>
            </div>
          </div>

          <div className="col-4 ps-0 pe-0">
            <div className="card" style={{ height: 775 }}>
              <div className="card-body card-body d-flex flex-column justify-content-center align-items-center p-5">
                <h5 className="card-title titan-one-regular">
                  Blueberry Slush
                </h5>
                <h5 className="card-title lalezar-regular">$4.99</h5>
                <div className="d-grid">
                  <button
                    type="button"
                    className="btn btn-primary lalezar-regular p-2"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-4" style={{ paddingLeft: 5 }}>
            <div
              className="card"
              style={{
                background: "#212529",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: 420,
              }}
            >
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <h5
                  className="card-title titan-one-regular text-center mt-5 mb-4 align-middle"
                  style={{ color: "white", fontSize: 35 }}
                >
                  Love slushies again
                </h5>
                <div className="flexbox d-grid justify-content-center">
                  <button
                    type="button"
                    className="btn btn-secondary lalezar-regular mb-5"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <div className="container" style={{ height: 5 }}></div>
            <div
              className="card"
              style={{
                background: "",
                borderRadius: 5,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: 350,
              }}
            >
              <div className="card-body" style={{ background: "#6C757D",  borderRadius: 5}}>
                <h5
                  className="card-title titan-one-regular text-center mt-5 mb-4"
                  style={{ color: "white" }}
                >
                  Love slushies again
                </h5>
                <div className="flexbox d-grid justify-content-center">
                  <button
                    type="button"
                    className="btn lalezar-regular"
                    style={{background: "#212529", color: "white"}}
                  >
                    Learn More
                  </button>
                </div>
              </div>
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
            className=""
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

{
  /* <div className="container">
          <div className="row mt-5 mb-5">
            <div className="card shadow mx-auto"></div>
          </div>
        </div> */
}
{
  /* <div className="col-3 pe-0">
            <div class="card" style={{ borderRadius: 15 }}>
              <video
                  src={process.env.PUBLIC_URL + "/slushie_vid1.mp4"}
                  alt="..."
                  autoplay="true"
                  loop
                  style={{ borderRadius: 15, width: "100%", height: "auto"}}
                />
            </div>
          </div> */
}
