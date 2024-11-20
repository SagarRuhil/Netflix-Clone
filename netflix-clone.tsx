import { useState, useEffect } from 'react'
import { Star, Play, Info, ChevronLeft, ChevronRight, Search, Bell, User, Menu } from 'lucide-react'
import Login from './login'
import Signup from './signup'
import TVShows from './tv-shows'
import WebSeries from './web-series'
import MyList from './my-list'

const movies = [
  {
    id: 1,
    title: "Oppenheimer",
    image: "https://image.tmdb.org/t/p/original/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    rating: 8.5,
    releaseDate: "2023",
    cast: ["Cillian Murphy", "Emily Blunt", "Matt Damon"],
    description: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    genre: ["Biography", "Drama", "History"],
    duration: "3h 00min",
  },
  {
    id: 2,
    title: "Barbie",
    image: "https://image.tmdb.org/t/p/original/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
    rating: 7.3,
    releaseDate: "2023",
    cast: ["Margot Robbie", "Ryan Gosling", "Issa Rae"],
    description: "Barbie suffers a crisis that leads her to question her world and her existence.",
    genre: ["Adventure", "Comedy", "Fantasy"],
    duration: "1h 54min",
  },
  {
    id: 3,
    title: "The Super Mario Bros. Movie",
    image: "https://image.tmdb.org/t/p/original/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
    rating: 7.1,
    releaseDate: "2023",
    cast: ["Chris Pratt", "Anya Taylor-Joy", "Jack Black"],
    description: "A plumber named Mario travels through an underground labyrinth with his brother, Luigi, trying to save a captured princess.",
    genre: ["Animation", "Adventure", "Comedy"],
    duration: "1h 32min",
  },
  {
    id: 4,
    title: "Guardians of the Galaxy Vol. 3",
    image: "https://image.tmdb.org/t/p/original/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
    rating: 8.0,
    releaseDate: "2023",
    cast: ["Chris Pratt", "Chukwudi Iwuji", "Bradley Cooper"],
    description: "Still reeling from the loss of Gamora, Peter Quill rallies his team to defend the universe and one of their own - a mission that could mean the end of the Guardians if not successful.",
    genre: ["Action", "Adventure", "Comedy"],
    duration: "2h 30min",
  },
  {
    id: 5,
    title: "Spider-Man: Across the Spider-Verse",
    image: "https://image.tmdb.org/t/p/original/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    rating: 8.7,
    releaseDate: "2023",
    cast: ["Shameik Moore", "Hailee Steinfeld", "Brian Tyree Henry"],
    description: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero.",
    genre: ["Animation", "Action", "Adventure"],
    duration: "2h 20min",
  },
  {
    id: 6,
    title: "Mission: Impossible - Dead Reckoning Part One",
    image: "https://image.tmdb.org/t/p/original/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
    rating: 7.8,
    releaseDate: "2023",
    cast: ["Tom Cruise", "Hayley Atwell", "Ving Rhames"],
    description: "Ethan Hunt and his IMF team must track down a dangerous weapon before it falls into the wrong hands.",
    genre: ["Action", "Adventure", "Thriller"],
    duration: "2h 43min",
  },
]

const newReleases = [
  {
    id: 101,
    title: "Elemental",
    image: "https://image.tmdb.org/t/p/original/4Y1WNkd88JXmGfhtWR7dmDAo1T2.jpg",
    rating: 7.0,
    releaseDate: "2023",
    description: "Follows Ember and Wade, in a city where fire-, water-, land- and air-residents live together.",
    genre: ["Animation", "Adventure", "Comedy"],
    duration: "1h 41min",
  },
  {
    id: 102,
    title: "Indiana Jones and the Dial of Destiny",
    image: "https://image.tmdb.org/t/p/original/gU4mmINWUF294Wzi8mqRvi6peMe.jpg",
    rating: 6.7,
    releaseDate: "2023",
    description: "Archaeologist Indiana Jones races against time to retrieve a legendary artifact that can change the course of history.",
    genre: ["Action", "Adventure"],
    duration: "2h 34min",
  },
  {
    id: 103,
    title: "The Flash",
    image: "https://image.tmdb.org/t/p/original/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
    rating: 6.8,
    releaseDate: "2023",
    description: "Barry Allen uses his super speed to change the past, but his attempt to save his family creates a world without super heroes, forcing him to race for his life in order to save the future.",
    genre: ["Action", "Adventure", "Fantasy"],
    duration: "2h 24min",
  },
]

export default function Component() {
  const [hoveredMovie, setHoveredMovie] = useState(null)
  const [featuredMovie, setFeaturedMovie] = useState(movies[0])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentPage, setCurrentPage] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    setFeaturedMovie(movies[currentIndex])
  }, [currentIndex])

  const nextMovie = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length)
  }

  const prevMovie = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + movies.length) % movies.length)
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <Login />
      case 'signup':
        return <Signup />
      case 'tvshows':
        return <TVShows />
      case 'webseries':
        return <WebSeries />
      case 'mylist':
        return <MyList />
      default:
        return renderHomePage()
    }
  }

  const renderHomePage = () => (
    <main className="pt-16 md:pt-20">
      <section className="relative h-[56.25vw]">
        <img
          src={featuredMovie.image}
          alt={featuredMovie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent flex items-center">
          <div className="ml-4 md:ml-16 w-full md:w-1/2 p-4 md:p-0">
            <h2 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">{featuredMovie.title}</h2>
            <p className="text-sm md:text-lg mb-2 md:mb-6 line-clamp-3 md:line-clamp-none">{featuredMovie.description}</p>
            <div className="flex items-center space-x-2 md:space-x-4 mb-2 md:mb-6 text-sm md:text-base">
              <div className="flex items-center">
                <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 mr-1" />
                <span>{featuredMovie.rating}</span>
              </div>
              <span>{featuredMovie.releaseDate}</span>
              <span>{featuredMovie.duration}</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-2 md:mb-6">
              {featuredMovie.genre.map((genre, index) => (
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
        <button
          onClick={prevMovie}
          className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-black bg-opacity-50 p-1 md:p-2 rounded-full hover:bg-opacity-75 transition duration-300"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
        </button>
        <button
          onClick={nextMovie}
          className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-black bg-opacity-50 p-1 md:p-2 rounded-full hover:bg-opacity-75 transition duration-300"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
        </button>
      </section>

      <section className="py-8 md:py-16 px-4 md:px-8">
        <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-8">New Releases</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8">
          {newReleases.map((movie) => (
            <div
              key={movie.id}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredMovie(movie.id)}
              onMouseLeave={() => setHoveredMovie(null)}
            >
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-auto rounded-sm shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-opacity duration-300 rounded-sm flex items-center justify-center">
                <div className="p-2 md:p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden">
                  <h2 className="text-sm md:text-lg font-bold mb-1 md:mb-2 line-clamp-1">{movie.title}</h2>
                  <div className="flex items-center mb-1 md:mb-2 text-xs md:text-sm">
                    <Star className="w-3 h-3 md:w-4 md:h-4 mr-1 text-yellow-400" />
                    <span>{movie.rating}</span>
                  </div>
                  <div className="flex items-center mb-1 md:mb-2 text-xs md:text-sm">
                    <span>{movie.releaseDate}</span>
                  </div>
                  <p className="text-xs mb-1 md:mb-2 line-clamp-2">{movie.description}</p>
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {movie.genre.map((genre, index) => (
                      <span key={index} className="bg-red-600 px-1 py-0.5 rounded-full text-xs whitespace-nowrap">{genre}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-8 md:py-16 px-4 md:px-8">
        <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-8">Popular on Netflix</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-8">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredMovie(movie.id)}
              onMouseLeave={() => setHoveredMovie(null)}
            >
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-auto rounded-sm shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-opacity duration-300 rounded-sm flex items-center justify-center">
                <div className="p-2 md:p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden">
                  <h2 className="text-sm md:text-lg font-bold mb-1 md:mb-2 line-clamp-1">{movie.title}</h2>
                  <div className="flex items-center mb-1 md:mb-2 text-xs md:text-sm">
                    <Star className="w-3 h-3 md:w-4 md:h-4 mr-1 text-yellow-400" />
                    <span>{movie.rating}</span>
                  </div>
                  <div className="flex items-center mb-1 md:mb-2 text-xs md:text-sm">
                    <span>{movie.releaseDate}</span>
                  </div>
                  <div className="flex items-center mb-1 md:mb-2 text-xs md:text-sm">
                    <span className="line-clamp-1">{movie.cast.join(", ")}</span>
                  </div>
                  <p className="text-xs mb-1 md:mb-2 line-clamp-2">{movie.description}</p>
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {movie.genre.map((genre, index) => (
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
  )

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 py-4 px-4 md:px-8 fixed top-0 left-0 right-0 z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl md:text-4xl font-bold text-red-600">NETFLIX</h1>
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                <li><a href="#" onClick={() => setCurrentPage('home')} className="hover:text-gray-300 transition duration-300">Home</a></li>
                <li><a href="#" onClick={() => setCurrentPage('tvshows')} className="hover:text-gray-300 transition duration-300">TV Shows</a></li>
                <li><a href="#" onClick={() => setCurrentPage('webseries')} className="hover:text-gray-300 transition duration-300">Web Series</a></li>
                <li><a href="#" onClick={() => setCurrentPage('mylist')} className="hover:text-gray-300 transition duration-300">My List</a></li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center space-x-4 md:space-x-6">
            <Search className="w-5 h-5 cursor-pointer hover:text-gray-300 transition duration-300" />
            <Bell className="w-5 h-5 cursor-pointer hover:text-gray-300 transition duration-300" />
            <User className="w-5 h-5 cursor-pointer hover:text-gray-300 transition duration-300" onClick={() => setCurrentPage('login')} />
            <Menu className="w-5 h-5 cursor-pointer md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} />
          </div>
        </div>
        {isMenuOpen && (
          <nav className="mt-4 md:hidden">
            <ul className="flex flex-col space-y-2">
              <li><a href="#" onClick={() => setCurrentPage('home')} className="hover:text-gray-300 transition duration-300">Home</a></li>
              <li><a href="#" onClick={() => setCurrentPage('tvshows')} className="hover:text-gray-300 transition duration-300">TV Shows</a></li>
              <li><a href="#" onClick={() => setCurrentPage('webseries')} className="hover:text-gray-300 transition duration-300">Web Series</a></li>
              <li><a href="#" onClick={() => setCurrentPage('mylist')} className="hover:text-gray-300 transition duration-300">My List</a></li>
            </ul>
          </nav>
        )}
      </header>

      {renderPage()}

      <footer className="bg-gray-800 py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-sm">
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-2 md:mb-4">Company</h4>
            <ul className="space-y-1 md:space-y-2">
              <li><a href="#" className="hover:text-gray-300 transition duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-gray-300 transition duration-300">Careers</a></li>
              <li><a href="#" className="hover:text-gray-300 transition duration-300">Press</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-2 md:mb-4">Support</h4>
            <ul className="space-y-1 md:space-y-2">
              <li><a href="#" className="hover:text-gray-300 transition duration-300">FAQ</a></li>
              <li><a href="#" className="hover:text-gray-300 transition duration-300">Help Center</a></li>
              <li><a href="#" className="hover:text-gray-300 transition duration-300">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-2 md:mb-4">Legal</h4>
            <ul className="space-y-1 md:space-y-2">
              <li><a href="#" className="hover:text-gray-300 transition duration-300">Terms of Use</a></li>
              <li><a href="#" className="hover:text-gray-300 transition duration-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-300 transition duration-300">Cookie Preferences</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-2 md:mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-xl md:text-2xl hover:text-gray-300 transition duration-300">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-xl md:text-2xl hover:text-gray-300 transition duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-xl md:text-2xl hover:text-gray-300 transition duration-300">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-xs md:text-sm text-gray-400">
          &copy; 2023 Netflix Clone. All rights reserved.
        </div>
      </footer>
    </div>
  )
}