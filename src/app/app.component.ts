import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loaderTypes = [
    { type: 'circle', label: 'Circle', color: '#3498db', message: 'Loading Circle...' },
    { type: 'dots', label: 'Dots', color: '#e74c3c', message: 'Loading Dots...' },
    { type: 'bars', label: 'Bars', color: '#2ecc71', message: 'Loading Bars...' },
    { type: 'pulse', label: 'Pulse', color: '#9b59b6', message: 'Loading Pulse...' },
    { type: 'wave', label: 'Wave', color: '#f39c12', message: 'Loading Wave...' },
    { type: 'dual-ring', label: 'Dual Ring', color: '#1abc9c', message: 'Loading Dual Ring...' },
    { type: 'skeleton', label: 'Skeleton', color: '#95a5a6', message: '' }
  ] as const;
}


