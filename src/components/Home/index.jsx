import React from 'react'
import Header from '../Header'
import Chapters from '../Chapters'
import axios from 'axios';

export const HeaderPropsContext = React.createContext();
const HeaderPropsProvider = HeaderPropsContext.Provider;

class Home extends React.Component {
  allChapters;
  constructor(props) {
    super(props);

    this.state = {
      chapterId: 0,
      chapters: [],
      searchValue: '',
      city: 'all',
      order: 'ascending',
    };
  }

  componentDidMount() {
    axios.get('https://api.quran.com/api/v4/chapters').then((response) => {
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
      let chapters
      if (city !== 'all') {
        chapters = this.allChapters.filter(
          (chapter) => chapter.revelation_place.toLowerCase() === city
        );
      } else{
        chapters = this.allChapters
      }

      this.setState({ chapters });
    });
  };

  orderChangeHandler = (e) => {
    this.setState({ order: e.target.value }, () => {
      const order = this.state.order.toLocaleLowerCase();
      let chapters = this.state.chapters.slice();

      if (order === 'revelation_order') {
        chapters = chapters.sort(
          (firstEl, secondEl) =>
            firstEl.revelation_order - secondEl.revelation_order
        );
      } else {
        chapters = chapters.reverse();
      }
      this.setState({ chapters });
    });
  };

  render(){
    const { chapterId, chapters, searchValue, city, order } = this.state;
    return (
      <>
        <HeaderPropsProvider
          value={{
            searchChangeHandler: this.searchChangeHandler,
            searchValue,
            city,
            order,
            cityChangeHandler: this.cityChangeHandler,
            orderChangeHandler: this.orderChangeHandler,
          }}>
          <Header />
        </HeaderPropsProvider>

        <Chapters chapters={chapters} />
      </>
    );
  }
}

export default Home