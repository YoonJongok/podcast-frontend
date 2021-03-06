/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum UserRole {
  Host = "Host",
  Listener = "Listener",
}

export interface CreateUserInput {
  email: string;
  username: string;
  password: string;
  role: UserRole;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface SearchPodcastsInput {
  page?: number | null;
  titleQuery: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
