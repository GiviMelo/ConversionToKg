function calculate(idName, percentage) {
    let oneKg = parseFloat(document.getElementById('oneKg').value);
    let totalKg = parseFloat(document.getElementById('totalKg').value);

    let namePercentage = totalKg * percentage

    let percSc = Math.floor(namePercentage / oneKg);
    let percKg = Math.floor(percSc * oneKg - namePercentage);  //percSc = parseInt(percSc)

    percKg = Math.floor(percKg * -1);

    document.getElementById(idName).innerHTML = `${percSc}Sc e ${percKg}Kg`;
}

function calculateTotalMaster(idName) {
    let oneKg = parseFloat(document.getElementById('oneKg').value);
    let totalKg = parseFloat(document.getElementById('totalKg').value);

    let totalMasterSc = Math.floor(totalKg / oneKg);
    let totalMasterKg = Math.floor(totalMasterSc * oneKg - totalKg);   //totalMasterSc = parseInt(totalMasterSc)

    totalMasterKg = Math.floor(totalMasterKg * -1);

    document.getElementById(idName).innerHTML = `${totalMasterSc}Sc e ${totalMasterKg}Kg`;
}

function calculateConversion(event) {
    event.preventDefault();
    calculateTotalMaster('totalMaster');
    calculate("EightyPercBoss", 0.8);
    calculate("TwentyPercEmpl", 0.2);
    calculate("SixtyPercBoss", 0.6);
    calculate('FortyPercEmpl', 0.4);
    calculate("FiftyPercBoss", 0.5);
    calculate("FiftyPercEmpl", 0.5);
}

function reset(idName) {
//    document.getElementById(idName).innerHTML = ''
    totalKg = ''
}

/* function resetButton(event) {
    event.preventDefault();
    reset("EightyPercBoss");
    reset("TwentyPercEmpl");
    reset('SixtyPercBoss');
    reset("FortyPercEmpl");
    reset("FiftyPercBoss");
    reset("FiftyPercEmpl");
} */

//document.querySelector("form").addEventListener("submit", calculateConversion());