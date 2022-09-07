import { Component, OnInit, Input, Host, Optional, ViewEncapsulation } from '@angular/core';
import { MySpecialLoggerService } from '../my-special-logger.service';
import { LoggerService } from '../logger-service';
import { AnotherLoggerService } from '../another-logger.service';
import { LogLevel } from '../log-level';

@Component({
  selector: 'mpl-mouse-track-zone',
  templateUrl: './mouse-track-zone.component.html',
  styleUrls: ['./mouse-track-zone.component.css'],
  // providers: [MySpecialLoggerService, {provide: 'logLevel' , useValue: LogLevel.DEBUG}]
  encapsulation: ViewEncapsulation.ShadowDom
})
export class MouseTrackZoneComponent implements OnInit {


  // logLevel: LogLevel = LogLevel.INFO;
  // @Input() logger!: MySpecialLoggerService;
  logger : LoggerService;

  // constructor() { 
  //   this.logger = new MySpecialLoggerService(this.logLevel);
  // }

  constructor(
    @Host() @Optional() private mySpecialLogger: MySpecialLoggerService,
    anotherLogger: AnotherLoggerService
  ) {
    this.logger = mySpecialLogger ? mySpecialLogger : anotherLogger;
  }
  // constructor(private logger: MySpecialLoggerService){}

  ngOnInit(): void {
  }

  captureMousePos($event: MouseEvent){
    this.logger.debug('click event occured');
    const pos = [$event.clientX, $event.clientY];
    this.logger.info(`x:${pos[0]} y:${pos[1]}`);
  }
}
