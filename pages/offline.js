import siteMetadata from '@/data/siteMetadata'
import { PageSeo } from '@/components/SEO'

export default function Offline() {
  return (
    <>
      <PageSeo
        title={`Oops`}
        description={`Network Error - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/offline`}
      />
      <div className="flex flex-col items-start justify-start md:justify-center md:items-center md:flex-row md:space-x-6 md:mt-24">
        <div className="pt-6 pb-8 space-x-2 md:space-y-5">
          <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:text-8xl md:leading-14 md:border-r-2 md:px-6">
            Oops!
          </h1>
        </div>
        <div className="max-w-md">
          <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
            Please check your connection...
          </p>
        </div>
      </div>
    </>
  )
}
