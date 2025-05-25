import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavAnimationService {
  private _isNavOpen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  public isNavOpen$ = this._isNavOpen.asObservable();

  show() {
    this._isNavOpen.next(true);
  }

  hide() {
    this._isNavOpen.next(false);
  }
}
