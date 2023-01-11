import React from 'react'

function Home() {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img src="https://www.teahub.io/photos/full/0-7940_pokemon-red-version-background.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dfbbd27f-2abb-4605-acb0-e1703090f6b3/danh75v-d048d766-f7e9-4d28-bec4-e17e32e9963b.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RmYmJkMjdmLTJhYmItNDYwNS1hY2IwLWUxNzAzMDkwZjZiM1wvZGFuaDc1di1kMDQ4ZDc2Ni1mN2U5LTRkMjgtYmVjNC1lMTdlMzJlOTk2M2IuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.DG6T2FEUj403HxNQxTmgacxp_oKwXsY855KhcUVELuA" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </button>
</div>
    </div>
  )
}

export default Home