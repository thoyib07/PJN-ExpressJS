function f(x,a) { 
    if (x <= a) {
        if (x=a) {
            console.info(true);
        } else {
            console.info(false);
        }
    } else {
        f(x-a,a);
    }
 }

f(3,2)