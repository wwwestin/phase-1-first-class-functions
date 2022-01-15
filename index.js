function returnsANamedFunction() {
    return returnsAnAnonymousFunction;
};


function receivesAFunction(spy) {
    return spy();
};

returnsAnAnonymousFunction(foo);

function returnsAnAnonymousFunction() {
    return function () {
        console.log('');
      };
};



receivesAFunction(spy);

