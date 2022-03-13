import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import { Box, Stack, Select } from "@chakra-ui/react";
import { Header } from "./header";

function App() {
  // 営業日マップ
  const bizDayArray = [19, 18, 22, 20, 19, 22, 20, 22, 20, 20, 20, 22];

  // react-multi-date-picker
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate([today, tomorrow]));

  const [selectedMonth, setSelectedMonth] = useState([]);
  const [bizDay, setBizDay] = useState([]);

  const handleMonth = (event) => {
    const newSelectedMonth = event.target.value;
    setSelectedMonth(newSelectedMonth);

    const newBizDay = bizDayArray[newSelectedMonth - 1];
    setBizDay(newBizDay);
  };
  return (
    <>
      <Header title={"おもちゃ"} />
      <Stack
        spacing={"5"}
        align={"center"}
        fontSize={"xl"}
        mt="3"
        ml="3"
        mr="3"
      >
        <Select
          mt="3"
          placeholder="月を選択"
          w="200px"
          onChange={(e) => handleMonth(e)}
        >
          <option value="1">1月</option>
          <option value="2">2月</option>
          <option value="3">3月</option>
          <option value="4">4月</option>
          <option value="5">5月</option>
          <option value="6">6月</option>
          <option value="7">7月</option>
          <option value="8">8月</option>
          <option value="9">9月</option>
          <option value="10">10月</option>
          <option value="11">11月</option>
          <option value="12">12月</option>
        </Select>
        <Box>
          {selectedMonth}月の営業日は{bizDay}日です
        </Box>
        <Box
          w={{ base: "sm", md: "2xl" }}
          display={"flex"}
          justifyContent={"center"}
        >
          以下の入力欄を押下するとカレンダーが表示されるので、
          <br />
          日付を選択して下さい。あとはコピペで。
        </Box>
        <Box mt="3">
          <DatePicker
            sort={true}
            multiple
            format="D"
            style={{
              height: "40px",
              backgroundColor: "aliceblue",
              padding: "10px",
            }}
          />
        </Box>
      </Stack>
    </>
  );
}

export default App;
