const request = require("request");
const cheerio = require("cheerio");

const url = "https://www.espncricinfo.com/series/south-africa-in-india-2022-1278669/india-vs-south-africa-2nd-t20i-1278688/full-scorecard";

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
    let teamArr = $(".ds-flex .ds-flex-col .ds-mt-3 .ds-mt-0 .ds-mb-1");
    let teamName;
    for(let i=0; i<teamArr.length; i++){
        let hasClass = $(teamArr[i]).hasClass("ds-opacity-50");
        if(hasClass == false){
            teamName = $(teamArr[i]).find(".ds-font-bold")
            console.log(teamName.text());
        }
    }
}