import React, { FC } from "react";
import Image from "next/image";
import styles from "./BreakpointHero.module.scss";
import { HtmlParser } from "../../RichTextComponents/HtmlParser";

interface BreakpointHeroProps {
    title?: string,
    subtitle?: string,
    description?: string,
    logo: string,
    backgroundImage: string,
}

export const BreakpointHero: FC<BreakpointHeroProps> = ({ title, subtitle, description, logo, backgroundImage }) => {
    return (
        <section className={`${styles["hero"]}`}>
            <Image
                src={backgroundImage}
                alt=""
                className={styles["hero__img"]}
                fill
            />
            <div className={styles["hero__container"]}>
                <Image 
                    src={logo} 
                    alt="Breakpoint logo" 
                    className="img-fluid tw-mx-auto"
                    width="440"
                    height="210"
                    />
            </div>
            <div className={`tw-text-center ${styles["hero__copy-container"]}`}>
                <h1 className={`monument ${styles["hero__title"]}`}>{title}</h1>
                <h2 className={`monument ${styles["hero__subtitle"]}`}>{subtitle}</h2>
                <div className={`small subdued ${styles["hero__copy"]}`}>
                    <HtmlParser classes="gap-0" rawHtml={description ? description : '<p></p>'} />
                </div>
            </div>
        </section>
    )
}

