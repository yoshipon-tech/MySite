import Image from "next/image";
import cssModule from "./About.module.scss";
import ProfileImage from "/src/assets/image/IMG_3668.jpg";

export function About() {
  return (
    <>
      <div className={cssModule.aboutArea}>
        <div className={cssModule.imageArea}>
          <Image
            src={ProfileImage}
            width={200}
            height={200}
            alt="profile"
            className={cssModule.image}
          />
        </div>
        <div className={cssModule.introduce}>
          <h1>よしぽん / frontend</h1>
          <br />
          <p>
            WEBフロントエンドを中心に東京のどこかで働いているエンジニアです。
            <br />
            バックエンドにいたら、なぜかフロントに異動しReact周りを学ぶようになりました。
            <br />
            めざせ多趣味系エンジニア
            <br />
          </p>
        </div>
      </div>
    </>
  );
}
