function rand(min=1000, max=3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num)
}

function f1(callback) {
    setTimeout(() => {
        console.log("f1");
        if (callback) callback();
    }, rand());
}

function f2(callback) {
    setTimeout(() => {
        console.log("f2");
        if (callback) callback();
    }, rand());
}

function f3(callback) {
    setTimeout(() => {
        console.log("f3");
        if (callback) callback();
    }, rand());
}

const f1CallBack = () => {
    f2(f2Callback);
}

const f2Callback = () => {
    f3(f3CallBack);
}

const f3CallBack = () => {
    console.log("Hello world!");            
}

f1(f1CallBack);

