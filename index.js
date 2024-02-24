const debug = require('debug');

class LemonLog {
    constructor(name) {
        const pad = '-----------------';
        this.name = name;
        this.loggers = {
            info: debug(this.rpad(`${name}:info `, pad)),
            debug: debug(this.rpad(`${name}:debug `, pad)),
            warn: debug(this.rpad(`${name}:warn `, pad)),
            error: debug(this.rpad(`${name}:error `, pad)),
        };

        // Set up console bindings
        this.setupConsoleBindings();
    }

    info(...args) {
        this.loggers.info(...args);
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

    setupConsoleBindings() {
        const { info, debug, warn, error } = this.loggers;
        info.log = console.info.bind(console);
        debug.log = console.log.bind(console);
        warn.log = console.log.bind(console);
        error.log = console.error.bind(console);

        // Optional: Set colors
        info.color = 6;
        debug.color = 2;
        warn.color = 5;
        error.color = 1;
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

module.exports = LemonLog;
