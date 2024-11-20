import { useState } from 'react'
import { Star, Play, Info, Search, Bell, User, Menu } from 'lucide-react'
import Link from 'next/link'

const webSeries = [
  {
    id: 1,
    title: "The Marvelous Mrs. Maisel",
    image: "https://image.tmdb.org/t/p/original/2MWZy92O2Lw9Re6iN4xXIZl4Ov2.jpg",
    rating: 8.7,
    releaseDate: "2017",
    description: "A housewife in the 1950s decides to become a stand-up comic.",
    genre: ["Comedy", "Drama"],
    cast: ["Rachel Brosnahan", "Alex Borstein", "Michael Zegen"],
  },
  {
    id: 2,
    title: "The Boys",
    image: "https://image.tmdb.org/t/p/original/stTEycfG9928HYGEISBFaG1ngjM.jpg",
    rating: 8.7,
    releaseDate: "2019",
    description: "A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers.",
    genre: ["Action", "Comedy", "Crime"],
    cast: ["Karl Urban", "Jack Quaid", "Antony Starr"],
  },
  {
    id: 3,
    title: "The Mandalorian",
    image: "https://image.tmdb.org/t/p/original/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg",
    rating: 8.8,
    releaseDate: "2019",
    description: "The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.",
    genre: ["Action", "Adventure", "Sci-Fi"],
    cast: ["Pedro Pascal", "Carl Weathers", "Giancarlo Esposito"],
  },
  {
    id: 4,
    title: "Fleabag",
    image: "https://image.tmdb.org/t/p/original/27vEYsRKa3eAniwmoccOoluEXQ1.jpg",
    rating: 8.7,
    releaseDate: "2016",
    description: "A comedy series adapted from the award-winning play about a young woman trying to cope with life in London whilst coming to terms with a recent tragedy.",
    genre: ["Comedy", "Drama"],
    cast: ["Phoebe Waller-Bridge", "Sian Clifford", "Olivia Colman"],
  },
  {
    id: 5,
    title: "The Witcher: Blood Origin",
    image: "https://image.tmdb.org/t/p/original/vpfJK9F0UJNcAIIeC42oJyKMnZQ.jpg",
    rating: 7.0,
    releaseDate: "2022",
    description: "More than a thousand years before the events of 'The Witcher,' seven outcasts in an Elven world join forces in a quest against an all-powerful empire.",
    genre: ["Action", "Adventure", "Fantasy"],
    cast: ["Sophia Brown", "Laurence O'Fuarain", "Mirren Mack"],
  },
]

export default function WebSeries() {
  const [featuredSeries, setFeaturedSeries] = useState(webSeries[0])
  const [hoveredSeries, setHoveredSeries] = useState(null)
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
            src={featuredSeries.image}
            alt={featuredSeries.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent flex items-center">
            <div className="ml-4 md:ml-16 w-full md:w-1/2 p-4 md:p-0">
              <h2 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">{featuredSeries.title}</h2>
              <p className="text-sm md:text-lg mb-2 md:mb-6 line-clamp-3 md:line-clamp-none">{featuredSeries.description}</p>
              <div className="flex items-center space-x-2 md:space-x-4 mb-2 md:mb-6 text-sm md:text-base">
                <div className="flex items-center">
                  <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 mr-1" />
                  <span>{featuredSeries.rating}</span>
                </div>
                <span>{featuredSeries.releaseDate}</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-2 md:mb-6">
                {featuredSeries.genre.map((genre, index) => (
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
          <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-8">Popular Web Series</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8">
            {webSeries.map((series) => (
              <div
                key={series.id}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredSeries(series.id)}
                onMouseLeave={() => setHoveredSeries(null)}
                onClick={() => setFeaturedSeries(series)}
              >
                <img
                  src={series.image}
                  alt={series.title}
                  className="w-full h-auto rounded-sm shadow-lg transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-opacity duration-300 rounded-sm flex items-center justify-center">
                  <div className="p-2 md:p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden">
                    <h2 className="text-sm md:text-lg font-bold mb-1 md:mb-2 line-clamp-1">{series.title}</h2>
                    <div className="flex items-center mb-1 md:mb-2 text-xs md:text-sm">
                      <Star className="w-3 h-3 md:w-4 md:h-4 mr-1 text-yellow-400" />
                      <span>{series.rating}</span>
                    </div>
                    <div className="flex items-center mb-1 md:mb-2 text-xs md:text-sm">
                      <span>{series.releaseDate}</span>
                    </div>
                    <div className="flex items-center mb-1 md:mb-2 text-xs md:text-sm">
                      <span className="line-clamp-1">{series.cast.join(", ")}</span>
                    </div>
                    <p className="text-xs mb-1 md:mb-2 line-clamp-2">{series.description}</p>
                    <div className="flex flex-wrap gap-1 md:gap-2">
                      {series.genre.map((genre, index) => (
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