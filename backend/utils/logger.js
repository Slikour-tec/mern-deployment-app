import fs from "fs";
import path from "path";
const logFile = path.join("logs", "app.log");
export const logEvent = (message) => {
  const timestamp = new Date().toISOString();
  fs.appendFileSync(logFile, `[${timestamp}] ${message}\n`);
};
