"use client";
// import item from "@/public/data";
import Link from "next/link";
import styles from "./links.module.scss";
import {
  BsTwitter,
  BsLinkedin,
  BsGithub,
  BsFacebook,
  BsInstagram,
  BsYoutube,
  BsServer,
} from "react-icons/bs";


function Links({ item }) {
  // console.log(item);
  const shareLink = (url) => {
    return () => {
      navigator.clipboard.writeText(url);
      alert("Link copied to clipboard");
    };
  };

  const icon = (name) => {
    switch (name) {
      case "Twitter":
        return <BsTwitter alt="app logo" />;
      case "Website":
        return <BsServer alt="app logo" />;
      case "LinkedIn":
        return <BsLinkedin alt="app logo" />;
      case "Github":
        return <BsGithub alt="app logo" />;
      case "Facebook":
        return <BsFacebook alt="app logo" />;
      case "Instagram":
        return <BsInstagram alt="app logo" />;
      case "YouTube":
        return <BsYoutube alt="app logo" />;

      default:
        return <BsTwitter alt="app logo" />;
    }
  };

  return (
    <div className={styles.tilecontainer}>
      <Link className={styles.tile} href={item.url}>
        <div className={styles.icon}>
          {/* <FcDatabase alt="app logo" /> */}
          {icon(item.name)}
        </div>
        <p>{item.name}</p>
        <div className={styles.tilesharebutton} onClick={shareLink(item.url)}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 16 16"
            enableBackground="new 0 0 24 24"
            className="sc-gKsewC iPWGYb"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.6464 3.85347L11 4.20702L11.7071 3.49992L11.3536 3.14636L8.35355 0.146362H7.64645L4.64645 3.14636L4.29289 3.49992L5 4.20702L5.35355 3.85347L7.5 1.70702V9.49992V9.99992H8.5V9.49992V1.70702L10.6464 3.85347ZM1 5.49994L1.5 4.99994H4V5.99994H2V14.9999H14V5.99994H12V4.99994H14.5L15 5.49994V15.4999L14.5 15.9999H1.5L1 15.4999V5.49994Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </Link>
    </div>
  );
}

export default Links;
