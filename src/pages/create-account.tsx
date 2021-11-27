import React from "react";
import { gql, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { Button } from "../components/button";
import { FormError } from "../components/form-error";
import nuberLogo from "../images/logo.svg";
import { Helmet } from "react-helmet-async";
import {
  createUserMutation,
  createUserMutationVariables,
} from "../__generated__/createUserMutation";
import { UserRole } from "../__generated__/globalTypes";

const CREATE_USER_MUTATION = gql`
  mutation createUserMutation($input: CreateUserInput!) {
    createUser(input: $input) {
      ok
      error
      id
    }
  }
`;

interface ICreateAccountForm {
  email: string;
  username: string;
  password: string;
  role: UserRole;
}

export const CreateAccount = () => {
  const history = useHistory();
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ICreateAccountForm>({
    mode: "onChange",
    defaultValues: {
      role: UserRole.Host,
    },
  });
  //   const history = useHistory();
  const onCompleted = (data: createUserMutation) => {
    const {
      createUser: { ok },
    } = data;
    if (ok) {
      alert("Account Created! Log in now!");
      history.push("/");
    }
  };
  const [createUser, { loading, data: createAccountMutationResult }] =
    useMutation<createUserMutation, createUserMutationVariables>(
      CREATE_USER_MUTATION,
      {
        onCompleted,
      }
    );
  const onSubmit = () => {
    if (!loading) {
      const { email, password, role, username } = getValues();
      createUser({
        variables: {
          input: {
            email,
            password,
            role,
            username,
          },
        },
      });
    }
  };

  return (
    <div className="h-screen flex items-center flex-col mt-10 lg:mt-28">
      <Helmet>
        <title>Create Account | Nuber Eats</title>
      </Helmet>
      <div className="w-full max-w-screen-sm flex flex-col px-5 items-center">
        <img src={nuberLogo} className="w-52 mb-10" alt="Nuber Eats" />
        <h4 className="w-full font-medium text-left text-3xl mb-5">
          Let's get started
        </h4>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid gap-3 mt-5 w-full mb-5"
        >
          <input
            {...register("email", {
              required: "Email is required",
              pattern:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
            required
            type="email"
            placeholder="Email"
            className="input"
          />
          {errors.email?.message && (
            <FormError errorMessage={errors.email?.message} />
          )}
          {errors.email?.type === "pattern" && (
            <FormError errorMessage={"Please enter a valid email"} />
          )}
          <input
            {...register("username", {
              required: "Username is required",
            })}
            required
            type="text"
            placeholder="Username"
            className="input"
          />
          {errors.username?.message && (
            <FormError errorMessage={errors.username?.message} />
          )}
          <input
            {...register("password", { required: "Password is required" })}
            required
            type="password"
            placeholder="Password"
            className="input"
          />
          <select {...register("role", { required: true })} className="input">
            {Object.keys(UserRole).map((role, index) => (
              <option key={index}>{role}</option>
            ))}
          </select>
          {errors.password?.message && (
            <FormError errorMessage={errors.password?.message} />
          )}
          {errors.password?.type === "minLength" && (
            <FormError errorMessage="Password must be more than 10 chars." />
          )}
          <Button
            canClick={isValid}
            loading={loading}
            actionText={"Create Account"}
          />
          {createAccountMutationResult?.createUser?.error && (
            <FormError
              errorMessage={createAccountMutationResult.createUser.error}
            />
          )}
        </form>
        <div>
          Already have an account??{" "}
          <Link to="/" className="text-lime-600 hover:underline">
            Log in now
          </Link>
        </div>
      </div>
    </div>
  );
};
