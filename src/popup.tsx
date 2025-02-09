import { Welcome } from "~features/welcome"
import { Footer } from "~layout/footer"
import { Header } from "~layout/header"

import "~style.css"

function IndexPopup() {
  return (
    <div className="tegu-artboard tegu-phone-1 tegu-flex tegu-flex-col">
      <Header />

      <main className="tegu-flex-1">
        <Welcome />
      </main>

      <Footer />
    </div>
  )
}

export default IndexPopup
