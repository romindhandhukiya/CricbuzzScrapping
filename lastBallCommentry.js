const request = require("request");
const cheerio = require("cheerio");

const url = "https://www.cricbuzz.com/cricket-commentary/38652/ind-vs-rsa-2nd-t20i-south-africa-tour-of-india-2022";

request(url, (error, response, html) => {
    if(error){
        console.log(error);
    }
    else{
        extractData(html);
    }
})

function extractData(html){
    let $ = cheerio.load(html);
    let elemArray = $(".ng-hide .cb-com-ln .cb-col-90");

    let text = $(elemArray[0]).text();
    let data = $(elemArray[0]).html();

    console.log("text : ", text);
    console.log("data : ", data);
}