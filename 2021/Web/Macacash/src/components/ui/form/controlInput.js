import { Input, FormControl, FormLabel } from "@chakra-ui/react";

const ControlInput = (props) => {
  return (
    <FormControl id={props.id} marginBottom="1rem">
      <FormLabel>{props?.label}</FormLabel>
      <Input {...props} />
    </FormControl>
  );
};

export default ControlInput;
