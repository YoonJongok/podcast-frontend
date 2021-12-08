import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      <Helmet>Page Not Found | Podcast</Helmet>
      <h2>Page Not Found</h2>
      <h3>The page does not exist.</h3>
      <Link to={"/"}>Go back to homepage</Link>
    </div>
  );
};
