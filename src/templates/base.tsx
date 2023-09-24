import Footer from './Footer';
import Header from './Header';
import type { ReactNode } from 'react';

type IBaseProps = {
    children: ReactNode;
  };
  
const Base = (props : IBaseProps) => (
  <div className="text-gray-600 antialiased">
    <Header />
    <main className="content py-5 text-xl">
        {props.children}
    </main>
    <Footer />
  </div>
);

export { Base };