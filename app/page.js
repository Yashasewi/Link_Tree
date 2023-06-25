import Image from "next/image";

import styles from "./page.module.scss";
import data from "@/public/data";

import Yashasewi from "@/public/svg/google.svg";

import Effect from "@/Components/Effect";
import Links from "@/Components/Links";

export default function Home() {
  // console.log("home dsgsg");
  return (
    <main className={styles.main}>
      <Effect />
      {/* info section of the user */}
      <div className={styles.Info}>
        <Image
          className={styles.logo}
          src={Yashasewi}
          alt={"logo"}
          width={50}
          height={50}
        />

        <h1 className={styles.title} data-value="@Yashasewi">
          @Yashasewi
        </h1>
        <p className={styles.description}>{data[0].description}</p>
      </div>
      {/* link section  */}
      <div className={styles.linkcontainer}>
        {data[0].links.map((item) => {
          return <Links item={item} />;
        })}
      </div>
    </main>
  );
}
