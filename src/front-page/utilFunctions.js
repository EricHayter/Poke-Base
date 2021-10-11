const urlFixer = (str) => {
  if (str.indexOf("♀") !== -1) {
    str = str.replace("♀", "-f");
  } else if (str.indexOf("♂") !== -1) {
    str = str.replace("♂", "-m");
  } else if (str.indexOf("é") !== -1) {
    str = str.replace("é", "e");
    str = str.replace("é", "e");
  }

  return str
    .replace(/[^\w- ]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase();
};

const pad = (num, size) => {
  var s = "000000000" + num;
  return s.substr(s.length - size);
};

export { pad };
export { urlFixer };
