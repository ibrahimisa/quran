import React from "react";
import Chapter from "./Chapter";
import Scroll from "../Scroll";
import ReactLoader from "react-loader";

function Chapters({ chapters }) {
  const loaded = !!chapters.length;
  return (
    <Scroll>
      <ReactLoader loaded={loaded}>
        {chapters.map((chapter) => (
          <Chapter
            key={chapter.id}
            id={chapter.id}
            name={chapter.name_simple}
            englishName={chapter.translated_name.name}
            versesCount={chapter.verses_count}
            place={chapter.revelation_place}
          />
        ))}
      </ReactLoader>
    </Scroll>
  );
}

export default Chapters;
