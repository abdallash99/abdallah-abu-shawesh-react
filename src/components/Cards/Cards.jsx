import React, { useEffect, useState } from "react";
import axios from "axios";
import PropType from "prop-types";
import Card from "../Card/Card";
import { CardsWarrper, Tab, Tabs } from "./Componants";
import Pagination from "../Pagination/Pagination";

/**
 * Component for showing List of article card with pagination.
 *
 * @component
 * @example
 * const [tag,setTag]=useState("NoTag");
 *
 *  *
 *  return (
 *   <Card tag={tag} setTag={setTag} />
 * )
 */

function Cards({ tag, setTag }) {
  const [articles, setArticles] = useState([]);
  const [numberOfArticle, setNumberOfArticle] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const PAGE_SIZE = 10;

  useEffect(() => {
    const getArticle = async () => {
      const offset = (currentPage - 1) * PAGE_SIZE;
      const tagQuery = tag === "NoTag" ? "" : `&tag=${tag}`;
      const res = await axios.get(
        `https://conduit.productionready.io/api/articles?limit=${PAGE_SIZE}&offset=${offset}${tagQuery}`
      );
      setArticles(res.data.articles);
      setNumberOfArticle(res.data.articlesCount);
    };

    getArticle();
  }, [currentPage, tag]);
  return (
    <>
      <CardsWarrper>
        <Tabs>
          <Tab active={tag === "NoTag"} onClick={() => setTag("NoTag")}>
            Global Feed
          </Tab>
          {tag !== "NoTag" ? <Tab active>{tag}</Tab> : null}
        </Tabs>

        {articles.map((item) => (
          <Card key={item.slug} item={item} />
        ))}
      </CardsWarrper>
      <Pagination
        numberOfArticle={numberOfArticle}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
}

Cards.propTypes = {
  /**
   * Tag is the selected tag for now by default it is value "NoTag"
   */
  tag: PropType.string,
  /**
   * setTag is function that set the value of the tag
   */
  setTag: PropType.func.isRequired,
};

Cards.defaultProps = {
  tag: "NoTag",
};

export default Cards;
