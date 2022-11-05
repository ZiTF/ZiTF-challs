import { useState } from "react";
import {
  Input,
  FormControl,
  FormLabel,
  Button,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

const PasswordInput = ({ value, isInvalid, field, onChange, ...props}) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <FormControl id="password" marginBottom="1rem">
      <FormLabel>Password</FormLabel>
      <InputGroup>
        <Input
          {...props}
          {...field}
          value={value}
          isInvalid={isInvalid}
          pr="4.5rem"
          isRequired={true}
          type={show ? "text" : "password"}
          placeholder="Enter password"
          onChange={onChange}
        />
        <InputRightElement width="4.5rem">
          <Button
            h="1.75rem"
            size="sm"
            onClick={handleClick}
            bg={show ? "red.100" : "telegram.50"}
          >
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
};

export default PasswordInput;
