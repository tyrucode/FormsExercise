import SpacecraftBuilder from "./SpacecraftBuilder"

function App() {

  return (
    <>
      {/* bootstrap stuff (next time use the vite bootstrap npm install*/}
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous" />
      <SpacecraftBuilder />
    </>
  )
}

export default App
