"use client";
import { ThemeProvider } from '@/providers/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';

const assetMap: { id: string; url: string; alt?: string }[] = [
  { id: "hero-image", url: "https://images.pexels.com/photos/2300334/pexels-photo-2300334.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Vibrant colored sneakers displayed on a wooden table in a London store." },
  { id: "about-image", url: "https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Woman in athletic wear doing an abdominal workout on a mat indoors." },
  { id: "feature-image-1", url: "https://images.pexels.com/photos/4816753/pexels-photo-4816753.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Two young men posing with skateboards in an urban setting, showcasing street style and culture." },
  { id: "product-image-1", url: "https://images.pexels.com/photos/4061385/pexels-photo-4061385.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Close-up of luxury Nike Air sneakers with Louis Vuitton design, showcasing style and fashion detail." },
  { id: "product-image-2", url: "https://images.pexels.com/photos/9986256/pexels-photo-9986256.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "A sleek Air Jordan sneaker showcased with vibrant lighting in Muscat, Oman." },
  { id: "contact-image", url: "https://images.pexels.com/photos/7414275/pexels-photo-7414275.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "A diverse group of business professionals engaging in a handshake and discussion in a modern office space." }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Shop", id: "product" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Nike Air"
          buttonText="Shop Now"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24 bg-blue-50 text-gray-900">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Explore the Nike Air Collection"
            description="Discover the latest styles and trends in the world of Nike Air sneakers."
            imageSrc="https://images.pexels.com/photos/2300334/pexels-photo-2300334.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            buttons={[{ text: "Shop Now", href: "product" }]}  
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24 bg-blue-50 text-gray-900">
        <div className="mx-auto px-4 md:px-6">
          <TextAbout title="Nike Air Sneakers - Elevate Your Style" />
        </div>
      </div>
      <div id="product" data-section="product" className="scroll-mt-24 bg-blue-50 text-gray-900">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardOne
            products={[
              { id: "1", name: "Nike Air Max", price: "$150", imageSrc: "https://images.pexels.com/photos/4061385/pexels-photo-4061385.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
              { id: "2", name: "Nike Air Classic", price: "$120", imageSrc: "https://images.pexels.com/photos/9986256/pexels-photo-9986256.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" }
            ]}
            title="Featured Products"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24 bg-blue-50 text-gray-900">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Newsletter"
            title="Stay Updated"
            description="Sign up for our newsletter to receive the latest news and exclusive offers."
            imageSrc="https://images.pexels.com/photos/7414275/pexels-photo-7414275.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24 bg-blue-50 text-gray-900">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              { title: "Explore", items: [ { label: "Home", href: "hero" }, { label: "Shop", href: "product" }] },
              { title: "Learn", items: [ { label: "About Us", href: "about" }, { label: "FAQ", href: "faq" }] }
            ]}
            logoSrc="/brand/logo.svg"
            copyrightText="© 2025 Nike Air"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}