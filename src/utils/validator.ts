export const validateFullName = (fullName: string) => {
  const reg = new RegExp('^[a-zA-Z ]{3,}$');

  return reg.test(fullName);
};

export const validateEmail = (email: string) => {
  const reg = new RegExp('^[a-z0-9A-Z]+[- |a-z0-9A-Z._]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$');

  return reg.test(email);
};
