import { Header } from "../components/layout/Header";
import cssModule from "./index.module.css";
import { Footer } from "@/src/components/layout/Footer";
import { Main } from "../components/features/index/Main";
import { Top } from "../components/layout/Top";
export default function Index() {
  return (
    <>
      <Header />
      <Top />
      <section className={cssModule.main}>
        <Main />
      </section>
      <Footer />
    </>
  );
  // headerコンポーネント呼び出し

  // index.tsx呼び出し

  // Footerコンポーネント呼びだし
}
