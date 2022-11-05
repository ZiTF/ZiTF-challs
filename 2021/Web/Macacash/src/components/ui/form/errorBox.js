import { Wrap, WrapItem } from "@chakra-ui/react";
import { ErrorMessage } from "formik";

const ErrorBox = ({ names, errors, touched }) => {
  /**
   * Check if the inputs touched by the user set an errors in the errors arrays
   * With the intersection of the key of each object we can know which input touched by the user
   * have some errors to fixed
   * example
   *    touched=["email"]
   *    errors =[]
   *    --> intersect errs=[] --> no errors to show
   * example 2
   *    touched=["email","password"]
   *    errors =["email"]
   *    --> intersect errs=["emails"] --> errors to show
   *    // no errors to show
   */
  const errs = Object.keys(touched).filter((value) =>
    Object.keys(errors).includes(value)
  );
  return errs.length !== 0 ? (
    <Wrap
      bg="red.100"
      borderRadius=".5rem"
      spacing="10px"
      justify="center"
      margin="1.1rem 0"
      p="1rem 0"
    >
      {names.map((name, indx) => (
        <WrapItem key={indx}>
          <ErrorMessage key={indx} name={name}/>
        </WrapItem>
      ))}
    </Wrap>
  ) : null;
};

export default ErrorBox;
