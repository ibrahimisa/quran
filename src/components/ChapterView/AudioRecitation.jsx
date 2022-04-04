import React, { Component } from "react";
import { FormSelect } from "react-bootstrap";
import withDataFetch from "./withDataFetch";

function AudioPlayer({ audioUrl }) {
  return (
    <audio src={audioUrl} controls className="rounded">
      {" "}
      Your browser doesn't support audio files.
    </audio>
  );
}

function AudioRecitation({
  recitations,
  data: { audio_file: recitationData },
  id: recitationId,
  handleChange,
}) {
  return (
    <div className="d-flex justify-content-between gap-4">
      <AudioPlayer audioUrl={recitationData?.audio_url} />
      <FormSelect value={recitationId} onChange={handleChange} size="sm" className="w-50">
        {recitations.map(({ id, reciter_name, style }) => (
          <option key={id} value={id}>
            {reciter_name} ({style})
          </option>
        ))}
      </FormSelect>
    </div>
  );
}

export default withDataFetch(AudioRecitation, 2, {
  url: "https://api.quran.com/api/v4/chapter_recitations",
  query: null,
});
