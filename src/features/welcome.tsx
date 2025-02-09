import React from "react"

import { author, displayName, homepage } from "../../package.json"

export const Welcome = () => {
  const authorName = author.split("<")[0]
  const authorUrl = author.split("(")[1].slice(0, -1)
  const emailMatch = /<(.+)>/.exec(author)
  const email = emailMatch ? emailMatch[1] : ""

  return (
    <>
      <div className="tegu-card tegu-card-compact">
        <div className="tegu-card-body">
          <h2 className="tegu-card-title">Welcome to Prodwarn!</h2>
          <p>
            One fine day, you accidentally run tests on the production system
            instead of the development or testing environment. And just like
            that, an incident is born.
          </p>
          <p>
            <span className="tegu-text-primary">{displayName}</span>, developed
            by{" "}
            <a
              href={authorUrl}
              className="tegu-link tegu-link-hover tegu-link-primary"
              target="_blank"
              rel="noopener noreferrer">
              {authorName}
            </a>
            , is a browser extension that alerts you when you're working in a
            production environment, helping you stay aware and cautious before
            making any critical changes.
          </p>
          <p>
            As an open-source project, it welcomes contributions on{" "}
            <a
              className="tegu-link tegu-link-hover tegu-link-primary"
              href={homepage}
              target="_blank"
              rel="noopener noreferrer">
              GitHub
            </a>
            . For inquiries or support, contact us at{" "}
            <a
              href={`mailto:${email}`}
              className="tegu-link tegu-link-hover tegu-link-primary"
              target="_blank"
              rel="noopener noreferrer">
              {email}
            </a>
            .
          </p>
        </div>
      </div>

      <div className="tegu-text-center tegu-mt-2">
        <a className="tegu-btn tegu-btn-info tegu-btn-sm tegu-text-base-100">
          Let's get started!
        </a>
      </div>
    </>
  )
}
