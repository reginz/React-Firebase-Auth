import React from "react";
import { ReadMore } from "../../functions/ReadMore";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import app from "../../firebase";
import { Expandable } from "../../functions/Expandable";

const db = app.firestore();

function GlossaryCard(props) {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      See Dictionary
    </Tooltip>
  );

  return (
    <div>
      <h3>{props.name}</h3>
      {props.isGlossary == 1 ? (
        <ReadMore>{props.meaning}</ReadMore>
      ) : (
        <div>
          {props.meaning.map((a) => {
            return (
              <li>
               
                {a}{" "}
                <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-info-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                  </svg>
                </OverlayTrigger>
                
              </li>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default GlossaryCard;
