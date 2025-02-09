import { Welcome } from "~features/welcome"
import { Footer } from "~layout/footer"
import { Header } from "~layout/header"

import "~style.css"

function IndexPopup() {
  return (
    <div className="artboard phone-1 flex flex-col">
      <Header />

      <main className="flex-1">
        <Welcome />
      </main>

      <Footer />
    </div>
  )
}

export default IndexPopup
