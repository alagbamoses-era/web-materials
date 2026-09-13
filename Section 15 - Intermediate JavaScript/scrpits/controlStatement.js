prompt("What is your name");
prompt("what is the other name");
var pert = Math.random() * 100;
pert = Math.floor(pert) + 1;
if (pert > 70) {
    console.log("Your love score is " + pert + " + %, you go together like coke and mentos")
} if (pert > 30 && pert <= 70)  {
    console.log("Your love score is " + pert + "%")
} if (pert <= 30) {
    console.log("Your love score is " + pert + "%, you go together like oil and water")
}