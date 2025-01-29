// import { USER_WITH_ONE_SUBSCRIPTION } from "@/mocks/user";
// import { USER_WITH_MULTIPLE_SUBSCRIPTION } from "@/mocks/user";

import { USER_WITHOUT_SUBSCRIPTION } from "@/mocks/user";
import { User } from "../types/user";

export async function fetchUser(): Promise<User> {
  return Promise.resolve(USER_WITHOUT_SUBSCRIPTION);
  // return Promise.resolve(USER_WITH_ONE_SUBSCRIPTION);
  // return Promise.resolve(USER_WITH_MULTIPLE_SUBSCRIPTION);
}

 
  