import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-default-login-layout',
  imports: [NgOptimizedImage],
  templateUrl: './default-login-layout.html',
  styleUrl: './default-login-layout.scss'
})
export class DefaultLoginLayout {
  @Input() title: string ="";
  @Input() primaryBtnText: string ="";
  @Input() secondaryBtnText: string ="";
}
