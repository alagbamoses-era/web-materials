var  guestList = ["Alice", "Bob", "Charlie", "David", "Eve"];

var name = prompt("Enter your name: ");
if (guestList.includes(name)) {
    alert("Welcome, " + name + "!");
} else {
    alert("Sorry, you are not on the list.");
}