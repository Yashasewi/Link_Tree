import Image from "next/image";

import styles from "./page.module.scss";
import data from "@/public/data";

import vercel from "@/public/svg/google.svg";

import Effect from "@/Components/Effect";
import Links from "@/Components/Links";

/*
Machaoo is a streetwear brand that was founded in 2023 by a group of friends from the India.
*/

export default function Home() {
    // console.log("home dsgsg");
    return (
        <main className={styles.main}>
            <Effect />
            {/* info section of the user */}
            <div className={styles.Info}>
                <Image
                    className={styles.logo}
                    src={vercel}
                    alt={"logo"}
                    width={50}
                    height={50}
                />

                <h1 className={styles.title} data-value="@MACHAO">
                    @MACHAO
                </h1>
                <p className={styles.description}>
                    Looking for high-quality streetwear that won't break the
                    bank? Look no further than Machaoo. Our affordable
                    collection of t-shirts, hoodies, and joggers is perfect for
                    anyone who wants to look cool without spending a fortune.
                    Check out our Linktree page for links to our online store
                    and social media profiles.
                </p>
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
