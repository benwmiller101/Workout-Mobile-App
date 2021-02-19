//-----------------------------------------//
//-----------------------------------------//
//----------------API TEST-----------------//
//-----------NOT PART OF DESIGN------------//
//-----------------------------------------//
//-----------------------------------------//

//const createWorkout = document.querySelector("#btn-create");
const addExercise = document.querySelector("#btn-add");
const workouts = [];

addExercise.addEventListener('click', getDetails);

function getDetails(){
    const exercises = "https://www.breakingbadapi.com/api/characters/"
    
    fetch(exercises).then(getJson).then(updateDisplay).catch(reportError);
}

function getJson(aResponse){
    //console.log(aResponse);
    return aResponse.json();
    
}

function updateDisplay(jsonObj){
    let charObjArray = jsonObj;
    let charObj = charObjArray[0];

    console.log("hello " + charObj);
}

function reportError(anError){
    console.log(anError);
}