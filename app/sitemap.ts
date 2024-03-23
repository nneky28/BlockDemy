///This refers to the sitemap configurations

///Libraries -->
import { MetadataRoute } from 'next'
import { domainName } from '@/config/utils'
//check the domain names 
l
///Commencing code -->
export default function sitemap(): MetadataRoute.Sitemap {

  return [
    {
      url: domainName,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${domainName}#whyUs`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${domainName}#courses`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}