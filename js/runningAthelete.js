function runningAthelete(actions,hurdle) {
    hurdle = hurdle.split('');
    for(let i=0; i<actions.length; i++) {
        if(actions[i] == "run" && hurdle[i] == "|") hurdle[i] = "/";
        if(actions[i] == "jump" && hurdle[i] == "_") hurdle[i] = "x";
    }
    return hurdle.join("");
}

/*
runningAthlete(["run", "jump", "run", "jump", "run"], "_|_|_") ➞ "_|_|_"

runningAthlete(["run", "jump", "run", "run", "run"], "_|_|_") ➞ "_|_/_"

runningAthlete(["jump", "jump", "jump", "jump", "jump"], "_|_|_") ➞ "x|x|x"

runningAthlete(["run", "run", "run", "run", "run"], "_|_|_") ➞ "_/_/_"
*/
