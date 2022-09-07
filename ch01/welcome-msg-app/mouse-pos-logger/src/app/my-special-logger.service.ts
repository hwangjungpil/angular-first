import { Injectable, Inject } from '@angular/core';
import { LogLevel } from './log-level';
import { format } from 'date-fns';
import { LoggerService } from './logger-service';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class MySpecialLoggerService extends LoggerService{
  
  logs: string[] = [];
  private readonly MAX_HISTORY_CNT: number=100;
  private readonly TIME_FORMATTER: string = "yyyy-MM-dd HH:mm:ss.SSS";

  
  constructor(@Inject('logLevel') logLevel: LogLevel) { 
    super(logLevel);
    
  }
  
  log(logLevel: LogLevel, msg: string){
    const logMsg = this.getFormattedLogMsg(logLevel, msg);
    if ( this.isProperLogLevel(logLevel)){
      console.log(logMsg);
      this.keepLogHistory(logMsg);
    }
  }

  private keepLogHistory(log: string) {
    if(this.logs.length === this.MAX_HISTORY_CNT){
      this.logs.shift();
    }
    this.logs.push(log);
  }

  private getFormattedLogMsg(logLevel: LogLevel, msg: string){
    const curTimestamp = format(new Date(), this.TIME_FORMATTER);
    return `[${LogLevel[logLevel]}] ${curTimestamp} - ${msg}`;
  }



}
