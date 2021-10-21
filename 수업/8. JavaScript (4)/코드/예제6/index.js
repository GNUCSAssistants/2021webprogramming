const boom = () => {
    const tests = document.querySelectorAll(".test");
    for(let i = 0 ; i < tests.length ; i++ ) {
        tests[i].value = "짠";
    }
};

