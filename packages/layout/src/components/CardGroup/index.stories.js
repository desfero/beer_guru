import React from "react";
import { storiesOf } from "@storybook/react";

import { cardType, Card, CardGroup, LinkCard } from "./";
import { title, desc } from "./index.const";

storiesOf("CardGroup", module)
  .add("Card/default", () => (
    <CardGroup>
      <Card type={cardType.default}>
        <img
          src="https://images.punkapi.com/v2/7.png"
          height="100"
          alt="Example image"
        />
        <h2>{title}</h2>
        <p>{desc}</p>
      </Card>
    </CardGroup>
  ))
  .add("Card/lite", () => (
    <CardGroup>
      <Card type={cardType.lite}>
        <img
          src="https://images.punkapi.com/v2/7.png"
          height="100"
          alt="Example image"
        />
        <h2>{title}</h2>
        <p>{desc}</p>
      </Card>
    </CardGroup>
  ))
  .add("LinkCard/default", () => (
    <CardGroup>
      <LinkCard type={cardType.default} to={"Modal"}>
        <img
          src="https://images.punkapi.com/v2/7.png"
          height="100"
          alt="Example image"
        />
        <h2>{title}</h2>
        <p>{desc}</p>
      </LinkCard>
    </CardGroup>
  ))
  .add("LinkCard/lite", () => (
    <CardGroup>
      <LinkCard type={cardType.lite} to={"Modal"}>
        <img
          src="https://images.punkapi.com/v2/7.png"
          height="100"
          alt="Example image"
        />
        <h2>{title}</h2>
        <p>{desc}</p>
      </LinkCard>
    </CardGroup>
  ))
  .add("multiple element", () => (
    <CardGroup>
      <Card type={cardType.default}>
        <img
          src="https://images.punkapi.com/v2/7.png"
          height="100"
          alt="Example image"
        />
        <h2>{title}</h2>
        <p>{desc}</p>
      </Card>
      <Card type={cardType.default}>
        <img
          src="https://images.punkapi.com/v2/7.png"
          height="100"
          alt="Example image"
        />
        <h2>{title}</h2>
        <p>{desc}</p>
      </Card>
      <Card type={cardType.default}>
        <img
          src="https://images.punkapi.com/v2/7.png"
          height="100"
          alt="Example image"
        />
        <h2>{title}</h2>
        <p>{desc}</p>
      </Card>
    </CardGroup>
  ));
