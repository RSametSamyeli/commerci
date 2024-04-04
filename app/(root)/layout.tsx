import MobileNav from '@/components/shared/MobileNav'
import Sidebar from '@/components/shared/Sidebar'
import { Toaster } from '@/components/ui/toaster'
import { BackgroundBeams } from "../../components/ui/background-beams"; 

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      {/* Sidebar ve MobileNav bileşenlerinin z-index değerlerini arttırıyoruz */}
      <Sidebar />
      <MobileNav />

      <div className="root-container relative">
        <div className="wrapper">
          {children}
          <BackgroundBeamsDemo />
        </div>
      </div>

      <Toaster />
    </main>
  );
};

export default Layout;

export function BackgroundBeamsDemo() {
  return (
    <div className="h-screen w-screen top-0 left-0 z-0 absolute pointer-events-none">
      <BackgroundBeams />
    </div>
  );
}
