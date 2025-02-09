import React from "react"

import { author } from "../../package.json"

export const Footer = () => {
  const year = new Date().getFullYear()
  const authorName = author.split("<")[0]
  const authorUrl = author.split("(")[1].slice(0, -1)

  return (
    <footer className="tegu-footer tegu-footer-center tegu-bg-base-200 tegu-text-base-content tegu-p-4">
      <aside className="tegu-text-xs">
        <a
          href={authorUrl}
          className="tegu-link tegu-link-hover"
          target="_blank"
          rel="noopener noreferrer">
          {authorName} © {year} - All Right Reserved
        </a>
      </aside>
    </footer>
  )
}
