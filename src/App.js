import React from 'react';
import KakaoMap from "./components/KakaoMap";
import SideBar from "./routes/sideBar";
import ToolBar from "./routes/toolBar";
import {Box, Center, HStack} from "@chakra-ui/react";
import RightBar from "./routes/rightBar";
import SearchBoxPoldButton from "./components/sideBar/SearchBoxPoldButton";

function App() {
  return (
      <div className="App">
          <HStack>
              <KakaoMap >
              </KakaoMap>
              <Center
                  w={"100%"}
                  h={"100vh"}
              >
                  <Box
                        w="0%"
                        h="100vh"
                        bg="gray.100"
                        color="black"
                        p={4}
                        boxShadow="lg"
                        zIndex={100}
                        left={0}
                        position={"absolute"}
                        id={"sideBarBox"}
                  >
                      <SideBar
                      />
                      <SearchBoxPoldButton />
                  </Box>
                  <Box
                      w="5%"
                      h="100vh"

                      color="black"
                      p={4}
                      zIndex={100}
                      right={0}
                      position={"absolute"}
                  >
                      <ToolBar />
                  </Box>

                  <Box>
                      <RightBar />
                  </Box>
              </Center>

          </HStack>


      </div>
  );
}

export default App;
