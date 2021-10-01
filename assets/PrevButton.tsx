import * as React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={26} height={24} {...props}>
      <G stroke="#000" fill="none" fillRule="evenodd">
        <Path
          d="M24.166 1.843L3.627 12.113l20.539 10.269V1.843z"
          strokeWidth={2}
        />
        <Path fill="#D8D8D8" d="M.986.5h-1v22.775h1z" />
      </G>
    </Svg>
  )
}

export default SvgComponent