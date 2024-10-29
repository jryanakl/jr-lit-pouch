var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var JrTable_1;
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
/**
 * JrTable LitElement
 *
 */
let JrTable = JrTable_1 = class JrTable extends LitElement {
    constructor() {
        super(...arguments);
        this.buttonText = 'Click me!';
    }
    render() {
        return html `
      <table class="jr-table">  
        <tbody class="jr-table__tbody">
          <tr class="jr-table__tr">
            ${JrTable_1.headers.map(header => html `
              <th class="jr-table__th jr-table__th-column" scope="col">${header}</th>
            `)}
          </tr>
          ${JrTable_1.rows.map(row => html `
            <tr class="jr-table__tr">
              ${row.map(cell => html `<td class="jr-table__td">${cell}</td>`)}
            </tr>
          `)}
        </tbody>
      </table>
    `;
    }
};
JrTable.headers = ['State', 'Electricity', 'Gas'];
JrTable.rows = [
    ['Kansas', '9.41', '3.12'],
    ['Iowa', '9.56', '3.68'],
    ['Missouri', '9.10', '3.39']
];
JrTable.styles = css `
    :host {
    }

    .jr-table {
      width: 100%;
    }

    .jr-table__th, .jr-table__td {
      padding: 0.5rem;
    }

    .jr-table__th-column, .jr-table__th-row {
      font-weight: bold;
    }

    .jr-table__th-column {
      width: 33%;
      background-color: #222;
    }
  `;
__decorate([
    property()
], JrTable.prototype, "buttonText", void 0);
JrTable = JrTable_1 = __decorate([
    customElement('jr-table')
], JrTable);
export { JrTable };
