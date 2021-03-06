export { addSpacesBetweenCapitalLetters, durationToMinuteString, generateUID };

function addSpacesBetweenCapitalLetters(string) {
  return string.replace(/([A-Z]+)/g, " $1").trim();
}

function durationToMinuteString(s) {
  return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s;
}

function generateUID() {
  const dec2hex = [];
  for (let i = 0; i <= 15; i++) {
    dec2hex[i] = i.toString(16);
  }

  let uid = "";
  for (var i = 1; i <= 36; i++) {
    if (i === 9 || i === 14 || i === 19 || i === 24) {
      uid += "-";
    } else if (i === 15) {
      uid += 4;
    } else if (i === 20) {
      uid += dec2hex[(Math.random() * 4) | (0 + 8)];
    } else {
      uid += dec2hex[(Math.random() * 16) | 0];
    }
  }

  return uid;
}
