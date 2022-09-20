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

class Utils {
  constructor() {}

  static dotAdapter(num) {
    if((''+num).indexOf('.') < 0)
      return ''+num;
    else
      return (''+num).replace('.',',');
  }

  static printGroupHTML(group) {
    return `<div class="row" id="${ID_ROOT_CONTAINER}${group.groupid}">
      <div class="col col-12 apex-col-auto">
      <div class="t-IRR-region margin-bottom-lg lto122453127865849316_0 js-apex-region" role="group" aria-labelledby="R122453127865849316_heading">
      <h2 id="${ID_GRP_TITLE}${group.groupid}">${group.groupname.toUpperCase()}</h2>
      <div class="a-IRR-container">
      <div aria-live="polite" class="a-IRR">
      <div class="a-IRR-singleRowView"></div>
      <div class="a-IRR-fullView">
      <div class="a-IRR-toolbar">
      <div class="a-IRR-controls">
      <div class="a-IRR-controlGroup a-IRR-controlGroup--search a-IRR-controlGroup--hidden">
      <div class="a-IRR-search"><input type="hidden" /><input type="hidden" value="" /></div>
      </div>
      <div class="a-IRR-controlGroup a-IRR-controlGroup--views"></div>
      <div class="a-IRR-controlGroup a-IRR-controlGroup--options">
      <input type="hidden" value="50" />
      <div class="a-IRR-actions">
      <div class="a-IRR-buttons">
      <button class="t-Button t-Button--icon t-Button--warning t-Button--iconLeft lto125994572236120706_0" id="${ID_BTN_REMOVE_FROM_TOT}${group.groupid}" onclick="removeFromTot(this)" type="button" >
      <span class="t-Icon t-Icon--left fa fa-cart-arrow-up" aria-hidden="true"></span><span class="t-Button-label">Rimuovi dal Totale</span>
      <span class="t-Icon t-Icon--right fa fa-cart-arrow-up" aria-hidden="true"></span>
      </button>
      <button class="t-Button t-Button--icon t-Button--danger t-Button--simple t-Button--iconLeft lto124310970846760704_0" id="${ID_BTN_REMOVE_GROUP}${group.groupid}" onclick="" type="button">
      <span class="t-Icon t-Icon--left fa fa-trash-o" aria-hidden="true"></span><span class="t-Button-label">Elimina Gruppo</span>
      <span class="t-Icon t-Icon--right fa fa-trash-o" aria-hidden="true"></span>
      </button>
      </div>
      </div>
      </div>
      </div>
      <div class="a-IRR-buttons">
      <button class="t-Button t-Button--icon t-Button--iconLeft lto122455527863849340_0 t-Button--hot" id="${ID_BTN_ADD_ITEM}${group.groupid}" onclick="openDialogItem(this);" type="button">
      <span class="t-Icon t-Icon--left fa fa-plus" aria-hidden="true"></span><span class="t-Button-label">Articolo</span><span class="t-Icon t-Icon--right fa fa-plus" aria-hidden="true"></span>
      </button>
      <button class="t-Button t-Button--icon t-Button--iconLeft lto124310790179760702_0" id="${ID_BTN_MOVE_UP_ITEMS}${group.groupid}" onclick="" type="button">
      <span class="t-Icon t-Icon--left fa fa-arrow-up" aria-hidden="true"></span><span class="t-Button-label">Sposta</span>
      <span class="t-Icon t-Icon--right fa fa-arrow-up" aria-hidden="true"></span>
      </button>
      <button class="t-Button t-Button--icon t-Button--iconLeft lto124310824609760703_0" id="${ID_BTN_MOVE_DOWN_ITEMS}${group.groupid}" onclick="" type="button">
      <span class="t-Icon t-Icon--left fa fa-arrow-down" aria-hidden="true"></span><span class="t-Button-label">Sposta</span>
      <span class="t-Icon t-Icon--right fa fa-arrow-down" aria-hidden="true"></span>
      </button>
      <button class="t-Button t-Button--icon t-Button--danger t-Button--simple t-Button--iconLeft lto124310970846760704_0" id="${ID_BTN_REMOVE_ITEMS}${group.groupid}" onclick="deleteItems(this);" type="button">
      <span class="t-Icon t-Icon--left fa fa-trash-o" aria-hidden="true"></span><span class="t-Button-label">Elimina</span><span class="t-Icon t-Icon--right fa fa-trash-o" aria-hidden="true"></span>
      </button>
      </div>
      </div>
      <div class="a-IRR-content">
      <div class="a-IRR-dialogBody" style="display: none;"></div>
      <input type="hidden" value="122453246973849317" />
      <input type="hidden" value="JUPE" />
      <input type="hidden" value="122548580527757774" />
      <input type="hidden" value="REPORT" />
      <style type="text/css"></style>
      <div class="a-IRR-chartView"></div>
      <div class="a-IRR-groupByView"></div>
      <div class="a-IRR-pivotView"></div>
      <div class="a-IRR-reportView">
      <div class="a-IRR-tableContainer">
      <table id="${ID_TABLE}${group.groupid}" class="a-IRR-table">
      <tbody>
      <tr id="${ID_ROW_HEADER}${group.groupid}">
      <th class="a-IRR-header" id="C124311034721760705"><span class="a-IRR-headerLabel"><input type="checkbox"  onclick="selAll(this);" /></span></th>
      <th class="a-IRR-header" id="C122455892539849343"><a class="a-IRR-headerLink" data-column="122455892539849343" href="#">Codice</a></th>
      <th class="a-IRR-header" id="C122455935492849344"><a class="a-IRR-headerLink" data-column="122455935492849344" href="#">Articolo</a></th>
      <th class="a-IRR-header" id="C122456192991849346"><a class="a-IRR-headerLink" data-column="122456192991849346" href="#">Prezzo<br />d'Acquisto</a></th>
      <th class="a-IRR-header" id="C125994632234120404"><a class="a-IRR-headerLink" data-column="125994632234120404" href="#">Ricarico %</a></th>
      <th class="a-IRR-header" id="C122456192931849346"><a class="a-IRR-headerLink" data-column="122456192931849346" href="#">Prezzo<br />di Vendita</a></th>
      <th class="a-IRR-header" id="C122456586781849350"><a class="a-IRR-headerLink" data-column="122456586781849350" href="#">Quantità</a></th>
      <th class="a-IRR-header" id="C122456586781849353"><a class="a-IRR-headerLink" data-column="122456586781849353" href="#">UM</a></th>
      <th class="a-IRR-header" id="C125994632234120707"><a class="a-IRR-headerLink" data-column="125994632234120707" href="#">Prezzo <br />Totale</a></th>
      <th class="a-IRR-header" id="C122456234565849347"><a class="a-IRR-headerLink" data-column="122456234565849347" href="#">Note</a></th>
      <th class="a-IRR-header" id="C122456315513849348"><a class="a-IRR-headerLink" data-column="122456315513849348" href="#">Peso (Kg)</a></th>
      <th class="a-IRR-header" id="C125994702459120708"><a class="a-IRR-headerLink" data-column="125994702459120708" href="#">Peso<br />Totale (Kg)</a></th>
      <th class="a-IRR-header" id="C124311280166760707"><a class="a-IRR-headerLink" data-column="124311280166760707" href="#">Modifica</a></th>
      </tr>
      <tr id="${ID_ROW_FOOTER}${group.groupid}">
      <td class="u-tC" headers="C124311034721760705"><input type="hidden" value="${group.include}" onchange="setIncludeFlag(this)"/></td>
      <td class="u-tC" headers="C122455892539849343"></td>
      <td class="u-tC" headers="C122455935492849344"></td>
      <td class="u-tC" headers="C122456192991849346"></td>
      <td class="u-tC" headers="C125994632234120404"></td>
      <td class="u-tC" headers="C122456192931849346"></td>
      <td class="u-tC" headers="C122456586781849350"></td>
      <td class="u-tC" headers="C122456586781849353"></td>
      <td class="u-tC totalCount" id='${ID_TOT_PRICE}${group.groupid}' headers="C125994632234120707">Totale ${Utils.dotAdapter(group.totalPrice)}</td>
      <td class="u-tC" headers="C122456234565849347"></td>
      <td class="u-tC" headers="C122456315513849348"></td>
      <td class="u-tC totalCount" id='${ID_TOT_WEIGHT}${group.groupid}' headers="C125994702459120708">Totale ${Utils.dotAdapter(group.totalWeight)}</td>
      <td class="u-tC" headers="C124311280166760707"></td>
      </tr>
      </tbody>
      </table>
      </div>
      <div class="a-IRR-paginationWrap a-IRR-paginationWrap--bottom">
      <ul class="a-IRR-pagination">
      <li aria-hidden="true" class="a-IRR-pagination-item is-disabled"></li>
      <li class="a-IRR-pagination-item"><span class="a-IRR-pagination-label"></span></li>
      <li aria-hidden="true" class="a-IRR-pagination-item is-disabled"></li>
      </ul>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>`;
  }

  static printRowHTML(item) {
    return `<tr id="${ID_ROW_ITEM}${this.groupid}_${item.rowid}">
      <td class="u-tC" headers="C124311034721760705" name="selezione"><input type="checkbox" onchange="myRowSelected(this)"/></td>
      <td class="u-tC" headers="C122455892539849343" name="codice">${item.id}</td>
      <td class="u-tC" headers="C122455935492849344" name="articolo">${item.description}</td>
      <td class="u-tC" headers="C122456192991849346" name="prezzo_acq">${Utils.dotAdapter(item.cost)}</td>
      <td class="u-tC" headers="C125994632234120404" name="ricarico">${Utils.dotAdapter(item.markup)}</td>
      <td class="u-tC" headers="C122456192931849346" name="prezzo_ven">${item.sellingPrince}</td>
      <td class="u-tC unselectable" headers="C122456586781849350" name="quantita">
      <span class="t-Icon t-Icon--right fa fa-minus-circle-o" aria-hidden="true" onclick="modQta(this, 'min');"></span>
      <span>&nbsp;&nbsp;&nbsp;</span>${item.quantity}<span>&nbsp;&nbsp;&nbsp;</span>
      <span class="t-Icon t-Icon--right fa fa-plus-circle-o" aria-hidden="true" onclick="modQta(this, 'plu');"></span>
      </td>
      <td class="u-tC" headers="C122456586781849353" name="um">${item.measureUnit}</td>
      <td class="u-tC" headers="C125994632234120707" name="prezzo_tot">${item.totalSellingPrice}</td>
      <td class="u-tC" headers="C122456234565849347" name="note">${item.notes}</td>
      <td class="u-tC" headers="C122456315513849348" name="peso">${Utils.dotAdapter(item.weight)}</td>
      <td class="u-tC" headers="C125994702459120708" name="peso_tot">${Utils.dotAdapter(item.totalWeight)}</td>
      <td class="u-tC" headers="C124311280166760707" name="modifica">
      <span class="t-Icon t-Icon--right fa fa-pencil-square-o" aria-hidden="true" id="${ID_BTN_MOD_ITEM}${this.groupid}_${item.rowid}" onclick="openDialogModItem(this);"></span></td>
      </tr>`;
  }
}

class Item {
  constructor() {
    this.id = '';
    this.description = '';
    this.cost = 0.00;
    this.measureUnit = '';
    this.quantity = 1;
    this.weight = 0.00;
    this.markup = 0.00;
    this.forcedSellingPrice = 0.00;
    this.notes = '';
    this.costFlag = 0;
    this.markupFlag = 0;
    this.sellingPriceFlag = 0;
    this.rowid = 0;
    this.checked = 0;
  }

  get sellingPrince() {
    if(this.markupFlag)
      return this.cost*(1+this.markup);
    else if(this.sellingPriceFlag)
      return this.forcedSellingPrice;
    else
      return -1;
  }
  get totalSellingPrice() {
    return this.sellingPrince*this.quantity;
  }

  get totalWeight() {
    return this.weight*this.quantity;
  }


}

class Group {
  constructor(groupname) {
    this.groupname = groupname;
    this.groupid = 0;
    this.include = 1;
    this.items = [];
    this.totalPrice = 0.00;
    this.totalWeight = 0.00;
  }



  get maxRowId() {
    let max = 0;
    this.items.forEach(item => max = max < item.rowid ? item.rowid : max);
    return  ++max;
  }


  get isAnyItemChecked() {
    let checked = false;
    this.items.forEach(item => {
      if(item.checked === 1) {
        checked = true;
          return;
      }
    });
    return checked;
  }

  get groupFooter() {
    return document.getElementById(`#${ID_ROW_FOOTER}${this.groupid}`);
  }

  indexByRowId(rowid) {
    let index = -1;
    for(let i = 0; i < this.items.length; i++) {
      if (this.items[i].rowid === rowid) {
        index = i;
        break;
      }
    }
    return index;
  }

  addItem(item) {
    item.rowid = this.maxRowId;
    this.items.push(item);
    let row = Utils.printRowHTML(item);
    let div = document.createElement('div');
    div.innerHTML = row;
    this.groupFooter.insertAdjacentElement('beforebegin', div.firstElementChild);
  }

  removeItems() {
    while(this.isAnyItemChecked) {
      for(let i = 0; i<this.items.length; i++) {
        if(this.items[i].checked === 1) {
          this.items.splice(i,1);
          $(`#${ID_ROW_ITEM}${this.groupid}_${item.rowid}`).children('td').animate({padding: 0
        }).wrapInner('<div />').children().slideUp(function() {
          $(this).closest('tr').remove();
        });
          break;
        }
      }
    }
  }

}


class Estimate {
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

  indexByGroupId(groupid) {
    let i = -1;
    this.groups.forEach(grp, index => {
      if(grp.groupid === groupid)
        i = index;
    });
    return i;
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
    div.innerHTML = Utils.printGroupHTML(group);
    this.container.insertAdjacentElement('beforeend', div.firstElementChild);
    return true;
  }
}



