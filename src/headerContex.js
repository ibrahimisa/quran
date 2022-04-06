import React from 'react';

const HeaderContext = React.createContext()

const [HeaderProvider, HeaderConsumer] = [
  HeaderContext.Provider,
  HeaderContext.Consumer,
];

export { HeaderProvider, HeaderConsumer };