#!/usr/bin/env node
const axios = require("axios");
const [param] = process.argv.slice(2);
const options = {
  method: "GET",
  url: "https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe",
  params: { query: param },
  headers: {
    "X-RapidAPI-Host": "recipe-by-api-ninjas.p.rapidapi.com",
    "X-RapidAPI-Key": "333dfd9934msh8610e51bd9b4349p15e4bfjsn8bff7b51ada8",
  },
};

axios
  .request(options)
  .then(function (response) {
    const myArrData = response.data;
    myArrData.forEach((element, index) => {
      let recipeTitle = element.title;
      let recipeIngred = element.ingredients;
      let recipeServ = element.servings;
      let recipeInstr = element.instructions;
      if (index < 3) {
        // immer die ersten dre results
        const result = `${
          index + 1
        }: ${recipeTitle}\n\nfür ${recipeServ} brauchst du: ${recipeIngred}\n\nZubereitung: ${recipeInstr}\n`;
        console.log(result);
      }
    });
  })
  .catch(function (error) {
    console.error(error);
  });
