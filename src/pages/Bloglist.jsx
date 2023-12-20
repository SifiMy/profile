import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout"; //Use and import Layout2 when you use multipage
import Blog from "../components/Items/Blog";
import Pagination from "../components/Items/Pagination";
import { Link } from "react-router-dom";

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
    title: "The Ugly Truth About Internet",
    category: "Internet",
    featureImage: "images/blog/internet.jpg",
    date: "13 March, 2021",
    author: "Sifi My",
    slug: "the-ugly-truth-about-internet",
  },

];

function Bloglist() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  useEffect(() => {
    setPosts(blogsData);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  return (
    <Layout>
      <section className="shadow-blue white-bg padding mt-0">
        <div className="row -mt-50">
          {currentPosts.map((blog) => (
            <div className="col-md-6 mt-50" key={blog.id}>
              <Blog blog={blog} />
            </div>
          ))}
        </div>
        <div className="spacer" data-height="50"></div>
        {!(posts.length > postsPerPage) ? null : (
          <Pagination
            itemsPerPage={postsPerPage}
            totalItems={posts.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        )}
        <div className="text-center">
          <Link to="/" className="btn btn-default">
            Home
          </Link>
        </div>

      </section>
    </Layout>
  );
}

export default Bloglist;
