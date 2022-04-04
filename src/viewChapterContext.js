import React from 'react';

const ViewChapterContext = React.createContext(false)

const [ViewChapterProvider, ViewChapterConsumer] = [
  ViewChapterContext.Provider,
  ViewChapterContext.Consumer,
];

export { ViewChapterProvider, ViewChapterConsumer };