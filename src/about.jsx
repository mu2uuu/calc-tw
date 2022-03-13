import { Box, Link, Text } from "@chakra-ui/react"
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Header } from "./header"

export const About = () => {
  return (
    <>
      <Header title={"あばうと"} />
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"} fontSize={"xl"}>
        <Box mt="3" ml="3">
          <Text>提出物書類用のおもちゃです(おもろくないですが、、)</Text>
          <Text>ほんの少しだけ、提出物の作成が楽になる、かも、です。</Text>
          <Text>
            営業日は
            <Link href="https://eigyoubi-toka.com/eigyoubi/"
              color="teal.500"
              isExternal>こちら<ExternalLinkIcon verticalAlign={"center"} /></Link>
            のサイトに準拠しておりますが、特例が入ったら反映させる予定です。
          </Text>
          <Text>
            (2022年度版は1月を既に反映済み)
          </Text>
          <Text mt="3">
            コメントありましたら、フォーム用意したので
            <Link href="https://docs.google.com/forms/d/1kKWMBHQNV8ehkToqiw6__yQ6NYhCXdnpVqyPHnFsANM/edit"
              color="teal.500"
              isExternal>こちら<ExternalLinkIcon verticalAlign={"center"} /></Link>
            にお願いします。
          </Text>
          <Text mt="3" fontWeight={"bold"}>
            作成者の都合で無断で、閉鎖する可能性があること予めご了承下さい。<br />
          </Text>
        </Box>
      </Box>
    </>
  )
}