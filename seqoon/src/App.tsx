import { SVGProps , useState } from 'react'

import './App.css'
import { JSX } from 'react/jsx-runtime'
import PropertyCard from './components/custom/PropertyListing'
import NavBar from './components/custom/NavBar'


function App() {
  const properties = [
    {
      address: '1234 Elm St, Anytown, USA',
      images: ['https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs7XeGPXAqvFk5WfZ3SF8RI18gT47-ztnk81wJhY-AAiV6LEcgAExMQ6--tJfIFUA3BgM&usqp=CAU', 'https://assets-global.website-files.com/63d38aee50ce5db25c12ba73/64109834877e86112c0deab0_pexels-binyamin-mellish-1396122.jpg'],
      price: 250000,
      baths: 2,
      beds: 3,
      featured: true,
      description: "This is a beautiful home in a great neighborhood.",
    },
    {
      address: '5678 Oak St, Anytown, USA',
      images: ['https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs7XeGPXAqvFk5WfZ3SF8RI18gT47-ztnk81wJhY-AAiV6LEcgAExMQ6--tJfIFUA3BgM&usqp=CAU', 'https://assets-global.website-files.com/63d38aee50ce5db25c12ba73/64109834877e86112c0deab0_pexels-binyamin-mellish-1396122.jpg'],
      price: 350000,
      baths: 3,
      beds: 4,
      featured: false,
      description: "This is a beautiful home in a great neighborhood.",
    },
    {
      address: '91011 Pine St, Anytown, USA',
      images: ['https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs7XeGPXAqvFk5WfZ3SF8RI18gT47-ztnk81wJhY-AAiV6LEcgAExMQ6--tJfIFUA3BgM&usqp=CAU', 'https://assets-global.website-files.com/63d38aee50ce5db25c12ba73/64109834877e86112c0deab0_pexels-binyamin-mellish-1396122.jpg'],
      price: 450000,
      baths: 4,
      beds: 5,
      featured: true,
      description: "This is a beautiful home in a great neighborhood.",
    },
    {
      address: '1213 Maple St, Anytown, USA',
      images: ['https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs7XeGPXAqvFk5WfZ3SF8RI18gT47-ztnk81wJhY-AAiV6LEcgAExMQ6--tJfIFUA3BgM&usqp=CAU', 'https://assets-global.website-files.com/63d38aee50ce5db25c12ba73/64109834877e86112c0deab0_pexels-binyamin-mellish-1396122.jpg'],
      price: 550000,
      baths: 5,
      beds: 6,
      featured: false,
      description: "This is a beautiful home in a great neighborhood.",
    },
    {
      address: '1415 Elm St, Anytown, USA',
      images: ['https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs7XeGPXAqvFk5WfZ3SF8RI18gT47-ztnk81wJhY-AAiV6LEcgAExMQ6--tJfIFUA3BgM&usqp=CAU', 'https://assets-global.website-files.com/63d38aee50ce5db25c12ba73/64109834877e86112c0deab0_pexels-binyamin-mellish-1396122.jpg'],
      price: 650000,
      baths: 6,
      beds: 7,
      featured: true,
      description: "This is a beautiful home in a great neighborhood.",

    }
  ];
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProperties, setFilteredProperties] = useState(properties);

  const handleSearchChange = (e: { target: { value: any } }) => {
    const query = e.target.value;
    setSearchQuery(query);
    filterProperties(query);
  };

  const filterProperties = (query: string) => {
    const filtered = properties.filter(property =>
      property.address.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProperties(filtered);
  };

 

  return (
    <div>
      <NavBar searchQuery={searchQuery} handleSearchChange={handleSearchChange} />
      <div className="mb-6 text-center font-semibold text-lg">Explore Properties</div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 px-4 md:px-6 lg:px-8 py-6">
        {filteredProperties.map((property, index) => (
          <PropertyCard 
            key={index} 
            {...property} 
            icons={property.featured ? [<BedIcon key="bed" />, <BathIcon key="bath" />] : []} 
          />
        ))}
      </div>
      <footer className="border-t border-gray-200/50 backdrop-blur-sm dark:border-gray-800/50">
        {/* Footer content */}
      </footer>
    </div>
  );
}


function BathIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
      <line x1="10" x2="8" y1="5" y2="7" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <line x1="7" x2="7" y1="19" y2="21" />
      <line x1="17" x2="17" y1="19" y2="21" />
    </svg>
  )
}


function BedIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 4v16" />
      <path d="M2 8h18a2 2 0 0 1 2 2v10" />
      <path d="M2 17h20" />
      <path d="M6 8v9" />
    </svg>
  )
}
export default App


export function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}











