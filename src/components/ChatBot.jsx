import Header from './Header';
import ChatSection from './ChatSection';
import TagSection from './TagSection';
import Product from './Product';
import Filters from './Filters';
import Footer from './Footer';

export default function ChatBot() {
  return (
    <div className="h-[80%] bg-white p-2 gap-4 rounded-2xl flex flex-col justify-between items-center w-[30%]">
      <Header />
      <ChatSection />
      <TagSection />
      <Product />
      <Filters />
      <Footer />
    </div>
  );
}
