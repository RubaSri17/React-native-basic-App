/**
 * @param {String} emailInput validate email
 */

export const regexEmail = emailInput => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return reg.test(emailInput);
};

/**
 * @param {String} pswd validate password
 */
export const regPass = pswd => {
  let passwordPattern = /^(?=.{8,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*[!@#$%^&*]).*$/;
  return passwordPattern.test(pswd);
};

/**
 * @param {string} pswd lowercase regex for password valodation
 */
export const regLower = pswd => {
  let lowerCasePattern = /^(?=.*[a-z])/;
  return lowerCasePattern.test(pswd);
};

/**
 * @param {string} pswd Uppercase regex for password valodation
 */
export const regUpper = pswd => {
  let upperCasePattern = /^(?=.*[A-Z])/;
  return upperCasePattern.test(pswd);
};

/**
 * @param {string} pswd digit regex for password valodation
 */
export const regDigit = pswd => {
  var digitPattern = /^(?=.*[0-9])/;
  return digitPattern.test(pswd);
};

/**
 * @param {string} pswd special character regex for password valodation
 */
export const regSplChar = pswd => {
  var SpclCharPattern = /^(?=.*[!@#$%^&*])/;
  return SpclCharPattern.test(pswd);
};
