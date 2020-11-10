import React, { Fragment } from 'react';

const NoteViewer = (props) => {
  console.log(props)
  return (
    <Fragment>
      <h2>{props.note.note.title}</h2>
      <p>{props.note.note.body}</p>
      <button>Edit</button>
    </Fragment>
  );
}

export default NoteViewer;