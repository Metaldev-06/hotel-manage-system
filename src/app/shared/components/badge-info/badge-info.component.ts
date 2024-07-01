import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-badge-info',
  standalone: true,
  imports: [NgClass, NzIconModule],
  templateUrl: './badge-info.component.html',
  styleUrl: './badge-info.component.css',
})
export class BadgeInfoComponent {
  public info = input<boolean>(false);
}
