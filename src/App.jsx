import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

import { ChakraProvider, extendTheme, Box, Container  } from '@chakra-ui/react';

import { CallsProvider, CallsContext } from './context/CallsProvider.jsx';

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

    },
  },
});

const App = () => {
  return (
    <CallsProvider>
    <ChakraProvider theme={customTheme} flexWrap="none">
      <Box className='container' display={"flex"} justifyContent={"center"} alignContent={"center"}>
        <Container boxShadow='dark-lg'm="15px" p="none" rounded='md' bg='white'h={"95%"}>
      <Header/>
      <Navbar/>
      <Footer/>
    </Container>
    </Box>
   </ChakraProvider>
   </CallsProvider>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
