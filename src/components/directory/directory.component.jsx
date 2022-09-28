import React from "react";
import "./directory.styles.scss";
import DirectoryItem from "../directory-item/directory-item.component";
import Landing from "../landing/landing.component";

function Directory() {
  const categories = [
    {
      id: 1,
      title: "Trending",
      imageUrl: "https://i.ibb.co/yQ3WJbL/c2.jpg",
      route: "shop/trending",
    },
    {
      id: 2,
      title: "New Arrivals",
      imageUrl: "https://i.ibb.co/ggpW9FF/c1.jpg",
      route: "shop/new arrivals",
    },
    {
      id: 3,
      title: "On Sale",
      imageUrl: "https://i.ibb.co/N6cVzY6/c3.jpg",
      route: "shop/on sale",
    },
  ];

  return (
    <div className="categories-container">
      <Landing />
      <p className="cat_tile">CATEGORIES</p>
      <div className="inner_width">
        {categories.map((category) => (
          <DirectoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}

export default Directory;
