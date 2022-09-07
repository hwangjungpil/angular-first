import { Component } from '@angular/core';
import { MySpecialLoggerService } from './my-special-logger.service';
import { LogLevel } from './log-level';

@Component({
  selector: 'mpl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mpl works!';
  // logger: MySpecialLoggerService;

  // constructor() {
  //   this.logger = new MySpecialLoggerService(LogLevel.INFO);
  //   // this.testLoggerLevel();
  // }

  constructor(private logger: MySpecialLoggerService) {}

  testLoggerLevel() {
    console.log("======= Default(Info) Log Level=======");
    this.logger.debug("test logging.... in debug ");
    this.logger.info("test logging.... in info ");
    this.logger.warn("test logging.... in warn ");
    this.logger.error("test logging.... in error ");

    
    this.logger.logLevel = LogLevel.DEBUG;
    console.log("======= Debug Log Level=======");
    this.logger.debug("test logging.... in debug ");
    this.logger.info("test logging.... in info ");
    this.logger.warn("test logging.... in warn ");
    this.logger.error("test logging.... in error ");

    this.logger.logLevel = LogLevel.WARN;
    console.log("======= Error Log Level=======");
    this.logger.debug("test logging.... in debug ");
    this.logger.info("test logging.... in info ");
    this.logger.warn("test logging.... in warn ");
    this.logger.error("test logging.... in error ");


  }

  printDebugLog() {
    this.logger.debug("test dependency injector tree!");
  }
}
