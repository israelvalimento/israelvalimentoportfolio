import { Component, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { About } from './component/about/about';
import { Experience } from './component/experience/experience';
import { Techstack } from './component/techstack/techstack';
import { Project } from './component/project/project';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, About, Experience, Techstack, Project],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('israelvalimento');

  showBackToTop = false;

  // Listen to window scroll
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollTop =
      window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    this.showBackToTop = scrollTop > 1490;
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  isDesktop = window.innerWidth >= 1024; // lg breakpoint
  isFlipped = false;

  @HostListener('window:resize')
  onResize() {
    this.isDesktop = window.innerWidth >= 1024;

    // reset flip when switching to desktop
    if (this.isDesktop) {
      this.isFlipped = false;
    }
  }

  toggleFlip() {
    if (!this.isDesktop) {
      this.isFlipped = !this.isFlipped;
    }
  }
}
