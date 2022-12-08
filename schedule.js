const fs = require('fs')
const { start } = require('repl')
var date = new Array()
var content = new Array()


var scheduleData




const schedule = function(string1, rtm, channel) {
    fs.readFile('./haksa.txt', 'utf8', (err, data) => {


        if (err) {
            console.error(err)
            return
        }
        splitedData = data.split('\n')

        var isPeriod = false


        for (var i = 0; i < splitedData.length; i++) {
            var pos = splitedData[i].indexOf(':')

            var tempSplitedData = splitedData[i].split(':')

            if (tempSplitedData[0].indexOf('-') != -1) {

                splitedPeriod = tempSplitedData[0].split('-')

                var startDate = invertDataFormat(splitedPeriod[0])
                var endDate = invertDataFormat(splitedPeriod[1])

                var diffDate = ((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))

                tempDate = startDate
                tempDate.setDate(tempDate.getDate() - 1)
                for (var j = 0; j <= diffDate; j++) {
                    tempDate.setDate(tempDate.getDate() + 1)
                    date.push(tempDate.getMonth().toString() + '/' + tempDate.getDate().toString())
                    content.push(tempSplitedData[1])
                }
            }
            else {
                tempSplitedData[0] = tempSplitedData[0].substring(0, tempSplitedData[0].length - 1)
                date.push(tempSplitedData[0])
                content.push(tempSplitedData[1])
            }


        }



    })


    var tempStr = new Array
    let resultStr = ""
    for (var i = 0; i < date.length; i++) {

        if (date[i] == string1) {

            tempStr.push(content[i])
            
        } 
       
    }

    
    
    for (var i = 0; i < tempStr.length; i++) {
        resultStr = resultStr + tempStr[i] +"\n"
    }
    console.log(resultStr)
    
    //rtm.sendMessage(tempStr, channel);

    return resultStr;
}

function invertDataFormat(string) {

    var dates = string.split('/')
    var monthValue = Number(dates[0])
    var dayValue = Number(dates[1])
    var currentDate = new Date()
    var date = new Date(currentDate.getFullYear(), monthValue, dayValue, 12, 00, 00)


    return date

}




module.exports = schedule;
