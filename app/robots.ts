///This is the robots file

//Libraries -->
import { MetadataRoute } from 'next';
import { domainName } from '@/config/utils'

///Commencing the code -->
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${domainName}/sitemap.xml`,
  }
}