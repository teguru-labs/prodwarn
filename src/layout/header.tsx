import React from "react"

import pkg from "../../package.json"

export interface HeaderProps {
  title?: string
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <header className="tegu-navbar tegu-bg-neutral tegu-text-neutral-content">
      <div className="tegu-flex-none">
        <a className="tegu-btn tegu-btn-square tegu-btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="tegu-h-5 tegu-w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </a>
      </div>

      <div className="tegu-flex-1">
        <a className="tegu-btn tegu-btn-ghost tegu-text-xl">
          {title || pkg.displayName}
          {!title && <span className="tegu-text-xs">{pkg.version}</span>}
        </a>
      </div>

      <div className="tegu-flex-none">
        <a className="tegu-btn tegu-btn-square tegu-btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="tegu-inline-block tegu-h-5 tegu-w-5 tegu-stroke-current">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
          </svg>
        </a>
      </div>
    </header>
  )
}
