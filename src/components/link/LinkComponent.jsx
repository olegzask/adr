import React from "react";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../components/helperFunctions/helpers";
import { BsArrowRight } from "react-icons/bs";

const LinkComponent = ({ opts }) => {
  const { name, linkTo, clName, func } = opts;

  return (
    <Link onClick={func} className="button-link" to={`/${linkTo}`}>
      <div className={`button-link-container ${clName}`}>
        {name}
        <BsArrowRight className={`link-arrow ${clName}`} />
      </div>
    </Link>
  );
};

export default LinkComponent;
