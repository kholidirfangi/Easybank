import Articles from './components/Articles';
import Fitures from './components/Fitures';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Main from './layouts/Main';

const App = () => {
  return (
    <div className="public-sans-regular xl:text-[18px]">
      <Navbar />
      <Main />
      <Fitures />
      <Articles />
      <Footer />
    </div>
  );
};

export default App;
