import Link from 'next/link';
import {index} from '@/api/keys';
import {App} from '@/types/AppKeys';
import KeyIcon from '@/app/ui/KeyIcon';
import MappedIcon from '@/app/ui/MappedIcon';
import Image from 'next/image';
import PlaceholderIcon from '@/app/ui/PlaceholderIcon';
import AppIcon from '@/app/ui/AppIcon';

export default function Home() {
  const data = index() || {} as App;

  const placeholders = new Array(8 - data.length).fill('').map(i => <PlaceholderIcon key={i}/>);
  return (
    <>
      <section className={'header flex flex-col w-full border-b border-neutral-400 h-36'}>
        <div className={'flex m-auto'}>
          <MappedIcon keyChar={'cmd'}/>
          <div className={'text-4xl my-auto mx-1'}>+</div>
          <KeyIcon char={'K'}/>
        </div>
        <h1 className={'m-auto text-sm tracking-widest italic text-light'}>hotkeys.lol</h1>
      </section>
      <section className={'my-12 flex items-center'}>
        <p className={'text-9xl my-auto'}>(</p>
        <div>
          <p className={'my-auto tracking-wider md:tracking-widest text-xs sm:text-sm font-light text-neutral-700 text-center leading-7 mt-2 mx-3'}>
            This is a placeholder landing page.
            <br/>This site is extremely under development.
            <br/>Come back later if you want.
          </p>
          <p className={'my-auto text-neutral-500 font-light italic text-xs text-center'}>...no worries if not.</p>
        </div>
        <p className={'text-9xl my-auto'}>)</p>
      </section>
      <section className={'body w-full flex flex-col my-12'}>
        <ul className={'mx-auto grid grid-cols-4 gap-8 sm:gap-16'}>
          {
            data.map((app) => <AppIcon key={app.id} app={app}/>)
          }
          {
            placeholders.map(p => p)
          }
        </ul>
        <a href={'https://github.com/ethanhalko/hotkeys.lol/issues/new?labels=request&template=feature_request.md&title=%5BREQUEST%5D'}
           className={'text-center font-light text-neutral-500 text-xs italic pt-12 underline hover:underline-offset-2'}
           target={'_blank'}>
          Make a request!
        </a>
      </section>
    </>
  );
}
