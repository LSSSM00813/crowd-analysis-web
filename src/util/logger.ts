type LogLevel = "INFO" | "WARN" | "ERROR" | "FATAL" | "DEBUG";

export const INFO = (message: string) => {
  LOG("INFO", message);
};

export const WARN = (message: string) => {
  LOG("WARN", message);
};

export const ERROR = (message: string) => {
  LOG("ERROR", message);
};

export const FATAL = (message: string) => {
  LOG("FATAL", message);
};

export const DEBUG = (message: string) => {
  LOG("DEBUG", message);
};

export const LOG = (level: LogLevel, message: string) => {
  const dt = new Date();
  const logStr = `${dt.toISOString()} ${level} ${message}`;

  switch (level) {
    case "INFO":
      console.log(logStr);
      break;
    case "WARN":
      console.warn(logStr);
      break;
    case "ERROR":
      console.error(logStr);
      console.trace();
      break;
    case "FATAL":
      console.error(logStr);
      console.trace();
      break;
    case "DEBUG":
      console.debug(logStr);
      break;
    default:
      throw Error("LOG unknown loglevel");
  }
};
