import React from "react";
import { Badge, Button } from "react-bootstrap";
import "./chapter.css";
import { ViewChapterConsumer } from "../../viewChapterContext";

function Chapter({ id, name, englishName, versesCount, place }) {
  return (
    <ViewChapterConsumer>
      {(viewChapter) => (
        <div
          className="chapter bg-light my-1 p-3 border border-1 border-dark rounded d-flex align-items-center gap-3"
          onClick={() => viewChapter(id)}
        >
          <h2>{id}</h2>
          <div>
            <h3 className="display-5 fs-4">
              {name}({englishName})
            </h3>{" "}
            <div className="text-dark opacity-75 fs-6">
              <span>{place}</span>
              <Badge bg="dark" className="ms-2">
                <i>{versesCount} verses</i>
              </Badge>
            </div>
          </div>
        </div>
      )}
    </ViewChapterConsumer>
  );
}

export default Chapter;
