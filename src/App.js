import { useEffect, useState } from "react";
import { Box, Stack, Select, Input } from "@chakra-ui/react";
import DatePicker from "react-multi-date-picker";
import { Header } from "./header";
import { calcTw } from "./js/calc-tw";

function App() {
  const [twDay, setTwDay] = useState(0);
  const [eigyoubi , setEigyoubi] = useState(0);
  const [twRate, setTwRate] = useState(0);
  const [dayList , setDayList] = useState([]);

  const handleCalc = (event) => {
    const { twDay, eigyoubi, twRate, dayList } = calcTw(event.target.value);
    setTwDay(twDay);
    setEigyoubi(eigyoubi);
    setTwRate(twRate);
    setDayList(dayList);
  }

  useEffect(() => {
    const { twDay, eigyoubi, twRate, dayList } = calcTw('');
    setTwDay(twDay);
    setEigyoubi(eigyoubi);
    setTwRate(twRate);
    setDayList(dayList);
  }, [])

  // 営業日マップ
  const bizDayArray = [19, 19, 22, 20, 20, 22, 20, 22, 20, 21, 20, 21];

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
        <Box
          w={{ base: "sm", md: "2xl" }}
          display={"flex"}
          justifyContent={"center"}
        >
          ↑の入力欄を押下するとカレンダーが表示されるので、
          <br />
          出社日と有給日を選択して下さい。
          <br />
          表示された文字列を↓に貼り付け
        </Box>
        <Input w="300px" onChange={(e) => handleCalc(e)} />
        <p>TW日：{twDay}日 || 営業日：{eigyoubi}日 || TW率：{twRate}</p>
        <p>TW日一覧：{dayList}</p>
      </Stack>
    </>
  );
}

export default App;
