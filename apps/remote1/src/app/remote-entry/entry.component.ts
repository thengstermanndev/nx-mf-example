import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'nx-module-federation-remote1-entry',
  template: `<nx-module-federation-nx-welcome></nx-module-federation-nx-welcome>`,
})
export class RemoteEntryComponent {}
