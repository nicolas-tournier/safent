import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { UpdateCurrentlySelectedAlpha3Code } from '../store/actions';
import { fromCommon } from '../store/reducers';

@Injectable({
  providedIn: 'root'
})
export class DataFacadeCommonService {

  constructor(private store: Store<fromCommon.State>) { }

  updateCurrentlySelectedCioc(alpha3Code: string) {
    this.store.dispatch(new UpdateCurrentlySelectedAlpha3Code({ alpha3Code: alpha3Code }))
  }
}
