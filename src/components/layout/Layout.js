import "./Layout.css"

function layout({children}) {
  return (
    <>
      <h1 className="title">Todo App</h1>
      <main className="mainContent">{children}</main>
    </>
  )
}

export default layout
