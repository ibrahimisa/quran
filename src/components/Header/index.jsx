import React, { useContext } from 'react';
import { Stack } from 'react-bootstrap';
import quranpic from './koran.png';
import Search from './Search';
import Filter from './Filter';
import { HeaderPropsContext } from '../Home';

function Header() {
  const headerProps = useContext(HeaderPropsContext);
  const {
    searchChangeHandler,
    searchValue,
    city,
    order,
    cityChangeHandler,
    orderChangeHandler,
  } = headerProps;

  return (
    <header className='App-header'>
      <Stack gap={2}>
        <div className='d-flex gap-2 justify-center align-items-center'>
          <h1 className='display-4'>Quran</h1>
          <img src={quranpic} alt='quran picture' style={{ width: '50px' }} />
        </div>
        <Search
          searchChangeHandler={searchChangeHandler}
          searchValue={searchValue}
        />
        <Filter
          city={city}
          order={order}
          cityChangeHandler={cityChangeHandler}
          orderChangeHandler={orderChangeHandler}
        />
      </Stack>
    </header>
  );
}

export default Header;
