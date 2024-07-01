import { NgClass } from '@angular/common';
import { Component, OnInit, input, signal } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NzIconModule, NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent implements OnInit {
  public icon = input<string>('');
  public class = input<string>('');
  public ifCOntainClass = signal<string>('');

  ngOnInit(): void {
    this.containClass();
  }

  private containClass() {
    this.ifCOntainClass.set(this.class() ? this.class() : this.icon());
  }
}
