import React from "react";
import PropTypes from "prop-types";
import {
  CardWarrper,
  Avater,
  Name,
  PrimaryLink,
  Time,
  Button,
  NormalLink,
  Title,
  Body,
  More,
} from "./Componants";
import { Flex } from "../NavBar/Component";

/**
 * Component for Display article info.
 *
 * @component
 * @example
 * const item = {
  "title": "Total",
  "slug": "total-7rk37q",
  "body": "File manager",
  "createdAt": "2021-05-04T12:31:54.906Z",
  "updatedAt": "2021-05-04T12:31:54.906Z",
  "tagList": [],
  "description": "About Total Commander",
  "author": {
    "username": "N1",
    "bio": null,
    "image": "https://static.productionready.io/images/smiley-cyrus.jpg",
    "following": false
  },
  "favorited": false,
  "favoritesCount": 0
}
 * 
 *  *
 *  return (
 *   <Card item={item} />
 * )
 */

function Card({ item }) {
  /**
   * format the time to UTC format
   * @return  {string}            Time that article is created in UTC format
   */

  function getTime() {
    const data = new Date(item.createdAt);
    const time = data.toUTCString();
    return time;
  }

  return (
    <CardWarrper>
      <Flex>
        <div>
          <Avater src={item.author.image} />
          <Name>
            <PrimaryLink href="/">{item.author.username} </PrimaryLink>
            <Time>{getTime()}</Time>
          </Name>
        </div>
        <Button>
          <i className="fas fa-heart" /> {item.favoritesCount}
        </Button>
      </Flex>

      <NormalLink href="/">
        <Title>{item.title}</Title>
        <Body>{item.body.slice(0, 50)}</Body>
        <More>Reade More ...</More>
      </NormalLink>
    </CardWarrper>
  );
}

Card.propTypes = {
  /**
   * Item is object contain info about article
   */
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Card;
