import { useColorMode } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

interface CustomComponentProps {
  children: React.ReactNode;
}

const DarkTheme: React.FC<CustomComponentProps> = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Button onClick={toggleColorMode}>Toggle {colorMode === "light" ? "Dark" : "Light"}</Button>
      {children}
    </>
  );
};

export default DarkTheme;
