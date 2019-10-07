import { Component, Input } from '@angular/core';

@Component({
  selector: 'stats-comp',
  template: `
    <p>
      HEIGHT: {{ height }}
    </p>
    <p>
      WEIGHT: {{ weight }}
    </p>
  `
})

export class StatsComponent {
  @Input() height: number;
  @Input() weight: number;
}