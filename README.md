# American British Translator
![image](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![image](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![image](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![image](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css&logoColor=white)
![image](https://img.shields.io/badge/Chai-F2DDB6?style=for-the-badge&logo=chai&logoColor=brown)
![image](https://img.shields.io/badge/Mocha-8D6748?style=for-the-badge&logo=mocha&logoColor=brown)
![image](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white)

A simple translator between American and British English. The idea is to convert expressions, spellings, and terms, as there are subtle differences between these variants of English.

Examples:
- American to British: ```Mangoes are my favorite fruit.``` → ```Mangoes are my favourite fruit.```
- British to American: ```Paracetamol takes up to an hour to work.``` → ```Tylenol takes up to an hour to work.```

You can test the online version here: https://american-british-english-translator-vl5p.onrender.com

This project was developed as part of the Quality Assurance course on freeCodeCamp. Instructions can be found at [freecodecamp.org/learn/quality-assurance/quality-assurance-projects/american-british-translator](https://www.freecodecamp.org/learn/quality-assurance/quality-assurance-projects/american-british-translator)

## Architecture / Technologies used
- Node.js for backend
- Express for creating routes and managing HTTP requests
- Mocha/Chai for tests
- HTML/CSS/JavaScript for frontend

## Local Installation

To run this project on your machine, follow these steps:
```bash
git clone https://github.com/adrianwilker/american-british-english-translator.git
cd american-british-english-translator

# install dependencies
npm install

# start server
npm start
```

You can also use environment variables as configured in the repository.

After that, access in the browser: http://localhost:PORT — usually PORT = 3000 or as defined in the project.

## If you want to contribute:
- Fork the repository
- Create a branch for your feature (*feature/new-translation*)
- Make your changes
- Add tests covering new conversions
- Open a pull request explaining what was added/changed

### Contributing tips:
- Maintain consistency in terms used
- Check plural case, verb tenses, and contexts where the word should not be changed
- Update tests when adding new mappings
