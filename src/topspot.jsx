import React from 'react';

export default props => (
  <div className='well'>
    <div className='card-header text-center'><h4>{props.name}</h4></div>
    <div className='card-body text-center'><p>{props.description}</p></div>
    <div className='card-footer text-center'><a className='btn btn-info text-white' href={`https://maps.google.com/?q=${props.location}`}>See in Google Maps!</a></div>
  </div>
);