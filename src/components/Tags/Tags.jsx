import React, { useEffect, useState } from "react";
import axios from "axios";
import PropType from "prop-types";
import { Tag, TagLink, TagsWarrper, TagTittle } from "./Componants";

/**
 * Component show you all tags and you can select the tag that you want
 *
 * @component
 * @example
 *  const [tag,setTag]=useState("NoTag");
 *  *
 *  return (
 *   <Tag setTag={setTag} />
 * )
 */

function Tags({ setTag }) {
  const [tags, setTags] = useState([]);
  useEffect(() => {
    const getTags = async () => {
      try {
        const res = await axios.get(
          "https://conduit.productionready.io/api/tags"
        );
        setTags(res.data.tags);
      } catch (err) {
        setTags([]);
      }
    };
    getTags();
  }, []);

  /**
   * Set tag to the new Tag
   * @param newTag the new tag
   */
  const handelSetTag = (newTag) => {
    setTag(newTag);
  };

  return (
    <TagsWarrper>
      <TagTittle>Popular Tags</TagTittle>
      {tags.map((item) => (
        <TagLink onClick={() => handelSetTag(item)} href="/" key={item}>
          <Tag>{item}</Tag>
        </TagLink>
      ))}
    </TagsWarrper>
  );
}

Tags.propTypes = {
  /**
   * Set tag to the new Tag
   */
  setTag: PropType.func.isRequired,
};

export default Tags;
