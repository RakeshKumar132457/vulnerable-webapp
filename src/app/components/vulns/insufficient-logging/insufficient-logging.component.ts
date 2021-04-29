import { Component, OnInit } from '@angular/core';
import { LoggingService } from 'src/app/core/services/logging.service';

@Component({
  selector: 'app-insufficient-logging',
  templateUrl: './insufficient-logging.component.html',
  styleUrls: ['./insufficient-logging.component.scss']
})
export class InsufficientLoggingComponent implements OnInit {

  constructor(private logger: LoggingService) { }

  testLog() {
    this.logger.log("Test the `log()` Method");
  }

  ngOnInit(): void {
  }

}
