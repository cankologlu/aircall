import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
import Navbar from './components/Navbar.jsx';

import { ChakraProvider,extendTheme  } from '@chakra-ui/react';

import { Box } from '@chakra-ui/react';

const customTheme = extendTheme({
  styles: {
    global: {
     
      html: {
        margin: 0,
        padding: 0,
        border: 0,
        font: 'inherit',
        fontSize: '100%',
        
      },
      body: {
        background: '#233142',
        fontFamily: 'helvetica, arial, sans-serif',
        fontSize: '13px',
        color: '#333333',
        lineHeight: '1',
        
      },
      h1: {
      },
      h2: {
      },
      h3: {
      },
      ul: {
      },
      li: {
      },
      '*::before': {boxSizing:"none"},
      '*::after': {boxSizing:"none"}
    },
  },
});

const App = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <Box className='container' mt="750px">
      <Header/>
      <Navbar/>
    </Box>
   </ChakraProvider>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
