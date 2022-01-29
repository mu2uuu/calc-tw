import { Center } from "@chakra-ui/react"
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
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <title>{title}</title>
      </Helmet>
      <Center h={10} backgroundColor={"orange.100"}>
        <Link to="/">
          {year}年テレワーク提出物のおもちゃ
        </Link>
      </Center>
      <Center>
        <Link to="/about" >about</Link>
      </Center>

    </>
  )
}