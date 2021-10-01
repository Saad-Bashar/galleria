import * as React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={26} height={24} {...props}>
      <G stroke="#000" fill="none" fillRule="evenodd">
        <Path
          d="M1.528 1.843l20.538 10.27L1.528 22.382V1.843z"
          strokeWidth={2}
        />
        <Path fill="#D8D8D8" d="M24.708.5h1v22.775h-1z" />
      </G>
    </Svg>
  )
}

export default SvgComponent