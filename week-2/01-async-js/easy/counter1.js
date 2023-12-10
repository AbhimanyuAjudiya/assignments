let i = 0;
function counter(){
    i++;
}
setInterval(() => {
    counter();
    console.log(i);
}, 1000);