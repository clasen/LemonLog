const debug = require('debug');
const util = require('util');

class LemonLogClass {
    constructor(name) {
        const pad = '-----------------';
        this.name = name;
        this.loggers = {
            info: debug(this.rpad(`${name}:info `, pad)),
            debug: debug(this.rpad(`${name}:debug `, pad)),
            inspect: debug(this.rpad(`${name}:inspect `, pad)),
            warn: debug(this.rpad(`${name}:warn `, pad)),
            error: debug(this.rpad(`${name}:error `, pad)),
        };

        // Set up console bindings
        this._setupConsoleBindings();
    }

    info(...args) {
        this.loggers.info(...args);
    }

    inspect(...args) {
        this.loggers.inspect(util.inspect(args, { showHidden: false, depth: null, colors: true }))
    }

    debug(...args) {
        this.loggers.debug(...args);
    }

    warn(...args) {
        this.loggers.warn(...args);
    }

    error(...args) {
        this.loggers.error(...args);
    }

    rpad(str, pad) {
        return (str + pad).substring(0, pad.length);
    }

    _setupConsoleBindings() {
        const { info, debug, warn, error, inspect } = this.loggers;
        info.log = console.info.bind(console);
        debug.log = console.log.bind(console);
        inspect.log = console.log.bind(console);
        warn.log = console.log.bind(console);
        error.log = console.error.bind(console);
        

        // Optional: Set colors
        info.color = 6;
        debug.color = 2;
        warn.color = 5;
        error.color = 1;
        inspect.color = 12;
    }

    callback() {
        const { error, debug } = this.loggers;
        let args = Array.from(arguments);
        return function (err, r) {
            if (err !== null) {
                error("%O\n%O\n%O", err, args, r);
            } else {
                debug("%O\n%O", args, r);
            }
        };
    }

    exec(cbk = () => { }) {
        const { error } = this.loggers;
        return function (err, r) {
            if (err !== null) {
                error("%O\n%O", err, r);
            } else {
                cbk(r);
            }
        };
    }
}

// Wrapper function to support both constructor and function usage
function LemonLog(path) {
    if (this instanceof LemonLog) {
        return new LemonLogClass(path);
    } else {
        return new LemonLogClass(path);
    }
}

module.exports = LemonLog;
