import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavAnimationService {
  private _isNavOpen = signal(false);
  public readonly isNavOpen = this._isNavOpen;

  show() {
    this._isNavOpen.set(true);
  }

  hide() {
    this._isNavOpen.set(false);
  }

  toggle() {
    this._isNavOpen.update((value) => !value);
  }
}
