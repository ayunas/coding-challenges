function convertPercentage(percentages) {
    return percentages.map(p => parseFloat(p) / 100)
}

//example : ['45%','30%','22%'] => [.45, .3, .22]