export interface User {
  name?: string;
  gender?: string;
}
export const getUser = async (): Promise<User> => {
  // Imagine this function makes an API call to fetch the user
  return { name: "John Doe" };
};

export const getUserGender = async (): Promise<User> => {
  // Imagine this function makes an API call to fetch the user
  return { gender: "Female" };
};
