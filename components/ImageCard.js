import Image from 'next/image'
import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'

const postDateTemplate = { year: 'numeric', month: 'long', day: 'numeric' }

const ImageCard = ({ title, summary, imgSrc, href, date }) => {
  return (
    <Link href={href}>
      <div className="p-4 h-full bg-white mx-auto shadow-lg rounded-lg hover:shadow-xl transition duration-200 max-w-sm">
        <Image className="rounded-t-lg" src={imgSrc} alt="" width={380} height={262} />
        <div className="py-4 px-8">
          <h1 className="hover:cursor-pointer mt-2 text-gray-900 font-bold text-2xl tracking-tight">
            {title}
          </h1>
          <p className="hover:cursor-pointer py-3 text-gray-600 leading-6">{summary}</p>
          <dl>
            <dt className="sr-only">Published on</dt>
            <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
              <time dateTime={date}>
                {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
              </time>
            </dd>
          </dl>
        </div>
      </div>
    </Link>
  )
}

export default ImageCard
