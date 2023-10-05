import { AuthenticationError, PromiseReturnType } from "blitz";
import Link from "next/link";
import { LabeledTextField } from "src/core/components/LabeledTextField";
import { Form, FORM_ERROR } from "src/core/components/Form";

import { useMutation } from "@blitzjs/rpc";
import { Routes } from "@blitzjs/next";
import login from "../../../../features/auth/mutations/login";
import { Login } from "../../../../features/auth/schemas";
import { useForm } from "@mantine/form";
import { Button, PasswordInput, TextInput } from "@mantine/core";

type LoginFormProps = {
  onSuccess?: (user: PromiseReturnType<typeof login>) => void;
};

export const LoginForm = (props: LoginFormProps) => {
  const [loginMutation] = useMutation(login);

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps("email")}
        />
        <PasswordInput withAsterisk label="Password" {...form.getInputProps("password")} />
      </form>
      <div>
        <Link href={Routes.ForgotPasswordPage()}>Forgot your password?</Link>
        <Button type="submit">Submit</Button>
      </div>
      <div style={{ marginTop: "1rem" }}>
        Or <Link href={Routes.SignupPage()}>Sign Up</Link>
      </div>
    </div>
  );
};

export default LoginForm;
