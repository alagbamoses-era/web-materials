function bmiCalculator (weight, height) {
    bmi = weight/ (height * height)
    
    if (bmi > 24.9) {
        interpretation = "overweight"
    } 
    if (bmi > 18.5 && bmi <= 24.9) {
        interpretation = "normal weight"
    } else {
        interpretation = "underweight"
    }
    return interpretation;
}

bmiCalculator(55, 1.6)