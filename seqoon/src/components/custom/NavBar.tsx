import { Input } from '@/components/ui/input';
import { SVGProps } from 'react';
const NavBar = ({ searchQuery, handleSearchChange }: { searchQuery: string, handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void }) => {
  return (
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
              value={searchQuery}
              onChange={handleSearchChange}
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
  );
};

export default NavBar;


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
  
