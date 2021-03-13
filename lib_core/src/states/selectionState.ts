import { makeAutoObservable } from 'mobx';
import { RootStore } from './rootStore';

export class SelectionState {
  private _selectedItems: ISelectableItem[] = [];

  private _rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this._rootStore = rootStore;
  }

  get selectedItems(): Readonly<ISelectableItem[]> {
    return this._selectedItems;
  }

  select = (item: ISelectableItem, multipleActivated: boolean) => {
    if (multipleActivated) {
      if (this._selectedItems.includes(item)) {
        item.selected = false;
        this._selectedItems = this._selectedItems.filter((i) => i !== item);
      } else {
        item.selected = true;
        this._selectedItems.push(item);
      }
    } else {
      this.clear();
      item.selected = true;
      this._selectedItems.push(item);
    }
  };

  clear = () => {
    this._selectedItems.forEach((i) => (i.selected = false));
    this._selectedItems = [];
  };
}

export interface ISelectableItem {
  selected: boolean;
}
