import { Flex, Box} from '@chakra-ui/react'
import './App.css'

//Components
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Header from './components/Header';
import Registration from './components/Registration';
import SideNav from './components/SideNav';


function App(){
  return (
    <>
        <Flex>
            <Box  width='25%'>
                <SideNav />
            </Box>
            <Box w='75%'>
                <Header />
                <About />
                <Education />
                <Registration />
                <Contact />
            </Box>
        </Flex>
    </>
  )
}

export default App;
