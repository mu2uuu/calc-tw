import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import { Box, Container, Stack, Select } from "@chakra-ui/react";
import koyomi from "koyomi";

function App() {
  // 営業日マップ
  const bizDay = [19, 18, 23, 20, 19, 22, 20, 22, 21, 20, 20, 22];

  // 営業日
  const biz = koyomi.biz("2022-1-1", "2022-1-31");

  // 年を取得
  const date = new Date();
  const year = date.getFullYear();

  // react-multi-date-picker
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate([today, tomorrow]));
  const [values, setValues] = useState([today, tomorrow]);

  const [month, setMonth] = useState([]);
  // const [bix, setBiz] = useState();
  const handleMonth = (event) => {
    const newMonth = event.target.value;
    setMonth(newMonth);
    console.log("year: " + year);
    console.log("newMonth: " + newMonth);
    // 営業日
    const date = new Date(year, newMonth, 0);

    const startDay = year + "-" + newMonth + "-1";
    const lastDay = year + "-" + newMonth + "-" + date.getDate();
    const bizDay = koyomi.biz(startDay, lastDay);
    console.log(newMonth + "月の営業日は" + bizDay);
  };
  return (
    <>
      <Container maxW="8xl" centerContent>
        <Box
          h={20}
          w={"100%"}
          backgroundColor={"orange.200"}
          _
          textAlign={"center"}
        >
          {year}年テレワークの日付簡単算出
        </Box>
        <Stack spacing={"5"}>
          <Select
            mt="3"
            placeholder="月を選択"
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
          <Box>{month}月</Box>
          <Box>営業日：{biz}</Box>

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
