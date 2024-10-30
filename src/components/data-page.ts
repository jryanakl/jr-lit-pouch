import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { db, ItemDoc } from '../db.js';

/**
 * JrDataPage LitElement
 *
 */
@customElement('jr-data-page')
export class JrDataPage extends LitElement {
  @state() items: Array<any> = [];

  async connectedCallback() {
    super.connectedCallback();

    // Fetch all items from the database
    const result = await db.allDocs<ItemDoc>({ include_docs: true });
    this.items = result.rows.map((row: any) => row?.doc ? row.doc! : undefined);
  }

  render() {
    return html`
      <section id="jr-data-page">
        <h2>Data</h2>
        <p>Retrieving the following dummy database items using <a href="https://pouchdb.com/" target="_blank">PouchDB</a></p>
        <ul class="jr-main jr-list">
          ${this.items.map(item => html`<li>${item.name}: ${item.description}</li>`)}
        </ul>
      </section>
      `;
  }
}
