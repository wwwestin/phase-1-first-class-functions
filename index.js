let foo = new Function();
    foo();

function returnsAnAnonymousFunction(foo) {
    return foo();
};

function returnsANamedFunction() {
    return returnsAnAnonymousFunction;
};

function receivesAFunction(spy) {
    return spy();
};


receivesAFunction(spy);