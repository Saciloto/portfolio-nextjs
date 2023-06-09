'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { LayoutGroup, motion } from 'framer-motion';

const navItems = {
  '/': {
    name: 'Home',
  },
//   '/about': {
//     name: 'About',
//   },
  '/wtm': {
    name: 'WTM',
  },
//   '/guestbook': {
//     name: 'Guestbook',
//   },
};

function Logo() {
  return (
    <div>LOGO</div>
  );
}

export default function Navbar() {
    let pathname = usePathname() || '/';
  
    return (
      <aside className="md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-serif">
        <div className="lg:top-20">
          <LayoutGroup>
            <nav
              className="flex flex-row md:flex-col items-start relative px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
              id="nav"
            >
              <div className="flex flex-row md:flex-col space-x-0 pr-10 mb-2 mt-2 md:mt-0">
                {Object.entries(navItems).map(([path, { name }]) => {
                  return (
                    <Link
                      key={path}
                      href={path}
                      className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 mt-2"
                    >
                      <span className="relative py-[5px] px-[10px] tracking-wider my-4">
                        {name}
                        {path === pathname ? (
                          <motion.div
                            className="absolute inset-0 bg-neutral-100 dark:bg-neutral-800 rounded-md z-[-1]"
                            layoutId="sidebar"
                            transition={{
                              type: 'spring',
                              stiffness: 350,
                              damping: 30,
                            }}
                          />
                        ) : null}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </nav>
          </LayoutGroup>
        </div>
      </aside>
    );
  }