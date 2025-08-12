const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const passwordDisplay = document.getElementById("password");

function generatePassword(length, useUpper, useLower, useNumbers, useSymbols) {
  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()-_=+[]{};:'\",.<>/?\\|";

  let allChars = "";
  if (useUpper) allChars += upperChars;
  if (useLower) allChars += lowerChars;
  if (useNumbers) allChars += numberChars;
  if (useSymbols) allChars += symbolChars;

  if (allChars === "") return "";

  let password = "";
  for (let i = 0; i < length; i++) {
    password += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }
  return password;
}

generateBtn.addEventListener("click", () => {
  const length = parseInt(document.getElementById("length").value);
  const useUpper = document.getElementById("uppercase").checked;
  const useLower = document.getElementById("lowercase").checked;
  const useNumbers = document.getElementById("numbers").checked;
  const useSymbols = document.getElementById("symbols").checked;

  const pwd = generatePassword(length, useUpper, useLower, useNumbers, useSymbols);
  if (!pwd) {
    alert("Please select at least one character type!");
    passwordDisplay.textContent = "";
    copyBtn.style.display = "none";
    return;
  }
  passwordDisplay.textContent = pwd;
  copyBtn.style.display = "inline-block";
});

copyBtn.addEventListener("click", () => {
  const text = passwordDisplay.textContent;
  if (!text) return;

  navigator.clipboard.writeText(text).then(() => {
    alert("Password copied to clipboard!");
  }).catch(() => {
    alert("Failed to copy password.");
  });
});
