import Link from 'next/link';
import Image from 'next/image';

export const revalidate = 60;

export default async function Wtm() {

  // try {
  //   [starCount, views, tweetCount] = await Promise.all([
  //     getStarCount(),
  //     getBlogViews(),
  //     getTweetCount(),
  //   ]);
  // } catch (error) {
  //   console.error(error);
  // }

  return (
    <section className="mt-4">
      <h1 className="font-bold text-3xl font-serif">WTM International S/A</h1>
      <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
        <Image
          alt={'wtm-head-office'}
          className="rounded-full"
          src={'/head-office.jpg'}
          width={100}
          height={100}
        />
        <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400">
            <p className="my-5 text-neutral-800 dark:text-neutral-200">
                WTM provides services to simplify and consolidate exports and imports of services and tecnnologies. We also develop software, searching 
                simplify the work for our&apos;s customers. We have customers in countries like México, Uruguai, United States, and others
            </p>
        </div>
      </div>
      <div className="flex mt-8 md:mt-0 ml-0 space-y-2 text-neutral-500 dark:text-neutral-400">
        <Image
          alt={'wtm-all-team'}
          className="rounded-lg"
          src={'/all-team.jpeg'}
          width={300}
          height={200}
          />
        <p className="my-5 pl-4 text-neutral-800 dark:text-neutral-200">
            WTM have a great team of people who are very passionate about our company.<br/>
            And I work on the IT departament with software architecture and development.<br/>
            And I&apos;m hope to help every one with our&apos;s softwares.
        </p>
          </div>
        <p className="my-5 text-neutral-800 dark:text-neutral-200">
            Thank&apos;s! 
        </p>
        <div className='flex items-center gap-4'>
            <a
                className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
                rel="noopener noreferrer"
                target="_blank"
                href="https://wtm.international/en/"
                > 
                <Image
                alt={'wtm-head-office'}
                className="rounded-e-lg grayscale"
                src={'/wtm-logo.jpeg'}
                width={150}
                height={100}
                />
            </a>
            <p className='text-neutral-800 dark:text-neutral-400 text-sm'>
                We use technology to create new solutions that make tax matters workable, delivering great results for businesses and society.
            </p>
        </div>
    </section>
  );
}