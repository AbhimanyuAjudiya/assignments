function startCounter(count) {
    setTimeout(() => {
      console.log(count);
      if (count < 10) {
        startCounter(count + 1);
      } else {
        console.log('Counter stopped.');
      }
    }, 1000); 
}
startCounter(1);