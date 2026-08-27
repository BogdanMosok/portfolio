import Header from '../../components/Header/Header';
import Hero from '../../section/Hero/Hero';
import Shop from '../../section/Shop/Shop';

function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero/>
        <Shop/>
        {/* Categories */}
      </main>
    </>
  );
}

export default Home;