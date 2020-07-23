export default class Validator {
  static validateUsername(name) {
    const forbiddenCharacters = /[^(a-zA-Z\d-_)]/.test(name);
    const threeNumbers = /\d{3,}/.test(name);
    const doesNotStartAndEndWithLetters = /^[-_\d]|[-_\d]$/.test(name);
    return !forbiddenCharacters && !threeNumbers && !doesNotStartAndEndWithLetters;
  }
}
