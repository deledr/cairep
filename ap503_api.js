const ID_ROOT_CONTAINER = 'grp_container_';
const ID_TABLE = 'grp_table_';
const ID_GRP_TITLE = 'grp_title_';
const ID_BTN_ADD_ITEM = 'btn_additem_';
const ID_BTN_MOD_ITEM = 'btn_moditem_';
const ID_BTN_REMOVE_ITEMS = 'btn_removeitems_';
const ID_BTN_MOVE_UP_ITEMS = 'btn_moveupitems_';
const ID_BTN_MOVE_DOWN_ITEMS = 'btn_movedownitems_';
const ID_BTN_REMOVE_FROM_TOT = 'btn_removefromtot_';
const ID_BTN_REMOVE_GROUP = 'btn_removegroup_';
const ID_ROW_HEADER = 'row_header_';
const ID_ROW_ITEM = 'row_item_';
const ID_ROW_FOOTER = 'row_footer_';
const ID_TOT_PRICE = 'grp_totprice_';
const ID_TOT_WEIGHT = 'grp_totweight_';





class Preventivo {
  constructor() {
    this.groups = [];
  }

  get container() {
    return document.querySelectorAll('.t-Region-body')[1].firstElementChild;
  }

  get maxId() {
    let max = 0;
    this.groups.forEach(grp => max = max < grp.groupid ? grp.groupid : max);
    return ++max;
  }
  
  doesItWork() {
    console.log('from gh: it works!');
  }
  
  addGroup(group) {
    if(group.groupname.length === 0)
      return false;
    for(let i = 0; i < this.groups.length; i++) {
      if(group.groupname === this.groups[i].groupname)
        return false;
    }
    group.groupid = this.maxId;
    this.groups.push(group);
    let div = document.createElement('div');
    div.innerHTML = Group.printhtml(group);
    this.container.insertAdjacentElement('beforeend', div.firstElementChild);
    return true;
  }
}

let prev = new Preventivo();
console.log(prev.addGroup(new Group('abc')));
console.log(prev.addGroup(new Group('abc')));
console.log(prev.addGroup(new Group('abc')));