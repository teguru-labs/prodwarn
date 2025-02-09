import React from "react"

import { WarningIcon } from "~features/warning-icon"

export interface FlatWarningProps {
  message?: string
}

export const FloatWarning = ({ message }: FlatWarningProps) => {
  const [isMinimized, setIsMinimized] = React.useState(false)

  if (isMinimized) {
    return (
      <button
        type="button"
        className="tegu-warning-icon"
        title={message}
        onClick={() => setIsMinimized(false)}>
        <WarningIcon className="!tegu-w-16 !tegu-h-16" />
      </button>
    )
  }

  return (
    <div
      role="alert"
      className="tegu-warning tegu-cursor-pointer"
      title="Double click to minimize"
      onDoubleClick={() => setIsMinimized(true)}>
      <WarningIcon className="!tegu-w-12 !tegu-h-12" />
      <span className="tegu-uppercase">
        Caution: This is a production site. Do not perform any actions!
      </span>
    </div>
  )
}
