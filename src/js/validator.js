export default class Validator {
  static validateUsername(name) {
    const noForbiddenCharacters = !(/[^(a-zA-Z\d-_)]/.test(name));
    const noThreeNumbers = !(/\d{3,}/.test(name));
    const startsAndEndsWithLetters = !(/^[-_\d]|[-_\d]$/.test(name));
    return noForbiddenCharacters && noThreeNumbers && startsAndEndsWithLetters;
  }
}
