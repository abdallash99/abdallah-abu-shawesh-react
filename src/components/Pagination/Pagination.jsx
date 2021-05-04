import React from "react";
import PropType from "prop-types";
import _ from "lodash";
import { PaginationItem, PaginationLink, PaginationWarrper } from "./componant";

/**
 * Component Pagination it show all pages and you can click and change the page
 *
 * @component
 * @example
 *  const [currentPage,setCurrentPage]=useState(1);
 *  const numberOfArticle=10;
 *  *
 *  return (
 *   <Pagination numberOfArticle={numberOfArticle} currentPage={currentPage} setCurrentPage={setCurrentPage} />
 * )
 */

function Pagination({ numberOfArticle, currentPage, setCurrentPage }) {
  const items = _.range(1, numberOfArticle / 10 + 1);
  const handelClick = (page) => {
    setCurrentPage(page);
  };
  return (
    <PaginationWarrper>
      {items.map((item) => (
        <PaginationLink onClick={() => handelClick(item)} key={item}>
          <PaginationItem active={item === currentPage}>{item}</PaginationItem>
        </PaginationLink>
      ))}
    </PaginationWarrper>
  );
}

Pagination.propTypes = {
  /**
   * numberOfArticle the total number of article
   */
  numberOfArticle: PropType.number.isRequired,
  /**
   * currentPage the current page that the user on it right now
   */
  currentPage: PropType.number.isRequired,
  /**
   * function to change the current page
   *
   * */
  setCurrentPage: PropType.func.isRequired,
};

export default Pagination;
