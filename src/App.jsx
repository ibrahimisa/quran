import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import './App.css'
import Header from "./components/Header";
import Chapters from "./components/Chapters";
import { Col } from "react-bootstrap";
import ChapterView from "./components/ChapterView";
import { ViewChapterProvider } from "./viewChapterContext";
import axios from "axios";

class App extends Component {
  allChapters;
  constructor(props) {
    super(props);

    this.state = {
      chapterId: 0,
      chapters: [],
      searchValue: "",
      city: "all",
      order: "ascending",
    };
  }

  componentDidMount() {
    axios.get("/chapters.json").then((response) => {
      this.allChapters = response.data.chapters;
      this.setState({ chapters: response.data.chapters });
    });
  }

  searchChangeHandler = (e) => {
    this.setState({ searchValue: e.target.value }, () => {
      const searchValue = this.state.searchValue.toLowerCase();

      let chapters = this.allChapters;
      if (searchValue) {
        chapters = chapters
          .slice()
          .filter(
            (chapter) =>
              chapter.name_simple.toLowerCase().includes(searchValue) ||
              chapter.translated_name.name.toLowerCase().includes(searchValue)
          );
      }

      this.setState({ chapters });
    });
  };

  cityChangeHandler = (e) => {
    this.setState({ city: e.target.value }, () => {
      const city = this.state.city.toLocaleLowerCase();
      let chapters = this.state.chapters.slice();
      if (city !== "all") {
        chapters = chapters.filter(
          (chapter) => chapter.revelation_place.toLowerCase() === city
        );
      }

      this.setState({ chapters });
    });
  };

  orderChangeHandler = (e) => {
    this.setState({ order: e.target.value }, () => {
      const order = this.state.order.toLocaleLowerCase();
      let chapters = this.state.chapters.slice();

      if (order === "revelation_order") {
        chapters = chapters.sort( (firstEl, secondEl) => firstEl.revelation_order - secondEl.revelation_order )
      } else {
        chapters = chapters.reverse();
      }
      this.setState({ chapters });
    });
  };

  viewChapter = (chapterId) => {
    this.setState({ chapterId });
  };

  render() {
    const { chapterId, chapters, searchValue, city, order } = this.state;
    return (
      <Col md={6} className="mx-auto mt-5">
        <ViewChapterProvider value={this.viewChapter}>
          {chapterId ? (
            <ChapterView id={chapterId} />
          ) : (
            <>
              <Header
                childrenProps={{
                  search: {
                    searchChangeHandler: this.searchChangeHandler,
                    searchValue,
                  },
                  filter: {
                    city,
                    order,
                    cityChangeHandler: this.cityChangeHandler,
                    orderChangeHandler: this.orderChangeHandler,
                  },
                }}
              />
              <Chapters chapters={chapters} />
            </>
          )}
        </ViewChapterProvider>
      </Col>
    );
  }
}

export default App;
