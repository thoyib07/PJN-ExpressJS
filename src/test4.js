function call(x) { 
    let int = x;
    if (int !== 0) {
        console.info('*');
        int = int-1;
        call(int);
        int = int+1;
        console.info(int);
    }
}

call(-1);