import { HoverText } from "..";

const Footer = () => {
  return (
    <div className="container">
      <div className="flex">
        <div></div>
        <div className="grid grid-cols-3 gap-10">
          <div>
            <p>LEGAL</p>
            <ul>
              <li>
                <HoverText href="/" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
