import cssModule from "./Footer.module.scss";
export function Footer() {
  return (
    <footer className={cssModule.footer}>
      <p>これはfooterになります</p>
    </footer>
  );
}
