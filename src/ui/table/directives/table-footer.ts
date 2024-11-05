import { html } from 'lit';

export const tableFooter = (footerContent: string) => html`
  <tfoot class="jr-table-footer">
    <tr class="jr-table-footer__tr">
      <td colspan=1 class="jr-table-footer__td">
        <small class="jr-table-footer-content">
          ${footerContent}
        </small>
      </td>
    </tr>
  </tfoot>
`;
