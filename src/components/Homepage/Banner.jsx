import React from "react";

const Banner = () => {
  return (
    <div className=" w-4/5 py-10  mx-auto">
      <div className="carousel container ">
        {banners.map((banner, index) => (
          <div
            style={{
              backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7),rgba(0,0,0,0.3)), url(/assets/images/banner/${
                index + 1
              }.jpg)`,
            }}
            key={index}
            id={`slide${index + 1}`}
            className="carousel-item relative w-full h-[90vh] bg-cover rounded-l"
          >
            <div className="h-full w-full flex  items-center pl-36">
              <div>
                <h1 className="text-5xl font-bold">{banner.title}</h1>
                <p>{banner.description}</p>
                <div className="space-x-6">
                  <button className="btn btn-primary">Discover More</button>
                  <button className="btn btn-primary btn-outline">
                    Latest Project
                  </button>
                </div>{" "}
              </div>
            </div>
            <div></div>
            <div className="absolute  bottom-12 right-12 space-x-2 transform justify-between">
              <a href={banner.previous} className="btn btn-circle">
                ❮
              </a>
              <a href={banner.next} className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const banners = [
  {
    title: "Affordable Price for car servicing",
    description:
      "There are many variations of passages of available, but the major",
    next: "#slide2",
    previous: "#slide4",
  },
  {
    title: "Affordable Price for car servicing",
    description:
      "There are many variations of passages of available, but the major",
    next: "#slide3",
    previous: "#slide1",
  },
  {
    title: "Affordable Price for car servicing",
    description:
      "There are many variations of passages of available, but the major",
    next: "#slide4",
    previous: "#slide2",
  },
  {
    title: "Affordable Price for car servicing",
    description:
      "There are many variations of passages of available, but the major",
    next: "#slide1",
    previous: "#slide3",
  },
];

export default Banner;
