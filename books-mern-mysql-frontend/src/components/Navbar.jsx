
function Navbar({brand}) {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <a href='#' className="navbar-brand">{brand}</a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar