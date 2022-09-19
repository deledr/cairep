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

class Group {
  constructor(gropuname) {
    this.groupname = gropuname;
    this.groupid = 0;
    this.include = 1;
    this.items = new Array();
    this.totalPrice = 0.00;
    this.totalWeight = 0.00;
  }

  static printhtml(group) {
    const rawHtml = `
<div class="row" id="${ID_ROOT_CONTAINER}${group.groupid}">
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
                      <td class="u-tC totalCount" id='${ID_TOT_PRICE}${group.groupid}' headers="C125994632234120707">Totale ${group.totalPrice}</td>
                      <td class="u-tC" headers="C122456234565849347"></td>
                      <td class="u-tC" headers="C122456315513849348"></td>
                      <td class="u-tC totalCount" id='${ID_TOT_WEIGHT}${group.groupid}' headers="C125994702459120708">Totale ${group.totalWeight}</td>
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
</div>
`;
  return rawHtml;
  }


}

class Preventivo {
  constructor() {
    this.groups = [];
  }

  static container = document.querySelectorAll('.t-Region-body')[1].firstElementChild;

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
    this.groups.forEach(grp => {
      if(group.groupname === grp.groupname)
        return false;
    });
    group.groupid = this.maxId;
    this.groups.push(group);
    let div = document.createElement('div');
    div.innerHTML = Group.printhtml(group);
    Preventivo.container.insertAdjacentElement('beforeend', div.firstElementChild);
    return true;
  }
}
