import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LogLevel } from './log-level';
import { MouseTrackZoneComponent } from './mouse-track-zone/mouse-track-zone.component';

import { MySpecialLoggerService } from './my-special-logger.service';
import { AnotherLoggerService } from './another-logger.service';
import { LOG_LEVEL_TOKEN } from 'src/app.tokens';

@NgModule({
  declarations: [
    AppComponent,
    MouseTrackZoneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    MySpecialLoggerService, 
    AnotherLoggerService,
    {provide: 'logLevel' , useValue: LogLevel.INFO}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
