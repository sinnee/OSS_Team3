const infoDeptOffice = function (rtm, text, channel) {
  var tempSimilarity = 9999;
  var mostSimilarDeptName = "";
  var mostSimilarDeptPos = "";
  const fs = require('fs');
  const data = fs.readFileSync('./dept.txt').toString().split('\n');
  const TextV = text.replace(/(\s*)/g, '').toLowerCase();
  console.log(text);
  for (i in data) {
    const str = data[i].split(' - ');
    var similarityValue = levenshtein(TextV,str[0])
    console.log(" similarityValue : "+similarityValue+" tempSimilarity : "+tempSimilarity+" Deptname : "+ str[0])
    if(similarityValue < tempSimilarity){
      tempSimilarity = similarityValue; 
      mostSimilarDeptName = str[0];
      mostSimilarDeptPos = str[1];
    }
    str[0] = str[0].replace(/(\s*)/g, '').toLowerCase();
    console.log(str[0]);
    if (str[0] === TextV) {
      // rtm.sendMessage(str[1], channel);
      return str[1];
    }
  }
  // rtm.sendMessage('This department Office Address does not exist', channel);
  return 'I think you entered '+mostSimilarDeptName + " : "+mostSimilarDeptPos;
};

module.exports = infoDeptOffice;
