import { Hero } from "@/components/hero";
import { Services } from "@/components/home/services";
import { SubMenu } from "@/components/home/submenu";
import { getDataHome, getSubmenu } from "@/utils/actions/get-data";
import { HomeProps } from "@/utils/home-type";
import { Phone } from "lucide-react";
import { Container } from "@/components/container";
import { Footer } from "@/components/home/footer";
import { MenuProps } from "@/utils/menu.type";


export default async function Home() {

  const {object}: HomeProps = await getDataHome();
  const menu: MenuProps = await getSubmenu();
 

  // console.log(object.title)
  return (
    <main>
      {menu.objects.length > 0 && <SubMenu menu={menu}/>}
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
