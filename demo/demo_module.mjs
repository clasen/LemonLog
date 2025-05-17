import LemonLog from '../index.js';
const log = new LemonLog('myApp');

log.info('This is an info message', { a: 1 });
log.debug('This is a debug message');
log.inspect('This is a full json depth inspect message', { a: { b: { c: { d: 1 } } } });
log.warn('This is a warning');
log.error('This is an error');

async function someAsyncFunction(fail, cbk) {

    if (fail) {
        cbk({ return: "error" }, null);
    } else {
        cbk(null, { return: "ok" });
    }
}

// Custom callback example
someAsyncFunction(false, log.callback("Custom success message"));

someAsyncFunction(true, log.callback("Custom error message"));


// Exec example
someAsyncFunction(false, log.exec(result => {
    log.debug('Success:', result);
}));

someAsyncFunction(true, log.exec(result => {
    log.debug('Error:', result);
}));
