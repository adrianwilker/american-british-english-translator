const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

class Translator {
  constructor() {
    this.prefix = `<span class="highlight">`;
    this.posfix = "</span>";
  }

  beginToUpperCase(str) {
    if (str.startsWith(this.prefix)) {
      const afterPrefix = str.slice(this.prefix.length);
      if (afterPrefix.length > 0) {
        return (
          this.prefix +
          afterPrefix.charAt(0).toUpperCase() +
          afterPrefix.slice(1)
        );
      }
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  translate(locale, text) {
    if (locale === "american-to-british") {
      return this.americanToBritish(text.split(/\b/));
    } else if (locale === "british-to-american") {
      return this.britishToAmerican(text.split(/\b/));
    }
  }

  checkOneLanguageOnly(oneLanguageOnly, input, i) {
    i = Number(i);
    const word3 =
      input[i] + input[i + 1] + input[i + 2] + input[i + 3] + input[i + 4];
    if (oneLanguageOnly[word3.toLowerCase()]) {
      return [word3, oneLanguageOnly[word3.toLowerCase()]];
    }
    const word2 = input[i] + input[i + 1] + input[i + 2];
    if (oneLanguageOnly[word2.toLowerCase()]) {
      return [word2, oneLanguageOnly[word2.toLowerCase()]];
    }
    const word1 = input[i];
    if (oneLanguageOnly[word1.toLowerCase()]) {
      return [word1, oneLanguageOnly[word1.toLowerCase()]];
    }
    return false;
  }

  findKeyByValue(obj, value) {
    for (let key in obj) {
      if (obj[key] === value) {
        return key;
      }
    }
    return null;
  }

  replaceTimeFormat(input, locale, i) {
    i = Number(i);
    const originalWord = input.slice(i, i + 3).join("");
    let timePattern = /([0]?[0-9]|1\d|2[0-3]):([0-5]\d)/g;
    if (locale === "american-to-british" && timePattern.test(originalWord)) {
      let translation = originalWord.replace(timePattern, "$1.$2");
      return [originalWord, translation];
    }
    timePattern = /([0]?[0-9]|1\d|2[0-3]).([0-5]\d)/g;
    if (locale === "british-to-american" && timePattern.test(originalWord)) {
      let translation = Array.isArray(originalWord)
        ? originalWord.join("")
        : originalWord;
      translation = translation.replace(timePattern, "$1:$2");
      return [originalWord, translation];
    }
    return false;
  }

  americanToBritish(input) {
    let originalWord = "";
    let translatedWord = "";
    let translation = "";
    for (let i in input) {
      if (americanToBritishSpelling[input[i]]) {
        originalWord = input[i];
        translatedWord = americanToBritishSpelling[input[i]];
      }
      if (americanToBritishTitles[input[i].toLowerCase() + "."]) {
        originalWord = input[i] + ".";
        translatedWord = americanToBritishTitles[input[i].toLowerCase() + "."];
        translatedWord =
          translatedWord.slice(0, 1).toUpperCase() + translatedWord.slice(1);
      }
      let isAmericanOnly = this.checkOneLanguageOnly(americanOnly, input, i);
      if (isAmericanOnly) {
        [originalWord, translatedWord] = isAmericanOnly;
      }
      if (
        /([0]?[0-9]|1\d|2[0-3]):([0-5]\d)/g.test(
          input.slice(Number(i), Number(i) + 3).join(""),
        )
      ) {
        let newTimeFormat = this.replaceTimeFormat(
          input,
          "american-to-british",
          i,
        );
        [originalWord, translatedWord] = newTimeFormat;
      }
      translation = input
        .join("")
        .replace(originalWord, this.prefix + translatedWord + this.posfix);
    }
    return this.beginToUpperCase(translation);
  }

  britishToAmerican(input) {
    let translation = [...input];
    let i = 0;
    while (i < translation.length) {
      let originalWord = "";
      let translatedWord = "";
      let key = this.findKeyByValue(
        americanToBritishSpelling,
        translation[i].toLowerCase(),
      );
      if (key) {
        originalWord = translation[i];
        translatedWord = key;
      }

      if (americanToBritishTitles[translation[i].toLowerCase() + "."]) {
        originalWord = translation[i];
        translatedWord = translation[i].toLowerCase() + ".";
        translatedWord =
          translatedWord.slice(0, 1).toUpperCase() + translatedWord.slice(1);
      }

      let isBritishOnly = this.checkOneLanguageOnly(
        britishOnly,
        translation,
        i,
      );
      if (isBritishOnly) {
        [originalWord, translatedWord] = isBritishOnly;
      }
      if (
        /([0]?[0-9]|1\d|2[0-3]).([0-5]\d)/g.test(
          translation.slice(i, i + 3).join(""),
        )
      ) {
        let newTimeFormat = this.replaceTimeFormat(
          translation,
          "british-to-american",
          i,
        );
        [originalWord, translatedWord] = newTimeFormat;
      }

      if (originalWord && translatedWord) {
        translation = translation
          .join("")
          .replace(originalWord, this.prefix + translatedWord + this.posfix);
        translation = translation.split(/\b/);
        i =
          i +
          (this.prefix + translatedWord + this.posfix).split(/\b/).length +
          1;
        continue;
      }
      i = i + 1;
    }
    return this.beginToUpperCase(translation.join(""));
  }
}

module.exports = Translator;
