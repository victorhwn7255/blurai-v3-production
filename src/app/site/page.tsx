import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { pricingCards } from '@/lib/constants'
import clsx from 'clsx'
import { Check } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="h-full w-full pt-36 lg:pt-96 md:pt-44 relative flex items-center justify-center flex-col ">
        <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]' />
        <p className='text-center'>Run your agency, in one place</p>
        <div className='relative bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text'>
          <h1 className='text-9xl font-bold text-center md:text-[300px]'>
            Blurai
          </h1>
        </div>
        <div className='flex justify-center items-center relative md:mt-[-66px]'>
          <Image 
            src={'/assets/preview.png'}
            alt='banner image'
            height={1200}
            width={1200}
            className='rounded-tl-2xl rounded-tr-2xl border-2 border-muted'
          />
          <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10"></div>
        </div>
      </section>

      {/*  */}
      <section className="flex justify-center items-center flex-col gap-4 md:mt-[20rem]">
        <h2 className="text-4xl text-center"> Choose what fits you right</h2>
        <p className="text-muted-foreground text-center px-5">
          Our straightforward pricing plans are tailored to meet your needs. If
          {" you're"} not <br />
          ready to commit you can get started for free.
        </p>
        <div className='flex justify-center gap-4 flex-wrap mt-6'>
          {pricingCards.map((eachCard) => (
            //TODO: wire up free product from stripe
            <Card 
              key={eachCard.title}
              className={clsx('w-[300px] flex flex-col justify-between h-[22rem]', {'border-2 border-primary' : eachCard.title === 'Unlimited Saas'})}
            >
              <CardHeader>
                <CardTitle className={clsx('', {'text-muted-foreground' : eachCard.title !== 'Unlimited Saas'})}>
                  {eachCard.title}
                </CardTitle>
                <CardDescription>
                  {eachCard.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <span className='text-4xl font-bold'>{eachCard.price}</span>
                <span className='text-muted-foreground'>/m</span>
              </CardContent>
              <CardFooter className='flex flex-col items-start gap-4'>
                <div>{eachCard.features.map((eachFeature) => (
                    <div key={eachFeature} className='flex gap-2 items-center'>
                      <Check className='text-muted-foreground' />
                      <p>{eachFeature}</p>
                    </div>
                  ))}
                </div>
                <Link 
                  href={`/agency?plan=${eachCard.priceId}`}
                  className={clsx('w-full text-center bg-primary p-2 rounded-md', {'!bg-muted-foreground' : eachCard.title !== 'Unlimited Saas'})}
                >
                  Get Started
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
