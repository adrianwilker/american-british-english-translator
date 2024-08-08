"use strict";

const Translator = require("../components/translator.js");

module.exports = function (app) {
  const translator = new Translator();

  app.route("/api/translate").post((req, res) => {
    if (req.body.text === "") {
      res.send({ error: "No text to translate" });
    } else if (!req.body.locale || !req.body.text) {
      res.send({ error: "Required field(s) missing" });
    } else if (
      !["american-to-british", "british-to-american"].includes(req.body.locale)
    ) {
      res.send({ error: "Invalid value for locale field" });
    } else {
      let translation = translator.translate(req.body.locale, req.body.text);
      if (translation == req.body.text) {
        res.send({
          text: req.body.text,
          translation: "Everything looks good to me!",
        });
      } else {
        res.send({ text: req.body.text, translation: translation });
      }
    }
  });
};
