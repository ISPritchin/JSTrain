class Counter {
    count = 0;

    inc = () => {
        this.count += Counter.incStep;
    }

    static incStep = 2;

    static incrementAll = function(arr) {
        arr.forEach((c) => c.inc())
    }
}

const cnt = new Counter();
console.log(cnt.count)
cnt.inc()
console.log(cnt.count)