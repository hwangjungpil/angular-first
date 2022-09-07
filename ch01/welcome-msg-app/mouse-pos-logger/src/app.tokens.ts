import { InjectionToken } from "@angular/core";
import { LogLevel } from "./app/log-level";
export const LOG_LEVEL_TOKEN = new InjectionToken<LogLevel>('logLevel');