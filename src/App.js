import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import { Box, Container, Stack } from "@chakra-ui/react";

function App() {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate([today, tomorrow]));
  const [values, setValues] = useState([today, tomorrow]);
  return (
    <>
      <Container maxW="8xl" centerContent>
        <Box
          h={20}
          w={"100%"}
          backgroundColor={"orange.200"}
          textAlign={"center"}
        >
          テレワークの日付簡単算出
        </Box>
        <Stack>
          <Box mt="3">
            <DatePicker
              sort={true}
              multiple
              value={values}
              onChange={setValues}
              format="D"
            />
          </Box>
        </Stack>
      </Container>
    </>
  );
}

export default App;
