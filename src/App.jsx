import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ProductViewer from './components/ProductViewer.jsx';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import { Analytics } from "@vercel/analytics/next"

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <ProductViewer />
            <Analytics />
        </main>
    )
}
export default App

