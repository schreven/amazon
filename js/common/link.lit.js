import { html } from "../../../node_modules/lit-html/lit-html.js";
import { classFromProps, killDefault } from "../utilities.js";
import { classMap } from "../../../node_modules/lit-html/directives/class-map.js";

export const link = ({
  title = undefined,
  content = undefined,
  onClick,
  onHover = undefined,
  style = [],
  _baseStyle = []
}) => {
  console.log(!!onClick);

  return html`
    <a
      href="#"
      @click=${onClick}
      class=${classMap(classFromProps({ style, _baseStyle }))}
    >
      ${title} ${content}
    </a>
  `;
};