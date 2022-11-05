import * as Yup from "yup";
import { useRouter } from "next/router";
import { Field, Form, Formik } from "formik";
import { Container, Button, Heading, useToast, Stack } from "@chakra-ui/react";
import ControlInput from "../components/ui/form/controlInput";
import PasswordInput from "../components/ui/form/passwordInput";
import ErrorBox from "../components/ui/form/errorBox";

const initValues = {
  username: "",
  password: "",
};

function _0x3f46() {
  var _0x218fbc = [
    "2109457Ocbvxn",
    "username",
    "5sOvXxf",
    "2319903ZfBQNc",
    "280562RgeWsU",
    "8391010GQmTJb",
    "597960mFCMhX",
    "8ZWTjyl",
    "6wqMUFX",
    "1589304PTuwSB",
    "password",
    "257510YCiVed",
    "babidiiiboudidibou",
  ];
  _0x3f46 = function () {
    return _0x218fbc;
  };
  return _0x3f46();
}
var _0x35bf47 = _0x45fd;
(function (_0x33c0fa, _0x1f6c9b) {
  var _0x2fe7d4 = _0x45fd,
    _0x1c73e1 = _0x33c0fa();
  while (!![]) {
    try {
      var _0x114239 =
        parseInt(_0x2fe7d4(0x8c)) / 0x1 +
        parseInt(_0x2fe7d4(0x92)) / 0x2 +
        parseInt(_0x2fe7d4(0x94)) / 0x3 +
        (parseInt(_0x2fe7d4(0x8a)) / 0x4) * (parseInt(_0x2fe7d4(0x90)) / 0x5) +
        (-parseInt(_0x2fe7d4(0x89)) / 0x6) *
          (-parseInt(_0x2fe7d4(0x8e)) / 0x7) +
        (parseInt(_0x2fe7d4(0x88)) / 0x8) * (-parseInt(_0x2fe7d4(0x91)) / 0x9) +
        -parseInt(_0x2fe7d4(0x93)) / 0xa;
      if (_0x114239 === _0x1f6c9b) break;
      else _0x1c73e1["push"](_0x1c73e1["shift"]());
    } catch (_0x2c6edf) {
      _0x1c73e1["push"](_0x1c73e1["shift"]());
    }
  }
})(_0x3f46, 0x30908);

function _0x45fd(_0x4f22d8, _0x529f85) {
  var _0x3f46b5 = _0x3f46();
  return (
    (_0x45fd = function (_0x45fdbf, _0x58e0f1) {
      _0x45fdbf = _0x45fdbf - 0x88;
      var _0x6c072a = _0x3f46b5[_0x45fdbf];
      return _0x6c072a;
    }),
    _0x45fd(_0x4f22d8, _0x529f85)
  );
}

const SignInForm = (props) => {
  const toast = useToast();
  const router = useRouter();
  return (
    <Stack
      style={{ minHeight: "100vh" }}
      background="url(/images/monkey-money-tr-2.jpeg)"
    >
      <Container
        {...props}
        p={10}
        w="full"
        maxW="lg"
        backgroundColor="whiteAlpha.900"
        boxShadow="rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px"
        margin="auto"
        borderRadius="10px"
      >
        <Heading textAlign="center">Macacash</Heading>
        <Formik
          initialValues={initValues}
          validationSchema={Yup.object({
            username: Yup.string().required("Username Required"),
            password: Yup.string().required("Password is required"),
          })}
          onSubmit={async (values, actions) => {
            actions.setSubmitting(true);

            if (
              values[_0x35bf47(0x8f)] !== _0x35bf47(0x8d) ||
              values[_0x35bf47(0x8b)] !== _0x35bf47(0x8d)
            )
              toast({
                title: "We\x20could\x20not\x20sign\x20you\x20up",
                status: "error",
                duration: 0x1b58,
                isClosable: !![],
              });
            else {
              var _0xe8a2ca = _0x3b16;
              function _0x3b16(_0x36cc63, _0x156cb8) {
                var _0x11dbee = _0x11db();
                return (
                  (_0x3b16 = function (_0x3b166f, _0x3591e8) {
                    _0x3b166f = _0x3b166f - 0x196;
                    var _0x4ba2d4 = _0x11dbee[_0x3b166f];
                    return _0x4ba2d4;
                  }),
                  _0x3b16(_0x36cc63, _0x156cb8)
                );
              }
              function _0x11db() {
                var _0x165bc8 = [
                  "219045wpmxvn",
                  "cashcash",
                  "push",
                  "132081BrxZmd",
                  "2165319VzekBo",
                  "240258kZSxpn",
                  "12409166EfOITD",
                  "5iPmzQh",
                  "6OxtaPl",
                  "3516636MwwRyc",
                  "6869024JDvUYk",
                ];
                _0x11db = function () {
                  return _0x165bc8;
                };
                return _0x11db();
              }
              (function (_0x1e7b1d, _0x4f3110) {
                var _0x4c441e = _0x3b16,
                  _0x1e818a = _0x1e7b1d();
                while (!![]) {
                  try {
                    var _0x5590aa =
                      (parseInt(_0x4c441e(0x197)) / 0x1) *
                        (parseInt(_0x4c441e(0x19f)) / 0x2) +
                      parseInt(_0x4c441e(0x19a)) / 0x3 +
                      parseInt(_0x4c441e(0x1a0)) / 0x4 +
                      (parseInt(_0x4c441e(0x19e)) / 0x5) *
                        (parseInt(_0x4c441e(0x19c)) / 0x6) +
                      -parseInt(_0x4c441e(0x19d)) / 0x7 +
                      parseInt(_0x4c441e(0x196)) / 0x8 +
                      parseInt(_0x4c441e(0x19b)) / 0x9;
                    if (_0x5590aa === _0x4f3110) break;
                    else _0x1e818a["push"](_0x1e818a["shift"]());
                  } catch (_0x24a122) {
                    _0x1e818a["push"](_0x1e818a["shift"]());
                  }
                }
              })(_0x11db, 0xe729d),
                router[_0xe8a2ca(0x199)](_0xe8a2ca(0x198));
            }
            actions.setSubmitting(false);
            actions.resetForm();
          }}
        >
          {({ values, isSubmitting, errors, handleChange, touched }) => (
            <Form>
              <ErrorBox
                names={Object.keys(initValues)}
                errors={errors}
                touched={touched}
              />
              <Field name="username">
                {({ field, form }) => (
                  <ControlInput
                    {...field}
                    backgroundColor="white"
                    value={values.username}
                    label="Username"
                    isInvalid={form.errors.username && form.touched.username}
                    id="username"
                    type="username"
                    placeholder="Enter username"
                    onChange={handleChange}
                  />
                )}
              </Field>
              <Field>
                {({ field, form }) => (
                  <PasswordInput
                    backgroundColor="white"
                    field={field}
                    value={values.password}
                    isInvalid={form.errors.password && form.touched.password}
                    onChange={handleChange}
                  />
                )}
              </Field>
              <Button
                display="block"
                margin="auto"
                type="submit"
                isLoading={isSubmitting}
              >
                {" "}
                Submit{" "}
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
    </Stack>
  );
};

export default SignInForm;
