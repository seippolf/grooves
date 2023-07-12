import { Albums, getAlbums } from './api/albums/route';
import { SimpleAlbum, getSpotifyAlbumData } from './api/spotify/[id]/route';



async function getTop4(): Promise<SimpleAlbum[]> {

  const albums: Albums = await getAlbums();
  const top5: string[] = albums.slice(0, 4);

  let albumData: SimpleAlbum[] = await getSpotifyAlbumData(top5);
  return albumData;

}
export default async function Home() {

  const top4 = await getTop4();
  
  return (
    <main className="xl:max-w-7xl xl:mx-auto max-w-full px-[4%] space-y-2">
      <h1 className="text-3xl text-center lg:text-left bold font-bold">Find your new groove.</h1>
      <article>
        <h2 className='text-center lg:text-left'>Here are the top 4 albums <u>at the moment:</u></h2>
        <ul className="flex flex-col items-center lg:items-stretch lg:flex-row">
          {top4.map((item, index) => 
            <li className='flex items-center flex-col border border-pink-600 m-2 w-100 lg:w-[300px]'>
              <img src={item.image.url} className='w-full lg:w-96'/>
              <p className="hidden lg:block p-1 text-center"><b>{item.name}</b></p>
              <p className="hidden lg:block p-1 text-center">{item.artist}</p>
            </li>
          )}
        </ul>
      </article>
    </main>
  )
}
