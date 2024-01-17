import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Cards from "../components/Cards.jsx";
// import { Card } from "react-bootstrap";

const Home = () => {
  const [foodCategory, setFoodCategory] = useState([]);
  const [foodItems, setFoodItems] = useState([]);
const [search,setSearch] = useState('');

  const loadData = async () => {
    try {
      let response = await fetch("http://localhost:5000/api/foodData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      response = await response.json();
      setFoodItems(response[0]);
      setFoodCategory(response[1]);
    // as 0th index is for food_items
     //as 1st index is for food_category
      /**AS IN BACKEND WE DID---   res.send([global.food_items, global.food_category]);  */
      // console.log(response[0], response[1]);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
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
                <div
                  className="d-flex justify-content-center"
                  role="search"
                  style={{ marginBottom: "5rem" }}
                >
                  <input
                    className="form-control me-2 "
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={search}
                    onChange={(e)=>{setSearch(e.target.value)}}
                  />
                  {/* <button
                    className="btn btn-outline-success text-white bg-red"
                    type="submit"
                  >
                    Search
                  </button> */}
                </div>
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

      <div className="container">
        {foodCategory.length > 0 ? (
          foodCategory.map((data) => (
            <div key={data._id} className="row mb-3">
              <div className="fs-1 m-2 ">{data.CategoryName}</div>
              <hr />
              {foodItems.length > 0 ? (
                foodItems
                  .filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase())))
                  .map((filterItems) => (
                    <div
                      key={filterItems._id}
                      className="col-12 col-md-6 col-lg-3"
                    >
                      <Cards foodItems={filterItems}
                        options={filterItems.options[0]}
                        // foodName={filterItems.name}
                        // options={filterItems.options[0]}
                        // imgSrc={filterItems.img}
                        // desc={filterItems.description}
                        ></Cards>
                    </div>
                  ))
              ) : (
                <div>No food items found</div>
              )}
            </div>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
