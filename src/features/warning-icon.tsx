import { twMerge } from "tailwind-merge"

export interface WarningIconProps {
  className?: string
}

export const WarningIcon = ({ className }: WarningIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={twMerge(
      "tegu-fill-yellow-500 tegu-h-6 tegu-w-6 tegu-shrink-0 tegu-stroke-current",
      className
    )}
    fill="none"
    viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    />
  </svg>
)
