import * as React from 'react'
import { SVGProps } from 'react'

const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="arrow-right_svg__h-6 arrow-right_svg__w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m17 8 4 4m0 0-4 4m4-4H3"
    />
  </svg>
)

export default SvgArrowRight
