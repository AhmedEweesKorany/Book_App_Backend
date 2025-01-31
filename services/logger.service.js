const winston = require("winston");
const dotenv = require("dotenv");

dotenv.config();

// date + logger level + myMsg
const dateFormat = () => {
    return new Date(Date.now()).toLocaleString();
};

class LoggerService {
    constructor(route) {
        this.route = route;
        const logger = winston.createLogger({
            level: "info",
            format: winston.format.printf(info => {
                let message = `${dateFormat()} | ${info.level.toUpperCase()} | ${info.message}`;
                if (info.obj) {
                    message += ` | data: ${JSON.stringify(info.obj)}`;
                }
                return message;
            }),
            transports: [
                new winston.transports.Console(),
                new winston.transports.File({ filename: `${process.env.LOG_FILE_PATH}/${route}.log` })
            ]
        });

        this.logger = logger;
    }

    async info(message, obj = null) {
        this.logger.log({level:"info",message,obj});
    }

    async error(message, obj = null) {
        this.logger.log({ level: "error", message, obj });
    }

    async debug(message, obj = null) {
        this.logger.log({ level: "debug", message, obj });
    }
}

module.exports = LoggerService;
