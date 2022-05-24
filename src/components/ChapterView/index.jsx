import React, { useState, useEffect } from "react";
import backArrow from "./arrow.png";
import ChapterHeading from "./ChapterHeading";
import ChapterContent from "./ChapterContent";
import AudioRecitation from "./AudioRecitation";
import Translation from "./Translation";
import { Card, Col } from "react-bootstrap";
import ReactLoader from "react-loader";
import axios from "axios";
import { Link, useParams } from 'react-router-dom';

function ChapterView() {
  const [chapterData, setChapterData] = useState({});
  const [loaded, setLoaded] = useState(false);

  const { heading, verses, recitations, translations } = chapterData;
  const chapterId = useParams().chapterId;

  const fetchChapterData = async () => {
    const chapterData = {};
    let response = null;

    response = await axios.get(
      `https://api.quran.com/api/v4/chapters/${chapterId}?language=en`
    );
    chapterData.heading = response.data.chapter;

    response = await axios.get(
      `https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=${chapterId}`
    );
    chapterData.verses = response.data.verses;

    response = await axios.get(
      'https://api.quran.com/api/v4/resources/recitations?language=en'
    );
    chapterData.recitations = response.data.recitations;

    response = await axios.get(
      'https://api.quran.com/api/v4/resources/translations'
    );
    chapterData.translations = response.data.translations;

    return chapterData;
  };

  useEffect(() => {
    fetchChapterData().then((chapterData) => {
      setChapterData(chapterData);
      setLoaded(true);
    });
  }, []);

  return (
    <div>
      <Link to='/'>
        <img
          src={backArrow}
          alt='back to home arrow'
          style={{ width: '30px' }}
        />
      </Link>
      <ReactLoader loaded={loaded}>
        <div className='pt-3'>
          <Card>
            <Card.Header>
              <ChapterHeading heading={heading} />
            </Card.Header>
            <Card.Body>
              <ChapterContent verses={verses} />
              <Translation
                translations={translations}
                numberOfVerses={verses?.length}
                chapterId={chapterId}
              />
            </Card.Body>
            <Card.Footer>
              <AudioRecitation
                recitations={recitations}
                chapterId={chapterId}
              />
            </Card.Footer>
          </Card>
        </div>
      </ReactLoader>
    </div>
  );
}

export default ChapterView;
