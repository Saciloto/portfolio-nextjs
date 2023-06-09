'use client'

import Image from 'next/image';
import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react';
import Wtm from './wtm/page';

export const revalidate = 60;

export default async function HomePage() {

  return (
    <>
    <section>
      <h1 className="font-bold text-3xl font-serif">Mauricio Valadares Saciloto</h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        Hello, I am Mauricio. I&apos;m from Brazil and I&apos;m twenty-eight years old. I come from a city called São Borja, and it is located on the border between Brazil and Argentina. Currently, I live in Balneário Camboriú with my family,
      </p>
         <div className="ml-2 md:ml-[12px] mb-2 px-4 md:px-0 md:mb-8 flex flex-col md:flex-row items-center justify-start">
          <Image
              alt={'name'}
              className="rounded-full"
              src={'/avatar.jpeg'}
              width={100}
              height={100}
              style={{
                width:'100px',
                marginBottom: '8px'
              }}
              priority
            />
            <p className="pl-4 text-neutral-800 dark:text-neutral-200">
              My goal is to become a recognized professional for my work and interpersonal skills, and I am constantly seeking to learn new technologies in order to be up-to-date. Currently, I am focused on the JavaScript/TypeScript ecosystem: React | Next.js | Node.js | NestJS.
            </p>
          </div>
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
        <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/Saciloto"
          >
            <GithubLogo  color='gray' size={24}/>
            <p>GitHub</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/mauricio-saciloto/"
          >
            <LinkedinLogo size={24} />
            <p>Linkedin</p>
          </a>
        </li>
      </ul>
      </section>
      <hr className="my-4" />
      {await Wtm()}
    </>
  );
}