import { component$ } from "@builder.io/qwik";
import { action$, Form, zod$ } from "@builder.io/qwik-city";
import { z } from "zod";
import { createUser, usernameInUse } from "~/models/user";

export const signupValidator = z.object({
  username: z.string({}).min(1, { message: "Username is required" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
  confirmPassword: z.string().min(8, { message: "Password must be at least 8 characters" })
}).superRefine( async ({ username, confirmPassword, password }, ctx) => {
  if (confirmPassword !== password) {
    ctx.addIssue({
      code: "custom",
      message: "Password and confirm password must match",
      path: ["passwordMatch"]
    });
  }
  if (await usernameInUse(username!)) {
    ctx.addIssue({
      code: "custom",
      message: `The username "${username}" is in use. Please choose another.`,
      path: ["usernameInUse"]
    })
  }
});

export const useSignupAction = action$(async (form, { error }) => {
  if (await usernameInUse(form.username!)) {
    error(400, `The username "${form.username}" is in use. Please choose another.`);
  }

  const user = await createUser(form);

  return {
    form,
    user
  };
}, zod$(signupValidator));

export default component$(() => {
  const signupAction = useSignupAction();

  return (
    <div class="mx-auto mt-16 w-full max-w-md px-2.5">
      <div class="rounded-lg border-gray-500/20 bg-white p-8 shadow-md dark:bg-gray-800">
        <Form class="space-y-8" action={signupAction}>
          <b class="-space-y-px">
            {/* <div>
              {signupAction.value?.fieldErrors?.usernameInUse && <p class="m-4 text-sm text-orange-600" id="error">{signupAction.value.errors.usernameInUse}</p>}
            </div>
            <div>
              {signupAction.value?.fieldErrors?.passwordMatch && <p class="m-4 text-sm text-orange-600" id="error">{signupAction.value.errors.passwordMatch}</p>}
            </div> */}
            <b class="Floating">
              <input type="text" name="username" placeholder=" " class="block w-full appearance-none rounded-t-lg border border-gray-500/20 bg-transparent p-6 shadow-sm ring-inset focus:border-transparent focus:ring-1" autofocus />
              <label for="name" class="pointer-events-none absolute top-6 left-6 duration-300">Username</label>
              {signupAction.value?.fieldErrors?.username && <p class="m-4 text-sm text-orange-600" id="error">{signupAction.value.errors.username}</p>}
            </b>

            <b class="Floating">
              <input type="password" name="password" placeholder=" " class="block w-full appearance-none border border-gray-500/20 bg-transparent p-6 shadow-sm ring-inset focus:border-transparent focus:ring-1" />
              <label for="name" class="pointer-events-none absolute top-6 left-6 duration-300">Password</label>
              {signupAction.value?.fieldErrors?.password && <p class="m-4 text-sm text-orange-600" id="error">{signupAction.value.errors.password}</p>}
            </b>

            <b class="Floating">
              <input type="password" name="confirmPassword" placeholder=" " class="block w-full appearance-none rounded-b-lg border border-gray-500/20 bg-transparent p-6 shadow-sm ring-inset focus:border-transparent focus:ring-1" />
              <label for="name" class="pointer-events-none absolute top-6 left-6 duration-300">Confirm password</label>
              {signupAction.value?.fieldErrors?.confirmPassword && <p class="m-4 text-sm text-orange-600" id="error">{signupAction.value.errors.confirmPassword}</p>}
            </b>
          </b>

          <div class="flex items-center justify-between">
            <div class="text-sm">
              Already have an account? <a href="#">Sign in</a>
            </div>
          </div>

          <button
            type="submit"
            class="flex w-full justify-center rounded-md border border-transparent bg-purple-700 py-2 px-4 text-sm font-medium text-white shadow-sm transition hover:bg-purple-800 focus:outline-none focus:ring-1 focus:ring-purple-900"
            disabled={signupAction.isRunning}
          > Sign up 🐰</button>
        </Form>
      </div>
    </div>
  )
});