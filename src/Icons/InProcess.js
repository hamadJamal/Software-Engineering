import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={46}
      height={41}
      viewBox="0 0 36 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M24.417 2.5l10.908 1.3-8.983 7.962L24.417 2.5zM11.583 28.5L.675 27.2l8.983-7.962 1.925 9.262zM3.333 9.812L4.8.144l8.983 7.962-10.45 1.706z"
        fill="#2E305F"
      />
      <Path
        d="M4.525 13.225l-3.85.65c-.092.569-.092 1.056-.092 1.625 0 3.738 1.467 7.313 4.217 10.075l2.75-2.113c-2.108-2.193-3.3-5.037-3.3-7.962 0-.731.092-1.544.275-2.275zM18 .063c-4.95 0-9.35 1.868-12.558 4.793l2.566 2.275c2.567-2.356 6.05-3.819 9.992-3.819.825 0 1.742.082 2.567.244l.641-3.168C20.2.144 19.1.062 18 .062zM31.475 17.775l3.85-.65c.092-.569.092-1.056.092-1.625 0-3.575-1.375-7.069-3.942-9.831L28.633 7.7c2.017 2.194 3.117 4.956 3.117 7.719 0 .812-.092 1.625-.275 2.356zM27.992 23.869c-2.567 2.356-6.05 3.819-9.992 3.819-.825 0-1.742-.082-2.567-.244l-.641 3.169c1.1.162 2.2.243 3.208.243 4.95 0 9.35-1.869 12.558-4.794l-2.566-2.193z"
        fill="#2E305F"
      />
      <Path
        d="M32.667 21.188L31.2 30.855l-8.983-7.962 10.45-1.706z"
        fill="#2E305F"
      />
    </Svg>
  )
}

export default SvgComponent