import React from "react";
import "./chapter_content.css"
import Scroll from '../Scroll';

function ChapterContent({ verses }) {
  // credit: https://stackoverflow.com/questions/57606651/convert-english-numbers-to-arabic-text-using-javascript
  String.prototype.toArabic = function () {
    return this.replace(/\d/g, (d) => '٠١٢٣٤٥٦٧٨٩'[d]);
  };

  return (
    <div
      className='fs-2 mb-3 text-center'
      dir='rtl'
      lang='ar'
      style={{ fontFamily: 'arabic-font' }}>
      <Scroll style={{ maxHeight: '50vh' }}>
        {verses.map((verse) => (
          <span>
            {verse.text_uthmani}
            {`${verse.verse_key.replace(/\d*:/, '')}`.toArabic()}
          </span>
        ))}
      </Scroll>
    </div>
  );
}

export default ChapterContent;
