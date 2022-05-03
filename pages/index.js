import ResponsiveAppBar from '@components/Navbar'
import Carousel from '@components/Carousel'
import Search from '@components/Search'
import OfferBox1 from '@components/OfferBox1'
export default function Home() {
  return (
    <div className="container">
        <ResponsiveAppBar/>
        <main>
      <Carousel/>
        
        <Search/>
        <OfferBox1/>
        </main>
        
    </div>
  )
}
