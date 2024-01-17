import React from 'react'


const Carousel = () => {
  return (
    <div id="carousels">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="false"
        style={{ objectFit: "contain !important" }}
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://source.unsplash.com/random/1920x1080/?momos"
              className="d-block w-100"
              style={{ filter: "brightness(60%)", height: "40rem" }}
              alt="..."
            />
            <div
              className="carousel-caption d-none d-md-block"
              style={{ zIndex: "10" }}
            >
              <form
                className="d-flex "
                role="search"
                style={{ marginBottom: "5rem" }}
              >
                <input
                  className="form-control me-2 "
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success text-white bg-red"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/1920x1080/?burger"
              className="d-block w-100"
              style={{ filter: "brightness(60%)", height: "40rem" }}
              alt="..."
            />
            <div
              className="carousel-caption d-none d-md-block"
              style={{ zIndex: "10" }}
            >
              <form
                className="d-flex"
                role="search"
                style={{ marginBottom: "5rem" }}
              >
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/1920x1080/?samosa"
              className="d-block w-100"
              style={{ filter: "brightness(60%)", height: "40rem" }}
              alt="..."
            />
            <div
              className="carousel-caption d-none d-md-block"
              style={{ zIndex: "10" }}
            >
              <form
                className="d-flex"
                role="search"
                style={{ marginBottom: "5rem" }}
              >
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/1920x1080/?idli"
              className="d-block w-100"
              style={{ filter: "brightness(60%)", height: "40rem" }}
              alt="..."
            />
            <div
              className="carousel-caption d-none d-md-block"
              style={{ zIndex: "10" }}
            >
              <form
                className="d-flex"
                role="search"
                style={{ marginBottom: "5rem" }}
              >
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/1920x1080/?pizza"
              className="d-block w-100"
              style={{ filter: "brightness(60%)", height: "40rem" }}
              alt="..."
            />
            <div
              className="carousel-caption d-none d-md-block"
              style={{ zIndex: "10" }}
            >
              <form
                className="d-flex"
                role="search"
                style={{ marginBottom: "5rem" }}
              >
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel
