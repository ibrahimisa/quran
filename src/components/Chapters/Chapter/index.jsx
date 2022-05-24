import React from 'react';
import { Badge } from 'react-bootstrap';
import './index.css';
import { Link } from 'react-router-dom';
import Info from './Info';

function Chapter({ id, name, englishName, versesCount, place }) {

  return (
    <div className='chapter bg-light my-1 p-3 border border-1 border-dark rounded' style={{ 
      position: 'relative'
    }}>
      <Link to={`/quran/${id}`} className='d-flex align-items-center gap-3'>
        <h2>{id}</h2>
        <div>
          <h3 className='display-5 fs-4'>
            {name}({englishName})
          </h3>{' '}
          <div className='text-dark opacity-75 fs-6'>
            <span>{place}</span>
            <Badge bg='dark' className='ms-2'>
              <i>{versesCount} verses</i>
            </Badge>
          </div>
        </div>
      </Link>
      <Info style={{ 
        position: 'absolute',
        top: '50%',
        right: '10px',
        transform: 'translateY(-50%'
       }} id={id} name={name} />
    </div>
  );
}

export default Chapter;