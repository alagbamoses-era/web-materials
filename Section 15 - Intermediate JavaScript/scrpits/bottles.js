var bottles = 99

function bottleDrink() {
    while (bottles > 0) {

    console.log(bottles + " bottles of beer on the wall, " + bottles + " bottles of beer. Take 1 down and pass it around, " + (bottles - 1) + " bottles of beer on the wall.");
    bottles--;
}

}

bottleDrink();