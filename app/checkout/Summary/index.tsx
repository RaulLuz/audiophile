import CartProduct from "@/app/components/Cart/CartProduct";
import React from "react";

const products = [
  {
    id: 5,
    slug: "zx7-speaker",
    name: "ZX7 Speaker",
    image: {
      mobile: "/assets/product-zx7-speaker/mobile/image-product.jpg",
      tablet: "/assets/product-zx7-speaker/tablet/image-product.jpg",
      desktop: "/assets/product-zx7-speaker/desktop/image-product.jpg",
    },
    category: "speakers",
    categoryImage: {
      mobile:
        "/assets/product-zx7-speaker/mobile/image-category-page-preview.jpg",
      tablet:
        "/assets/product-zx7-speaker/tablet/image-category-page-preview.jpg",
      desktop:
        "/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg",
    },
    new: false,
    price: 3500,
    description:
      "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    features:
      "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.\n\nThe ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.",
    includes: [
      {
        quantity: 2,
        item: "Speaker unit",
      },
      {
        quantity: 2,
        item: "Speaker cloth panel",
      },
      {
        quantity: 1,
        item: "User manual",
      },
      {
        quantity: 1,
        item: "3.5mm 7.5m audio cable",
      },
      {
        quantity: 1,
        item: "7.5m optical cable",
      },
    ],
    gallery: {
      first: {
        mobile: "/assets/product-zx7-speaker/mobile/image-gallery-1.jpg",
        tablet: "/assets/product-zx7-speaker/tablet/image-gallery-1.jpg",
        desktop: "/assets/product-zx7-speaker/desktop/image-gallery-1.jpg",
      },
      second: {
        mobile: "/assets/product-zx7-speaker/mobile/image-gallery-2.jpg",
        tablet: "/assets/product-zx7-speaker/tablet/image-gallery-2.jpg",
        desktop: "/assets/product-zx7-speaker/desktop/image-gallery-2.jpg",
      },
      third: {
        mobile: "/assets/product-zx7-speaker/mobile/image-gallery-3.jpg",
        tablet: "/assets/product-zx7-speaker/tablet/image-gallery-3.jpg",
        desktop: "/assets/product-zx7-speaker/desktop/image-gallery-3.jpg",
      },
    },
    others: [
      {
        slug: "zx9-speaker",
        name: "ZX9 Speaker",
        image: {
          mobile: "/assets/shared/mobile/image-zx9-speaker.jpg",
          tablet: "/assets/shared/tablet/image-zx9-speaker.jpg",
          desktop: "/assets/shared/desktop/image-zx9-speaker.jpg",
        },
      },
      {
        slug: "xx99-mark-one-headphones",
        name: "XX99 Mark I",
        image: {
          mobile: "/assets/shared/mobile/image-xx99-mark-one-headphones.jpg",
          tablet: "/assets/shared/tablet/image-xx99-mark-one-headphones.jpg",
          desktop: "/assets/shared/desktop/image-xx99-mark-one-headphones.jpg",
        },
      },
      {
        slug: "xx59-headphones",
        name: "XX59",
        image: {
          mobile: "/assets/shared/mobile/image-xx59-headphones.jpg",
          tablet: "/assets/shared/tablet/image-xx59-headphones.jpg",
          desktop: "/assets/shared/desktop/image-xx59-headphones.jpg",
        },
      },
    ],
  },
  {
    id: 6,
    slug: "zx9-speaker",
    name: "ZX9 Speaker",
    image: {
      mobile: "/assets/product-zx9-speaker/mobile/image-product.jpg",
      tablet: "/assets/product-zx9-speaker/tablet/image-product.jpg",
      desktop: "/assets/product-zx9-speaker/desktop/image-product.jpg",
    },
    category: "speakers",
    categoryImage: {
      mobile:
        "/assets/product-zx9-speaker/mobile/image-category-page-preview.jpg",
      tablet:
        "/assets/product-zx9-speaker/tablet/image-category-page-preview.jpg",
      desktop:
        "/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg",
    },
    new: true,
    price: 4500,
    description:
      "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    features:
      "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).\n\nDiscover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",
    includes: [
      {
        quantity: 2,
        item: "Speaker unit",
      },
      {
        quantity: 2,
        item: "Speaker cloth panel",
      },
      {
        quantity: 1,
        item: "User manual",
      },
      {
        quantity: 1,
        item: "3.5mm 10m audio cable",
      },
      {
        quantity: 1,
        item: "10m optical cable",
      },
    ],
    gallery: {
      first: {
        mobile: "/assets/product-zx9-speaker/mobile/image-gallery-1.jpg",
        tablet: "/assets/product-zx9-speaker/tablet/image-gallery-1.jpg",
        desktop: "/assets/product-zx9-speaker/desktop/image-gallery-1.jpg",
      },
      second: {
        mobile: "/assets/product-zx9-speaker/mobile/image-gallery-2.jpg",
        tablet: "/assets/product-zx9-speaker/tablet/image-gallery-2.jpg",
        desktop: "/assets/product-zx9-speaker/desktop/image-gallery-2.jpg",
      },
      third: {
        mobile: "/assets/product-zx9-speaker/mobile/image-gallery-3.jpg",
        tablet: "/assets/product-zx9-speaker/tablet/image-gallery-3.jpg",
        desktop: "/assets/product-zx9-speaker/desktop/image-gallery-3.jpg",
      },
    },
    others: [
      {
        slug: "zx7-speaker",
        name: "ZX7 Speaker",
        image: {
          mobile: "/assets/shared/mobile/image-zx7-speaker.jpg",
          tablet: "/assets/shared/tablet/image-zx7-speaker.jpg",
          desktop: "/assets/shared/desktop/image-zx7-speaker.jpg",
        },
      },
      {
        slug: "xx99-mark-one-headphones",
        name: "XX99 Mark I",
        image: {
          mobile: "/assets/shared/mobile/image-xx99-mark-one-headphones.jpg",
          tablet: "/assets/shared/tablet/image-xx99-mark-one-headphones.jpg",
          desktop: "/assets/shared/desktop/image-xx99-mark-one-headphones.jpg",
        },
      },
      {
        slug: "xx59-headphones",
        name: "XX59",
        image: {
          mobile: "/assets/shared/mobile/image-xx59-headphones.jpg",
          tablet: "/assets/shared/tablet/image-xx59-headphones.jpg",
          desktop: "/assets/shared/desktop/image-xx59-headphones.jpg",
        },
      },
    ],
  },
];

const Summary = () => {
  return (
    <div className="bg-white p-[32px] rounded-[8px] h-[fit-content] w-full max-w-[350px] sticky top-[20px]">
      <h3 className="font-bold text-[18px] tracking-[1.29px] text-black uppercase mb-[31px]">
        Summary
      </h3>
      {products.map((product) => (
        <CartProduct product={product} quantity={1} isInsideCheckout />
      ))}
      <div className="flex justify-between my-[8px]">
        <div className="font-medium text-[15px] leading-[25px] text-black/50 uppercase">
          Total
        </div>
        <div className="font-bold text-[18px] text-black">$ 5,396</div>
      </div>
      <div className="flex justify-between mb-[8px]">
        <div className="font-medium text-[15px] leading-[25px] text-black/50 uppercase">
          Shipping
        </div>
        <div className="font-bold text-[18px] text-black">$ 50</div>
      </div>
      <div className="flex justify-between mb-[24px]">
        <div className="font-medium text-[15px] leading-[25px] text-black/50 uppercase">
          VAT (included)
        </div>
        <div className="font-bold text-[18px] text-black">$ 1,079</div>
      </div>
      <div className="flex justify-between mb-[32px]">
        <div className="font-medium text-[15px] leading-[25px] text-black/50 uppercase">
          Grand Total
        </div>
        <div className="font-bold text-[18px] text-primary">$ 5,446</div>
      </div>
      <button className="bg-primary text-white font-bold uppercase tracking-[1px] text-[13px] w-full h-[48px] hover:bg-primary-light transition duration-200">
        Continue & Pay
      </button>
    </div>
  );
};

export default Summary;
