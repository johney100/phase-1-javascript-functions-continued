// code your solution here
function saturdayFun(activity = "roller-skate"){

    return `This Saturday, I want to ${activity}!`
}

function mondayWork(msg = "go to the office"){

    return `This Monday, I will ${msg}.`
}

function wrapAdjective(flair = "*"){
    const inner = function(msg = "special"){
    return `You are ${flair}${msg}${flair}!`
    }
        return inner;
    }



