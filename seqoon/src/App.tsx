import { SVGProps, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { JSX } from 'react/jsx-runtime'

import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden w-full max-w-sm mx-auto">
    <div className="relative">
      <div className="grid aspect-video items-center overflow-hidden rounded-t-lg">
        <Carousel className="w-full aspect-video">
          <CarouselContent className="aspect-video">
            <CarouselItem>
              <img
                alt="Property Image"
                className="object-cover"
                height={225}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/225",
                  objectFit: "cover",
                }}
                width={400}
              />
            </CarouselItem>
            <CarouselItem>
              <img
                alt="Property Image"
                className="object-cover"
                height={225}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/225",
                  objectFit: "cover",
                }}
                width={400}
              />
            </CarouselItem>
            <CarouselItem>
              <img
                alt="Property Image"
                className="object-cover"
                height={225}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/225",
                  objectFit: "cover",
                }}
                width={400}
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="top-1/2 left-2 translate-y-[-50%]" />
          <CarouselNext className="top-1/2 right-2 translate-y-[-50%]" />
        </Carousel>
        <Button className="absolute top-2 right-2 dark:invert" size="sm" variant="outline">
          Details
        </Button>
      </div>
    </div>
    <div className="p-4 grid gap-2">
      <div className="text-sm leading-none">1234 Elm St, Anytown, USA</div>
      <div className="flex items-center gap-4 text-xl font-semibold">
        <BedIcon className="w-4 h-4 fill-current" />
        <BathIcon className="w-4 h-4 fill-current" />
      </div>
      <div className="text-2xl font-bold">$250,000</div>
    </div>
  </div>
  
  </>
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
