import React, { Component } from "react";
import { Badge } from "react-bootstrap";

function ChapterHeading({ heading }) {
  const {
    name_complex,
    translated_name,
    revelation_place,
    verses_count,
  } = heading;
  return (
    <div className="d-flex border-bottom-2 border-dark justify-content-between">
      <div>
        {name_complex} ({translated_name.name})
      </div>{" "}
      <div className="opacity-75">
        {revelation_place} <Badge bg="dark">{verses_count} verses</Badge>
      </div>
    </div>
  );
}

export default ChapterHeading;
