import { SVGProps } from 'react'

import './App.css'
import { JSX } from 'react/jsx-runtime'
import { Input } from './components/ui/input'
import PropertyCard from './components/custom/PropertyListing'


function App() {
  const properties = [
    {
      address: '1234 Elm St, Anytown, USA',
      images: ['/placeholder1.svg', '/placeholder2.svg', '/placeholder3.svg'],
      price: 250000,
      baths: 2,
      beds: 3,
      featured: true,
      description : "This is a beautiful home in a great neighborhood.",
    },
    {
      address: '5678 Oak St, Sometown, USA',
      images: ['/placeholder4.svg', '/placeholder5.svg', '/placeholder6.svg'],
      price: 350000,
      baths: 3,
      beds: 4,
      featured: false,
      description : "This is a beautiful home in a great neighborhood.",

    },
    {
      address: '91011 Pine St, Othertown, USA',
      images: ['/placeholder7.svg', '/placeholder8.svg', '/placeholder9.svg'],
      price: 450000,
      baths: 4,
      beds: 5,
      featured: true,
      description : "This is a beautiful home in a great neighborhood.",
    },
    {
      address: '121314 Maple St, Anothertown, USA',
      images: ['/placeholder10.svg', '/placeholder11.svg', '/placeholder12.svg'],
      price: 550000,
      baths: 5,
      beds: 6,
      featured: false,
      description : "This is a beautiful home in a great neighborhood.",
    },
    {
      address: '151617 Cedar St, Yetanothertown, USA',
      images: ['/placeholder13.svg', '/placeholder14.svg', '/placeholder15.svg'],
      price: 650000,
      baths: 6,
      beds: 7,
      featured: true,
      description : "This is a beautiful home in a great neighborhood.",
    }
  ];

  return (
    <div>
    <nav className="grid gap-2 border-t border-gray-200/50 backdrop-blur-sm dark:border-gray-800/50">
      <div className="flex h-14 items-center px-4 md:px-6">
        <a className="flex items-center font-semibold" href="#">
          Acme Inc
        </a>
        <div className="mx-auto flex-1 w-full grid md:gap-2 md:px-4 lg:gap-4 lg:px-6">
          <form className="w-full flex items-center space-x-2">
            <SearchIcon className="h-4 w-4 opacity-50" />
            <Input
              className="font-normal peer h-8 w-full max-w-[200px] text-base border border-gray-300 rounded-md shadow-none appearance-none resize-none peer-[* placeholder:*]&:focus:outline-none peer-[* placeholder:*]&:focus:ring-0"
              placeholder="Search"
              type="search"
            />
          </form>
        </div>
        <nav className="hidden space-x-4 md:flex">
          <a className="font-medium" href="#">
            Home
          </a>
          <a className="font-medium" href="#">
            Apartments
          </a>
          <a className="font-medium" href="#">
            About Us
          </a>
          <a className="font-medium" href="#">
            Contact
          </a>
        </nav>
      </div>
    </nav>
    <div className="mb-6 text-center font-semibold text-lg">Explore Properties</div>

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 px-4 md:px-6 lg:px-8 py-6">
      {properties.map((property, index) => (
        <PropertyCard 
          key={index} 
          {...property} 
          icons={property.featured ? [<BedIcon key="bed" />, <BathIcon key="bath" />] : []} 
        />
      ))}
    </div>
    <footer className="text-center py-4 bg-gray-200">
      &copy; 2024 Acme Inc. All rights reserved.
    </footer>
  </div>
  )
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


function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
