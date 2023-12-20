import React from "react";
import { Link } from "react-router-dom";
import Blog from "../Items/Blog";

const blogsData = [
  {
    id: 1,
    title: "My Truth About Wordpress",
    category: "Wordpress",
    featureImage: "images/blog/wordpress-logo.png",
    date: "13 March, 2021",
    author: "Sifi My",
    slug: "my-truth-about-wordpress",
  },
  {
    id: 2,
    title: "Being Anonymous is way more Fun",
    category: "Wordpress",
    featureImage: "images/blog/internet.jpg",
    date: "26 Oktober, 2023",
    author: "Sifi My",
    slug: "being-anonymous-is-way-more-fun",
  },
];

function Blogs() {
  return (
    <>
      <div className="row">
        {blogsData.map((blog) => (
          <div className="col-md-4" key={blog.id}>
            <Blog blog={blog} />
          </div>
        ))}
      </div>
      <div className="spacer" data-height="50"></div>
      <div className="text-center">
        <Link to="/blogs" className="btn btn-default">
          Show All Blogs
        </Link>
      </div>
    </>
  );
}

export default Blogs;
