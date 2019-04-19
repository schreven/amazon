import { html } from "../lib/js/lit-html/lit-html.js";

export const pickEscenario = html`
  <!-- to embed : 
  <div w3-include-html="html/pickEscenario.html"></div>
-->

  <div id="radio_container">
    <tr id="scenario">
      <td>
        <!--<p class="row-label">Eligir Escenario</p>-->
        <div class="input-radio">
          <input
            type="radio"
            class="radio_btn"
            name="radio1"
            id="btnSost"
            checked="checked"
            onchange="updateMap2('Sost')"
            autocomplete="off"
          />
          <label for="b_radio-1">Futuro Sostenible</label>
        </div>
        <div class="input-radio">
          <input
            type="radio"
            class="radio_btn"
            name="radio1"
            id="btnReal"
            value="3"
            onchange="updateMap2('Real')"
            autocomplete="off"
          />
          <label for="b_radio-2">Futuro Eco-Turismo</label>
        </div>
        <div class="input-radio">
          <input
            type="radio"
            class="radio_btn"
            name="radio1"
            id="btnPeor"
            onchange="updateMap2('Peor')"
            autocomplete="off"
          />
          <label for="b_radio-3">Futuro "Peor"</label>
        </div>
      </td>
    </tr>
  </div>
`;
