import { Box } from '@chakra-ui/react'
import Landing from './pages/Landing'
import {TabProvider} from './store/tabContext'

const App = () => {
  return (
    <Box>
      <TabProvider>
        <Landing />
      </TabProvider>
    </Box>
  );
}

export default App
