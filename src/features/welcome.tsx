import React from "react"

import { author, displayName, homepage } from "../../package.json"

export const Welcome = () => {
  const authorName = author.split("<")[0]
  const authorUrl = author.split("(")[1].slice(0, -1)
  const email = /<(.+)>/.exec(author)[1]
  return (
    <>
      <div className="card card-compact">
        <div className="card-body">
          <h2 className="card-title">Welcome to Prodwarn!</h2>
          <p>
            One fine day, you accidentally run tests on the production system
            instead of the development or testing environment. And just like
            that, an incident is born.
          </p>
          <p>
            <span className="text-primary">{displayName}</span>, developed by{" "}
            <a
              href={authorUrl}
              className="link link-hover link-primary"
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
              className="link link-hover link-primary"
              href={homepage}
              target="_blank"
              rel="noopener noreferrer">
              GitHub
            </a>
            . For inquiries or support, contact us at{" "}
            <a
              href={`mailto:${email}`}
              className="link link-hover link-primary"
              target="_blank"
              rel="noopener noreferrer">
              {email}
            </a>
            .
          </p>
        </div>
      </div>

      <div className="text-center mt-2">
        <a className="btn btn-info btn-sm text-base-100">Let's get started!</a>
      </div>
    </>
  )
}
