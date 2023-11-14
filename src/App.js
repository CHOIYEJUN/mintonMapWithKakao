import React from 'react';
import KakaoMap from "./components/KakaoMap";
import SideBar from "./routes/sideBar";
import ToolBar from "./routes/toolBar";
import {Box, Center, HStack, useToast} from "@chakra-ui/react";
import RightBar from "./routes/rightBar";
import SearchBoxPoldButton from "./components/sideBar/SearchBoxPoldButton";
import SearchBar from "./components/sideBar/SearchBar";
import SearchResultBox from "./components/sideBar/SearchResultBox";
import MakePinButton from "./components/sideBar/makePinButton";
import {useRecoilState} from "recoil";
import {pagenationState, serchResultState} from "./states/MapStates";

function App() {

    return (
      <div className="App">
          <HStack>
              <KakaoMap >
              </KakaoMap>
              <Box
                  w={'100%'}
                  zIndex={'120'}
                  position={'absolute'}
                  top={'0'}
                  margin={'0 auto'}
              >
                  <SearchBar />

                  <ToolBar />
              </Box>

              <Box
                  w={'100%'}
                    zIndex={'120'}
                    position={'absolute'}
                    bottom={'50px'}
                    margin={'0 auto'}
              >
                  <SearchResultBox />
                  <SearchBoxPoldButton />
              </Box>

                <Box>
                    <RightBar />
                </Box>


          </HStack>
      </div>
  );
}

export default App;
