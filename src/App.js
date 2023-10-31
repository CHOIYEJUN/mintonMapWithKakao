import React from 'react';
import KakaoMap from "./components/KakaoMap";
import SideBar from "./routes/sideBar";
import ToolBar from "./routes/toolBar";
import {Box, Center, HStack} from "@chakra-ui/react";

function App() {
  return (
      <div className="App">
          <HStack>
              <Center
                  w={"100%"}
                  h={"100vh"}
              >
                  <Box
                        w="20%"
                        h="100vh"
                        bg="gray.100"
                        color="black"
                        p={4}
                        boxShadow="lg"
                        zIndex={100}
                        left={0}
                        position={"absolute"}
                  >
                      <SideBar />
                  </Box>
                  <Box
                      w="5%"
                      h="100vh"
                      bg="gray.100"
                      color="black"
                      p={4}
                      boxShadow="lg"
                      zIndex={100}
                      right={0}
                      position={"absolute"}
                  >
                      <ToolBar />
                  </Box>
              </Center>
              <KakaoMap >
              </KakaoMap>
          </HStack>


      </div>
  );
}

export default App;
