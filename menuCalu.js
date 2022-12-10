const menuCalu = function(message) {
    score = 1
    positiveKeyWord = ["고기", "새우", "탕수육","치즈","소바","파스타","까스"]
    negativeKeyWord = [ "오징어", "동태","호박"]
    for(i = 0; i<positiveKeyWord.length; i++){
        if(message.match(positiveKeyWord[i])!=null)
            score += 1      
    }
    for(i = 0; i<negativeKeyWord.length; i++){
        if(message.match(negativeKeyWord[i])!=null)
            score -= 1      
    }
    if(score>3)
        score = 3
    else if(score<1)
        score = 1

    return score.toString();
}
module.exports = menuCalu;
