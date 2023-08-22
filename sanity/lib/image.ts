import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'
import { sanityClient as client } from './sanityClient'
import { imagesType } from './ProductsDataArrayAndType'

const imageBuilder = createImageUrlBuilder(client)


  export const urlForImage = (source:Image) =>{
    return imageBuilder?.image(source)
  }

