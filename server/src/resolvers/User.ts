import { UserResolvers } from "../generated/resolvers";
import { TypeMap } from "./types/TypeMap";

export interface UserParent {
  id: string;
  email: string;
}

export const User: UserResolvers.Type<TypeMap> = {
  id: parent => parent.id,
  email: parent => parent.email
};
