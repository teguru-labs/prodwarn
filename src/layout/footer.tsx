import React from "react"

import { author } from "../../package.json"

export const Footer = () => {
  const year = new Date().getFullYear()
  const authorName = author.split("<")[0]
  const authorUrl = author.split("(")[1].slice(0, -1)

  return (
    <footer className="footer footer-center bg-base-200 text-base-content p-4">
      <aside className="text-xs">
        <a
          href={authorUrl}
          className="link link-hover"
          target="_blank"
          rel="noopener noreferrer">
          {authorName} © {year} - All Right Reserved
        </a>
      </aside>
    </footer>
  )
}
