import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { About } from './component/about/about';
import { Experience } from './component/experience/experience';
import { Techstack } from './component/techstack/techstack';
import { Project } from './component/project/project';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, About, Experience, Techstack, Project],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('israelvalimento');
}
