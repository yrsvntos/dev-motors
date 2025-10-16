import { HomeProps } from "@/utils/home-type"
import styles from "./styles.module.scss"
import Image from "next/image"

export function Services({object}: HomeProps){
    return(
        <>
            <section className={styles.containerAbout} >
                <article className={styles.innerAbout}>
                        <h1 className={styles.title}>
                            Sobre
                        </h1>
                        <p>{object.metadata.about.description}</p>
                </article> 
                    <div className={styles.bannerAbout}>
                        <Image 
                            alt="Imagem ilustrativa Sobre a Oficina"
                            className={styles.imageAbout}
                            quality={100}
                            fill={true}
                            src={object.metadata.about.banner.url}
                        />
                    </div>
            </section>

            <h2 className={styles.servicesTitle}>Conheça os nossos serviços</h2>
            <section id="servicos" className={styles.services}>
                {object.metadata.services.map((service) => (
                    <article 
                        key={service.description}
                        className={styles.service}
                    >
                        <div className={styles.innerService}>
                            <Image 
                                alt="Imagem do serviço"
                                className={styles.imageService}
                                quality={100}
                                fill={true}
                                src={service.image.url}
                            />
                        </div>
                        <p>{service.description}</p>
                    </article>
                ))}
            </section>
        </>
    )
}