function backToHome(directions){
    let dirVals = {N : 1, S : -1, E : -1, W : 1};
      directions = directions.split('');
      const sumValues = directions.reduce((acc,val) => acc + dirVals[val],0)
      return sumValues === 0 ? true : false;
  }

  /*
Mubashir has started his journey from home. Given a string of directions (N=North, W=West, S=South, E=East), he will walk for one minute in each direction. Determine whether a set of directions will lead him back to the starting position or not.

Examples
backToHome("EEWE") ➞ false

backToHome("NENESSWW") ➞ true

backToHome("NEESSW") ➞ false

  */