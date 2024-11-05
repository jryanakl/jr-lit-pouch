import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { db, ItemDoc } from '../data/db.js';
import { typographyStyles } from '../ui/styles/typography.styles.js';

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

  static styles = typographyStyles;
  
  render() {
    return html`
      <section id="jr-data-page" class="jr-data-page">
        <article id="jr-data-page__pouchdb">
          <h2>PouchDB</h2>
          <p>Retrieving the following dummy database items using <a href="https://pouchdb.com/" target="_blank">PouchDB</a></p>
          <ul class="jr-home-page__overview">
            ${this.items.map(item => html`<li>${item.name}: ${item.description}</li>`)}
          </ul>
        </article>
      </section>
      `;
  }
}
