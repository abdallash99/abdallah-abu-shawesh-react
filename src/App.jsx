import React, { useState } from "react";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import Tags from "./components/Tags/Tags";
import Cards from "./components/Cards/Cards";
import { CardsWarrper, Grid, TagsWarrper } from "./Components";
import { Container } from "./components/NavBar/Component";

/**
 * Home Page Component
 *
 * @component
 * @example
 *
 *  *
 *  return (
 *   <App />
 * )
 */
function App() {
  const [tag, setTag] = useState("NoTag");
  return (
    <>
      <NavBar />
      <Header />
      <Container>
        <Grid>
          <CardsWarrper>
            <Cards tag={tag} setTag={setTag} />
          </CardsWarrper>
          <TagsWarrper>
            <Tags tag={tag} setTag={setTag} />
          </TagsWarrper>
        </Grid>
      </Container>
    </>
  );
}

export default App;
