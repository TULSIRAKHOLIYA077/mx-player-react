export const checkValidData = (email,password)=>{
  const isEmailValid = /^[a-zA-Z0-9_.+\-]+[\x40][a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(email);

  const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);

  if(!isEmailValid) return "Email ID is not valid";
  if(!isPasswordValid) return "Minimum eight characters, at least one letter and one number";

  return null;

}