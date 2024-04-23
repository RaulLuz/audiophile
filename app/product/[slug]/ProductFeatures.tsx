import { Product } from '@/app/types/products'
import React from 'react'
import Markdown from 'react-markdown'

const ProductFeatures = ({ product }: { product: Product }) => {
  return (
    <section className='flex justify-between mb-[160px]'>
        <div>
            <h3 className='font-bold text-[32px] text-black tracking-[1.14px] leading-[36px] uppercase mb-[32px]'>Features</h3>
            <Markdown className='prose max-w-[635px] font-medium text-[15px] leading-[25px]'>{product.features}</Markdown>
        </div>
        <div>
            <h3 className='font-bold text-[32px] text-black tracking-[1.14px] leading-[36px] uppercase mb-[32px]'>In the box</h3>
            {product.includes.map((item, index) => (
                <div key={index} className='text-[15px] leading-[25px] font-medium text-black/[.5] capitalize flex gap-x-[20px] mb-[8px]'><span className='font-bold text-primary  min-w-[17.25px]'>{item.quantity}x</span> {item.item}</div>
            ))}
        </div>
    </section>
  )
}

export default ProductFeatures