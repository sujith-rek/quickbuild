const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const phoneRegex = /^\d{10}$/;
const passwordRegex = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*).*$/;

export const validateEmail = (email: string) => emailRegex.test(email);
export const validatePhone = (phone: string) => phoneRegex.test(phone);
export const validatePassword = (password: string) => passwordRegex.test(password);