///This refers to the sitemap configurations

///Libraries -->
import { MetadataRoute } from 'next'
import { domainName } from '@/config/utils'

///Commencing code -->
export default function sitemap(): MetadataRoute.Sitemap {
//check the domain names 
  return [
    {
      url: domainName,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // {
    //   url: `${domainName}#whyUs`,
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.9,
    // },
    // {
    //   url: `${domainName}#courses`,
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
  ]
}