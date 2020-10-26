import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { UpdateCurrentlySelectedCioc } from '../store/actions';
import { fromCommon } from '../store/reducers';

@Injectable({
  providedIn: 'root'
})
export class DataFacadeCommonService {

  constructor(private store: Store<fromCommon.State>) { }

  updateCurrentlySelectedCioc(cioc: string) {
    this.store.dispatch(new UpdateCurrentlySelectedCioc({ cioc: cioc }))
  }
}
