import React, { useState, Component } from "react";
import backArrow from "./arrow.png";
import ChapterHeading from "./ChapterHeading";
import ChapterContent from "./ChapterContent";
import AudioRecitation from "./AudioRecitation";
import Translation from "./Translation";
import { Card, Col } from "react-bootstrap";
import ReactLoader from "react-loader";
import axios from "axios";
import { ViewChapterConsumer } from "../../viewChapterContext";

class ChapterView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chapterData: {},
      loaded: false,
    };
  }

  componentDidMount() {
    this.fetchChapterData().then((chapterData) =>
      this.setState({ chapterData, loaded: true })
    );
  }

  fetchChapterData = async () => {
    const chapterData = {};
    let response = null;

    // https://api.quran.com/api/v4/chapters/${this.props.id}?language=en
    response = await axios.get(`chapter.json`);
    chapterData.heading = response.data.chapter;

    // https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=${this.props.id}
    response = await axios.get(`verses.json`);
    chapterData.verses = response.data.verses;

    // https://api.quran.com/api/v4/resources/recitations?language=en
    response = await axios.get("recitations.json");
    chapterData.recitations = response.data.recitations;

    // https://api.quran.com/api/v4/resources/translations
    response = await axios.get("translations.json");
    chapterData.translations = response.data.translations;

    return chapterData;
  };

  render() {
    const { heading, verses, recitations, translations } =
      this.state.chapterData;
    const loaded = this.state.loaded;

    return (
      <div>
        <ViewChapterConsumer>
          {(viewChapter) => {
            // viewChapter(0) means go back to home
            return (
              <div style={{ cursor: "pointer" }} onClick={() => viewChapter(0)}>
                <img
                  src={backArrow}
                  alt="back to home arrow"
                  style={{ width: "30px" }}
                />
              </div>
            );
          }}
        </ViewChapterConsumer>
        <ReactLoader loaded={loaded}>
          <div className="pt-3">
            <Card>
              <Card.Header>
                <ChapterHeading heading={heading} />
              </Card.Header>
              <Card.Body>
                <ChapterContent verses={verses} />
                <Translation
                  translations={translations}
                  numberOfVerses={verses?.length}
                  chapterId={this.props.id}
                />
              </Card.Body>
              <Card.Footer>
                <AudioRecitation
                  recitations={recitations}
                  chapterId={this.props.id}
                />
              </Card.Footer>
            </Card>
          </div>
        </ReactLoader>
      </div>
    );
  }
}

export default ChapterView;
