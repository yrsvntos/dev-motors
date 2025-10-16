import { Hero } from "@/components/hero";
import { Services } from "@/components/home/services";
import { SubMenu } from "@/components/home/submenu";
import { getDataHome } from "@/utils/actions/get-data";
import { HomeProps } from "@/utils/home-type";
import { Phone } from "lucide-react";
import { Container } from "@/components/container";
import { Footer } from "@/components/home/footer";


export default async function Home() {

  const {object}: HomeProps = await getDataHome();

  console.log(object.title)
  return (
    <main>
      <SubMenu/>
      <Hero
        heading={object.metadata.heading}
        buttonTitle={object.metadata.cta_button.title}
        buttonUrl={object.metadata.cta_button.url}
        bannerUrl={object.metadata.banner.url}
        icon={<Phone size={24} color='#fff'/>}
      />
      <Container>
        <Services
          object={object}
          
        />

        <Footer object={object}/>
      </Container>
      
    </main>
  );
}
