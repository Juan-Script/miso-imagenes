import { UploadButton } from "../src/utils/uploadthing";
import "@uploadthing/react/styles.css";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  useToast,
} from "@chakra-ui/react";
import copy from "clipboard-copy";

export default function Home() {
  const toast = useToast();
  <img
    src="img_girl.jpg"
    alt="Girl in a jacket"
    width="500"
    height="600"
  ></img>;
  const handleClientUploadComplete = (res: any) => {
    console.log("Files: ", res);
    const fileUrl = res[0].fileUrl;
    copy(fileUrl);
    toast({
      title: "Imagen copiada con éxito.",
      description: "Pegue la imagen donde quieras utilizarla",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
  };

  const handleUploadError = (error: any) => {
    alert(`ERROR! ${error.message}`);
  };

  return (
    <Flex
      margin="auto"
      padding="10px"
      justifyContent="center"
      alignItems="center"
      h="100vh"
    >
      <Card maxW="sm" flexDirection="column" alignItems="center">
        <CardHeader>
          <Box>
            <Heading size="md">Suba las imágenes que desees</Heading>
          </Box>
        </CardHeader>
        <CardBody>
          {" "}
          <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={handleClientUploadComplete}
              onUploadError={handleUploadError}
            />
          </main>
        </CardBody>
        <CardFooter>
          <p>No olvide subirlas con nombre adecuado</p>
        </CardFooter>
      </Card>
    </Flex>
  );
}
