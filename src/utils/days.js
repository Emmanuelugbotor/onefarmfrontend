const deliveryDate = () => {
    let msg = ""
    let today  = new Date().toDateString();
    let weekDays = today.slice(0, 3);
    let daysOfTheWeeks = {
        Sun : 1,
        Mon : 2,
        Tue : 3,
        Wed : 4,
        Thu : 5,
        Fri : 6,
        Sat : 7
    }
    if(daysOfTheWeeks[weekDays] >= 3 && daysOfTheWeeks[weekDays] < 6 ){
        msg = "Your product will be deliver to you on Friday "
    }
    else if(daysOfTheWeeks[weekDays] < 3 && daysOfTheWeeks[weekDays] >= 6 ){
        msg = "Your product will be deliver to you on Tuesday "
    }
    return {msg, today};
}

export default deliveryDate;