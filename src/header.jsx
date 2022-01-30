import { Box, Center, Heading } from "@chakra-ui/react"
import Helmet from "react-helmet";
import { Link } from "react-router-dom";

export const Header = (props) => {
  // 年を取得
  const date = new Date();
  const year = date.getFullYear();
  const { title } = props;

  return (
    <>
      <Helmet>
        <html lang="ja" />
        <meta charset="utf-8" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <title>{title}</title>
      </Helmet>
      <Box backgroundColor={"orange.100"} pt="3" pb="3">
        <Center h="100%">
          <Heading fontSize={{ base: "xl", md: "3xl" }}>
            <Link to="/">
              {year}年テレワーク提出物のおもちゃ
            </Link>
          </Heading>
        </Center>
      </Box>
      <Center fontSize={{ base: "xl", md: "3xl" }}>
        <Link to="/about" >about</Link>
      </Center>

    </>
  )
}