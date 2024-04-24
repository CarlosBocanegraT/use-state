import Head from 'next/head';
import Counter from './components/Counter';
import Header from '../app/layout';
import Image from 'next/image';
import styles from '../app/page.module.css'; // Importa tus estilos CSS

export default function Home() {
  return (
    <div className={styles.container}> {/* Utiliza el contenedor y aplica estilos */}
     
      <Head>
        <title>Contador</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.content}> {/* Utiliza el contenedor de contenido y aplica estilos */}
        <picture>
          <source srcSet="https://media.istockphoto.com/id/1085287936/es/foto/v%C3%ADa-l%C3%A1ctea.webp?b=1&s=170667a&w=0&k=20&c=Rh23DtxFQ11NL7DIsjhmcsJB8EnocHVmhYTw5tJp_N4=" type="image/webp" />
          <img
            src="https://media.istockphoto.com/id/1320532557/es/foto/fondo-criptomoneda-bitcoin-un-mont%C3%B3n-de-bitcoin-de-oro-moneda-digital.jpg?s=612x612&w=0&k=20&c=-lsl-JIYl0iuOtd4kFyT9GxakIllFKg_E2EfC4vRD4w="
            alt="Landscape picture"
            width={700}
            height={700}
          />
        </picture>
        <p className={styles.description}>Carlos Bocanegra Trejo  TI03SM-22</p>
        <p>.</p>
        <Counter />
      </main>
      
    </div>
  );
}
