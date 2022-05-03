import ResponsiveAppBar from '@components/Navbar'
import Carousel from '@components/Carousel'
import Search from '@components/Search'
export default function Home() {
  return (
    <div className="container">
        <ResponsiveAppBar/>
        <Carousel/>
        
        <Search/>
        <main>
      </main>
    </div>
  )
}
