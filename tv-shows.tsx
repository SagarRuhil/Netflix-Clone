import { useState } from 'react'
import { Star, Play, Info, Search, Bell, User, Menu } from 'lucide-react'
import Link from 'next/link'

const tvShows = [
  {
    id: 1,
    title: "Stranger Things",
    image: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
    rating: 8.7,
    releaseDate: "2016",
    description: "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.",
    genre: ["Drama", "Fantasy", "Horror"],
    cast: ["Millie Bobby Brown", "Finn Wolfhard", "Winona Ryder"],
  },
  {
    id: 2,
    title: "The Crown",
    image: "https://image.tmdb.org/t/p/w500/6eEoOUMUqe9rumRQY2XRfDLLPiE.jpg",
    rating: 8.7,
    releaseDate: "2016",
    description: "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the twentieth century.",
    genre: ["Drama", "History"],
    cast: ["Claire Foy", "Olivia Colman", "Imelda Staunton"],
  },
  {
    id: 3,
    title: "Breaking Bad",
    image: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
    rating: 9.5,
    releaseDate: "2008",
    description: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
    genre: ["Crime", "Drama", "Thriller"],
    cast: ["Bryan Cranston", "Aaron Paul", "Anna Gunn"],
  },
  {
    id: 4,
    title: "The Witcher",
    image: "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg",
    rating: 8.2,
    releaseDate: "2019",
    description: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
    genre: ["Action", "Adventure", "Fantasy"],
    cast: ["Henry Cavill", "Anya Chalotra", "Freya Allan"],
  },
  {
    id: 5,
    title: "Money Heist",
    image: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
    rating: 8.3,
    releaseDate: "2017",
    description: "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.",
    genre: ["Action", "Crime", "Mystery"],
    cast: ["Úrsula Corberó", "Álvaro Morte", "Itziar Ituño"],
  },
]

export default function TVShows() {
  const [featuredShow, setFeaturedShow] = useState(tvShows[0])
  const [hoveredShow, setHoveredShow] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <header className="bg-gray-800 py-4 px-4 md:px-8 fixed top-0 left-0 right-0 z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl md:text-4xl font-bold text-red-600">NETFLIX</Link>
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                <li><Link href="/" className="hover:text-gray-300 transition duration-300">Home</Link></li>
                <li><Link href="/tv-shows" className="hover:text-gray-300 transition duration-300">TV Shows</Link></li>
                <li><Link href="/web-series" className="hover:text-gray-300 transition duration-300">Web Series</Link></li>
                <li><Link href="/my-list" className="hover:text-gray-300 transition duration-300">My List</Link></li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center space-x-4 md:space-x-6">
            <Search className="w-5 h-5 cursor-pointer hover:text-gray-300 transition duration-300" />
            <Bell className="w-5 h-5 cursor-pointer hover:text-gray-300 transition duration-300" />
            <User className="w-5 h-5 cursor-pointer hover:text-gray-300 transition duration-300" />
            <Menu className="w-5 h-5 cursor-pointer md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} />
          </div>
        </div>
        {isMenuOpen && (
          <nav className="mt-4 md:hidden">
            <ul className="flex flex-col space-y-2">
              <li><Link href="/" className="hover:text-gray-300 transition duration-300">Home</Link></li>
              <li><Link href="/tv-shows" className="hover:text-gray-300 transition duration-300">TV Shows</Link></li>
              <li><Link href="/web-series" className="hover:text-gray-300 transition duration-300">Web Series</Link></li>
              <li><Link href="/my-list" className="hover:text-gray-300 transition duration-300">My List</Link></li>
            </ul>
          </nav>
        )}
      </header>

      <main className="flex-grow pt-16 md:pt-20">
        <section className="relative h-[56.25vw]">
          <img
            src={featuredShow.image}
            alt={featuredShow.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent flex items-center">
            <div className="ml-4 md:ml-16 w-full md:w-1/2 p-4 md:p-0">
              <h2 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">{featuredShow.title}</h2>
              <p className="text-sm md:text-lg mb-2 md:mb-6 line-clamp-3 md:line-clamp-none">{featuredShow.description}</p>
              <div className="flex items-center space-x-2 md:space-x-4 mb-2 md:mb-6 text-sm md:text-base">
                <div className="flex items-center">
                  <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 mr-1" />
                  <span>{featuredShow.rating}</span>
                </div>
                <span>{featuredShow.releaseDate}</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-2 md:mb-6">
                {featuredShow.genre.map((genre, index) => (
                  <span key={index} className="bg-red-600 px-2 py-1 rounded-full text-xs md:text-sm">{genre}</span>
                ))}
              </div>
              <div className="flex space-x-2 md:space-x-4">
                <button className="bg-white text-black py-1 md:py-2 px-2 md:px-6 rounded-md flex items-center hover:bg-opacity-80 transition duration-300 text-sm md:text-base">
                  <Play className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" />
                  Play
                </button>
                <button className="bg-gray-500 bg-opacity-50 py-1 md:py-2 px-2 md:px-6 rounded-md flex items-center hover:bg-opacity-70 transition duration-300 text-sm md:text-base">
                  <Info className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" />
                  More Info
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-16 px-4 md:px-8">
          <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-8">Popular TV Shows</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8">
            {tvShows.map((show) => (
              <div
                key={show.id}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredShow(show.id)}
                onMouseLeave={() => setHoveredShow(null)}
                onClick={() => setFeaturedShow(show)}
              >
                <img
                  src={show.image}
                  alt={show.title}
                  className="w-full h-auto rounded-sm shadow-lg transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-opacity duration-300 rounded-sm flex items-center justify-center">
                  <div className="p-2 md:p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden">
                    <h2 className="text-sm md:text-lg font-bold mb-1 md:mb-2 line-clamp-1">{show.title}</h2>
                    <div className="flex items-center mb-1 md:mb-2 text-xs md:text-sm">
                      <Star className="w-3 h-3 md:w-4 md:h-4 mr-1 text-yellow-400" />
                      <span>{show.rating}</span>
                    </div>
                    <div className="flex items-center mb-1 md:mb-2 text-xs md:text-sm">
                      <span>{show.releaseDate}</span>
                    </div>
                    <div className="flex items-center mb-1 md:mb-2 text-xs md:text-sm">
                      <span className="line-clamp-1">{show.cast.join(", ")}</span>
                    </div>
                    <p className="text-xs mb-1 md:mb-2 line-clamp-2">{show.description}</p>
                    <div className="flex flex-wrap gap-1 md:gap-2">
                      {show.genre.map((genre, index) => (
                        <span key={index} className="bg-red-600 px-1 py-0.5 rounded-full text-xs whitespace-nowrap">{genre}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Press</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Privacy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Cookie Preferences</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Facebook</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Twitter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2023 Netflix Clone. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}