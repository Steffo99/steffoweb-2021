import Image from "next/image"
import {default as Link} from "next/link"
import React, {ReactNode} from "react"
import { config as fontawesomeConfig } from '@fortawesome/fontawesome-svg-core'
import {default as imgSRound} from "../public/avatar.svg"

import '@steffo/bluelib/dist/base.root.css'
import '@steffo/bluelib/dist/layouts-center.root.css'
import '@steffo/bluelib/dist/layouts-flex.root.css'
import '@steffo/bluelib/dist/classic.root.css'
import '@steffo/bluelib/dist/glass.root.css'
import '@steffo/bluelib/dist/colors-royalblue.root.css'
import '@steffo/bluelib/dist/fonts-fira-ghpages.root.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import "../public/style.css"

fontawesomeConfig.autoAddCss = false

export type LayoutProps = {
    children: ReactNode,
}

export default function RootLayout({children}: LayoutProps) {
    return <>
        <html lang={"en"}>
            <head>
                <title>Steffo</title>
            </head>
            <body className={"layout-center"}>
                <h1>
                    <Image
                        alt={""}
                        src={imgSRound}
                        width={48}
                        height={48}
                        style={{
                            display: "inline-block",
                            verticalAlign: "text-bottom",
                        }}
                    />
                    Steffo
                </h1>
                <main>
                    {children}
                </main>
                <footer>
                    © {new Date().getFullYear()} Stefano Pigozzi | <Link href={"https://github.com/Steffo99/steffoweb"}>Source code</Link>
                </footer>
            </body>
        </html>
    </>
}