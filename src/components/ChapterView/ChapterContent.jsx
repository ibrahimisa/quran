import React from "react";
import "./chapter_content.css"

function ChapterContent({ verses }) {
  // credit: https://stackoverflow.com/questions/57606651/convert-english-numbers-to-arabic-text-using-javascript
  String.prototype.toArabic = function () {
    return this.replace(/\d/g, (d) => String.fromCharCode("0x066" + d));
  };

  return (
    <div
      className="fs-2 mb-3 text-center"
      dir="rtl"
      lang="ar"
      style={{ fontFamily: "arabic-font" }}
    >
      {verses.map((verse) => (
        <span>
          {verse.text_uthmani}
          {`${verse.id}`.toArabic()}
        </span>
      ))}
    </div>
  );
}

export default ChapterContent;
