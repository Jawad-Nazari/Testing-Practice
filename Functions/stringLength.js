function stringLength(string) {
  if (string.length < 1 || string.length > 10) {

    return 'invalid length';
  }
  return string.length;
}

module.exports = stringLength;