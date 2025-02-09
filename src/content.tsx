import cssText from "data-text:~style.css"
import type { PlasmoCSConfig } from "plasmo"

import { FloatWarning } from "~features/float-warning"

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
  run_at: "document_end"
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const PlasmoOverlay = () => {
  return <FloatWarning />
}

export default PlasmoOverlay
