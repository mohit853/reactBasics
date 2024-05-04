import React from 'react';

export default function Pagination({ gotoPrevPage, gotoNextPage }) {
  return (
    <div>
      <button onClick={gotoPrevPage}>Prev</button>
      <button onClick={gotoNextPage}>Next</button>
    </div>
  );
}
