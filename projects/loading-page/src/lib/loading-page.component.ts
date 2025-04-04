import { Component, Input, OnChanges  } from '@angular/core';

@Component({
  selector: 'lib-loading-page',
  template: `
    <div class="loading-page" [ngSwitch]="type" [ngStyle]="customVars">
      <!-- Spinners -->
      <div *ngSwitchCase="'circle'" class="spinner circle" [ngStyle]="{ borderColor: spinnerColor + ' transparent' }"></div>
      <div *ngSwitchCase="'dots'" class="spinner dots"><span></span><span></span><span></span></div>
      <div *ngSwitchCase="'bars'" class="spinner bars"><div></div><div></div><div></div><div></div></div>
      <div *ngSwitchCase="'pulse'" class="spinner pulse" [ngStyle]="{ backgroundColor: spinnerColor }"></div>
      <div *ngSwitchCase="'wave'" class="spinner wave"><div></div><div></div><div></div><div></div><div></div></div>
      <div *ngSwitchCase="'dual-ring'" class="spinner dual-ring" [style.color]="spinnerColor"></div>

      <!-- Skeleton -->
      <div *ngSwitchCase="'skeleton'" class="skeleton-wrapper">
        <div class="skeleton skeleton-title"></div>
        <div class="skeleton skeleton-text"></div>
        <div class="skeleton skeleton-text short"></div>
        <div class="skeleton skeleton-box"></div>
      </div>

      <!-- Default -->
      <div *ngSwitchDefault class="spinner circle" [ngStyle]="{ borderColor: spinnerColor + ' transparent' }"></div>

      <p *ngIf="type !== 'skeleton'" class="message">{{ message }}</p>
    </div>
  `,
  styles: [
    `
    .loading-page {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      font-family: sans-serif;
      background: var(--bg-color);
      color: var(--text-color);
    }

    .message {
      margin-top: 1rem;
      font-size: 1.2rem;
      color: var(--text-color);
    }

    .spinner.circle {
      width: var(--loader-size);
      height: var(--loader-size);
      border: 6px solid;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    .spinner.dots {
      display: flex;
      gap: 8px;
      color: var(--spinner-color);
    }
    .spinner.dots span {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: currentColor;
      animation: bounce 0.6s infinite alternate;
    }
    .spinner.dots span:nth-child(2) { animation-delay: 0.2s; }
    .spinner.dots span:nth-child(3) { animation-delay: 0.4s; }

    @keyframes bounce {
      to { transform: translateY(-10px); opacity: 0.6; }
    }

    .spinner.bars {
      display: flex;
      gap: 4px;
      color: var(--spinner-color);
    }
    .spinner.bars div {
      width: 6px;
      height: 30px;
      background-color: currentColor;
      animation: grow 1s infinite ease-in-out;
    }
    .spinner.bars div:nth-child(2) { animation-delay: 0.2s; }
    .spinner.bars div:nth-child(3) { animation-delay: 0.4s; }
    .spinner.bars div:nth-child(4) { animation-delay: 0.6s; }

    @keyframes grow {
      0%, 100% { transform: scaleY(0.4); }
      50% { transform: scaleY(1.2); }
    }

    .spinner.pulse {
      width: var(--loader-size);
      height: var(--loader-size);
      border-radius: 50%;
      animation: pulse 1.2s infinite ease-in-out;
    }

    @keyframes pulse {
      0%, 100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.3); opacity: 0.5; }
    }

    .spinner.wave {
      display: flex;
      gap: 6px;
      color: var(--spinner-color);
    }
    .spinner.wave div {
      width: 6px;
      height: 30px;
      background-color: currentColor;
      animation: wave 1.2s infinite;
    }
    .spinner.wave div:nth-child(1) { animation-delay: 0s; }
    .spinner.wave div:nth-child(2) { animation-delay: 0.1s; }
    .spinner.wave div:nth-child(3) { animation-delay: 0.2s; }
    .spinner.wave div:nth-child(4) { animation-delay: 0.3s; }
    .spinner.wave div:nth-child(5) { animation-delay: 0.4s; }

    @keyframes wave {
      0%, 100% { transform: scaleY(0.5); }
      50% { transform: scaleY(1.5); }
    }

    .spinner.dual-ring {
      display: inline-block;
      width: calc(var(--loader-size) + 14px);
      height: calc(var(--loader-size) + 14px);
      color: var(--spinner-color);
    }
    .spinner.dual-ring::after {
      content: " ";
      display: block;
      width: var(--loader-size);
      height: var(--loader-size);
      margin: 1px;
      border-radius: 50%;
      border: 6px solid currentColor;
      border-color: currentColor transparent currentColor transparent;
      animation: dual-ring 1.2s linear infinite;
    }

    @keyframes dual-ring {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    .skeleton-wrapper {
      width: 300px;
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 1rem;
    }

    .skeleton {
      background: linear-gradient(
        90deg,
        var(--skeleton-light) 25%,
        var(--skeleton-dark) 50%,
        var(--skeleton-light) 75%
      );
      background-size: 200% 100%;
      animation: shimmer 1.2s infinite;
      border-radius: 4px;
    }
    .skeleton-title { height: 20px; width: 60%; }
    .skeleton-text { height: 14px; width: 100%; }
    .skeleton-text.short { width: 80%; }
    .skeleton-box { height: 120px; width: 100%; border-radius: 8px; }

    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
  `]
})
export class LoadingPageComponent implements OnChanges {
  @Input() message = 'Loading...';
  @Input() spinnerColor = '#3498db';
  @Input() backgroundColor = '#ffffff';
  @Input() textColor = '#333';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() type:
    | 'circle'
    | 'dots'
    | 'bars'
    | 'skeleton'
    | 'pulse'
    | 'wave'
    | 'dual-ring' = 'circle';

  customVars: { [key: string]: string } = {};

  ngOnChanges() {
    this.customVars = {
      '--spinner-color': this.spinnerColor,
      '--text-color': this.textColor,
      '--bg-color': this.backgroundColor,
      '--loader-size': this.getSizeValue(this.size),
      ...this.getSkeletonShades(this.spinnerColor)
    };
  }

  getSizeValue(size: 'small' | 'medium' | 'large'): string {
    switch (size) {
      case 'small': return '30px';
      case 'large': return '80px';
      default: return '50px';
    }
  }

  getSkeletonShades(color: string): { [key: string]: string } {
    if (!color.startsWith('#')) {
      return {
        '--skeleton-light': '#eee',
        '--skeleton-dark': '#ddd'
      };
    }

    const lighten = (hex: string, amt: number) => {
      let num = parseInt(hex.slice(1), 16);
      let r = Math.min(255, (num >> 16) + amt);
      let g = Math.min(255, ((num >> 8) & 0x00FF) + amt);
      let b = Math.min(255, (num & 0x0000FF) + amt);
      return `rgb(${r},${g},${b})`;
    };

    return {
      '--skeleton-light': lighten(color, 40),
      '--skeleton-dark': lighten(color, 20)
    };
  }
}
