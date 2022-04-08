import React from "react";
import { ReadMore } from "../../functions/ReadMore";

function GlossaryCard(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <ReadMore>{props.meaning}</ReadMore>
    </div>
  );
}

export default GlossaryCard;
