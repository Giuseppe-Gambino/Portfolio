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

  private _isNavMobileOpen = signal(false);
  public readonly isNavMobileOpen = this._isNavMobileOpen;

  showMob() {
    this._isNavMobileOpen.set(true);
  }

  hideMob() {
    this._isNavMobileOpen.set(false);
  }

  toggleMob() {
    this._isNavMobileOpen.update((value) => !value);
  }
}
