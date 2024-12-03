import { Card } from "./Card/Card"
function App() {
  return (
    <main className="bg-slate-200 w-screen h-screen flex items-center justify-center">
      <div className="bg-drawers-bg bg-cover w-96 h-96 rounded-tl-lg rounded-bl-lg"></div>
      <Card/>
    </main>
  )
}

export default App
