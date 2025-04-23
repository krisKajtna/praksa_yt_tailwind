import { Bell, Menu, Mic, Search, Upload, User } from 'lucide-react';
import logo from '../assets/logo3.png';
import { Button } from '../components/Button';

export function PageHeader() {
  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
        <div className="flex gap-4 items-center flex-shrink-0">
            <Button variant="ghost" size="icon" >
                <Menu />
            </Button>
            <a href="/">
                <img src={logo} className="h-6" />
            </a>
        </div>
        <form className="flex gap-4 flex-grow justify-center">
            <div className="flex flex-grow max-w-[600px]">
                <input type='search' placeholder='Search' 
                className="rounded-1-full border border-secondary-border shadow-inner 
                shadow-secondary"/>
                <Button>
                    <Search />
                </Button>
            </div>
            <Button type='button' size="icon" className='flex-shrink-0'>
                <Mic />
            </Button>
        </form>
        <div className="flex flex-shrink-0 md:gap-2 ">
            <Button variant="ghost" size="icon">
                <Upload />
            </Button>
            <Button variant="ghost" size="icon">
                <Bell />
            </Button>
            <Button variant="ghost" size="icon">
                <User />
            </Button>
        </div>
    </div>
  )
}