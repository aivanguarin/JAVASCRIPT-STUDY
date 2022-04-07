let raceNumber = Math.floor(Math.random() * 1000);
let regEarly = false;
let runnerAge = 17;

if(runnerAge > 18 && regEarly) {
  raceNumber += 1000;
}

if(runnerAge > 18 && regEarly) {
  console.log(`Race Number: ${raceNumber}, you will race at 9:30 AM`);
}
else if ( runnerAge > 18 && regEarly != true) {
  console.log(`Race Number: ${raceNumber}, you will race at 11:00 AM`);
}
else if (runnerAge < 18) {
  console.log(`Race Number: ${raceNumber}, you will race at 12:30 PM`);
}
else if(runnerAge === 18) {
  console.log('Please proceed to registration desk!');
}
