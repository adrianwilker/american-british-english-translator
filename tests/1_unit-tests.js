const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");
let translator = new Translator();

suite("Unit Tests", () => {
  test("Test #1", function () {
    let input = `Mangoes are my favorite fruit.`;
    let expectedResult =
      `Mangoes are my <span class="highlight">favourite</span> fruit.`;
    assert.equal(
      translator.translate("american-to-british", input),
      expectedResult,
    );
  });

  test("Test #2", function () {
    let input = `I ate yogurt for breakfast.`;
    let expectedResult =
      `I ate <span class="highlight">yoghurt</span> for breakfast.`;
    assert.equal(
      translator.translate("american-to-british", input),
      expectedResult,
    );
  });

  test("Test #3", function () {
    let input = `We had a party at my friend's condo.`;
    let expectedResult =
      `We had a party at my friend's <span class="highlight">flat</span>.`;
    assert.equal(
      translator.translate("american-to-british", input),
      expectedResult,
    );
  });

  test("Test #4", function () {
    let input = `Can you toss this in the trashcan for me?`;
    let expectedResult =
      `Can you toss this in the <span class="highlight">bin</span> for me?`;
    assert.equal(
      translator.translate("american-to-british", input),
      expectedResult,
    );
  });

  test("Test #5", function () {
    let input = `The parking lot was full.`;
    let expectedResult =
      `The <span class="highlight">car park</span> was full.`;
    assert.equal(
      translator.translate("american-to-british", input),
      expectedResult,
    );
  });

  test("Test #6", function () {
    let input = `Like a high tech Rube Goldberg machine.`;
    let expectedResult =
      `Like a high tech <span class="highlight">Heath Robinson device</span>.`;
    assert.equal(
      translator.translate("american-to-british", input),
      expectedResult,
    );
  });

  test("Test #7", function () {
    let input = `To play hooky means to skip class or work.`;
    let expectedResult =
      `To <span class="highlight">bunk off</span> means to skip class or work.`;
    assert.equal(
      translator.translate("american-to-british", input),
      expectedResult,
    );
  });

  test("Test #8", function () {
    let input = `No Mr. Bond, I expect you to die.`;
    let expectedResult =
      `No <span class="highlight">Mr</span> Bond, I expect you to die.`;
    assert.equal(
      translator.translate("american-to-british", input),
      expectedResult,
    );
  });

  test("Test #9", function () {
    let input = `Dr. Grosh will see you now.`;
    let expectedResult =
      `<span class="highlight">Dr</span> Grosh will see you now.`;
    assert.equal(
      translator.translate("american-to-british", input),
      expectedResult,
    );
  });

  test("Test #10", function () {
    let input = `Lunch is at 12:15 today.`;
    let expectedResult =
      `Lunch is at <span class="highlight">12.15</span> today.`;
    assert.equal(
      translator.translate("american-to-british", input),
      expectedResult,
    );
  });

  test("Test #11", function () {
    let input = `We watched the footie match for a while.`;
    let expectedResult =
      `We watched the <span class="highlight">soccer</span> match for a while.`;
    assert.equal(
      translator.translate("british-to-american", input),
      expectedResult,
    );
  });

  test("Test #12", function () {
    let input = `Paracetamol takes up to an hour to work.`;
    let expectedResult =
      `<span class="highlight">Tylenol</span> takes up to an hour to work.`;
    assert.equal(
      translator.translate("british-to-american", input),
      expectedResult,
    );
  });

  test("Test #13", function () {
    let input = `First, caramelise the onions.`;
    let expectedResult =
      `First, <span class="highlight">caramelize</span> the onions.`;
    assert.equal(
      translator.translate("british-to-american", input),
      expectedResult,
    );
  });

  test("Test #14", function () {
    let input = `I spent the bank holiday at the funfair.`;
    let expectedResult =
      `I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.`;
    assert.equal(
      translator.translate("british-to-american", input),
      expectedResult,
    );
  });

  test("Test #15", function () {
    let input = `I had a bicky then went to the chippy.`;
    let expectedResult = `I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.`;
    assert.equal(
      translator.translate("british-to-american", input),
      expectedResult,
    );
  });

  test("Test #16", function () {
    let input = `I've just got bits and bobs in my bum bag.`;
    let expectedResult = `I've just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.`;
    assert.equal(
      translator.translate("british-to-american", input),
      expectedResult,
    );
  });

  test("Test #17", function () {
    let input = `The car boot sale at Boxted Airfield was called off.`;
    let expectedResult = `The <span class="highlight">swap meet</span> at Boxted Airfield was called off.`;
    assert.equal(
      translator.translate("british-to-american", input),
      expectedResult,
    );
  });

  test("Test #18", function () {
    let input = `Have you met Mrs Kalyani?`;
    let expectedResult = `Have you met <span class="highlight">Mrs.</span> Kalyani?`;
    assert.equal(
      translator.translate("british-to-american", input),
      expectedResult,
    );
  });

  test("Test #19", function () {
    let input = `Prof Joyner of King's College, London.`;
    let expectedResult = `<span class="highlight">Prof.</span> Joyner of King's College, London.`;
    assert.equal(
      translator.translate("british-to-american", input),
      expectedResult,
    );
  });

  test("Test #20", function () {
    let input = `Tea time is usually around 4 or 4.30.`;
    let expectedResult = `Tea time is usually around 4 or <span class="highlight">4:30</span>.`;
    assert.equal(
      translator.translate("british-to-american", input),
      expectedResult,
    );
  });

  test("Test #21", function () {
    let input = `Mangoes are my favorite fruit.`;
    let expectedResult = `Mangoes are my <span class="highlight">favourite</span> fruit.`;
    assert.equal(
      translator.translate("american-to-british", input),
      expectedResult,
    );
  });

  test("Test #22", function () {
    let input = `I ate yogurt for breakfast.`;
    let expectedResult = `I ate <span class="highlight">yoghurt</span> for breakfast.`;
    assert.equal(
      translator.translate("american-to-british", input),
      expectedResult,
    );
  });

  test("Test #23", function () {
    let input = `We watched the footie match for a while.`;
    let expectedResult = `We watched the <span class="highlight">soccer</span> match for a while.`;
    assert.equal(
      translator.translate("british-to-american", input),
      expectedResult,
    );
  });

  test("Test #24", function () {
    let input = `Paracetamol takes up to an hour to work.`;
    let expectedResult = `<span class="highlight">Tylenol</span> takes up to an hour to work.`;
    assert.equal(
      translator.translate("british-to-american", input),
      expectedResult,
    );
  });
 
});
