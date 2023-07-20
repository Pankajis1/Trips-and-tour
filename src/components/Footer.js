import { Pagelinks, Sociallinks } from "./Data";

const Footer =()=>{
  return(
    <>
    <footer className="section footer">
      <ul className="footer-links">
        {
          Pagelinks.map((fe)=>{
          const {href, page} = fe
          return(
            <li>
          <a href={href} className="footer-link">{page}</a>
        </li>
          )},)
        }
      </ul>
      <ul className="footer-icons">
        {Sociallinks.map((sa)=>{
          const {href, className} = sa
          return(
            <li>
              <a href={href} target="_blank" className="footer-icon">
                <i className={className}></i>
              </a>
            </li>
          )
        },)}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
    </>
  )
}

export default Footer;