import { Center } from "@chakra-ui/react"
import { Header } from "./header"

export const NotFound = () => {
  return (
    <>
      <Header title={"404"} />
      <Center>
        <main style={{ padding: "1rem" }}>
          <p>良いことあるといいね！</p>
        </main>
      </Center>

    </>
  )
}