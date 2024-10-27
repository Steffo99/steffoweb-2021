import React, { ReactNode } from "react"
import { Fira_Sans as FiraSans, Zilla_Slab as ZillaSlab, Source_Serif_4 as SourceSerif } from 'next/font/google'
import { config as faConfig } from "@fortawesome/fontawesome-svg-core"

faConfig.autoAddCss = false

const firaSans = FiraSans({
	weight: ["400", "700"],
	subsets: ["latin"],
	variable: "--f-fira-sans",
	display: "swap",
})

const zillaSlab = ZillaSlab({
	weight: ["700"],
	subsets: ["latin"],
	variable: "--f-zilla-slab",
	display: "swap",
})

const sourceSerif = SourceSerif({
	weight: ["400"],
	subsets: ["latin"],
	variable: "--f-source-serif",
	display: "swap",
})

import "./layout.css"
import classNames from "classnames"


export type LayoutProps = {
	children: ReactNode,
}

export default function RootLayout({children}: LayoutProps) {
	return <>
		{/* TODO: Set the lang attribute */}
		<html lang="" className={classNames(
			firaSans.variable,
			zillaSlab.variable,
			sourceSerif.variable,
		)}>
			<head>
				<title>Steffo</title>
			</head>
			<body>
				<header>
					<h1>
						<a>
							<span>
								Steffo
							</span>
						</a>
						<small>
							{" is "}
						</small>
						<a>
							<small>
								working
							</small>
						</a>
					</h1>
				</header>
				<nav>
					<a>
						<div className="panel">
							AAAAaa
						</div>
					</a>
					<a>
						<div className="panel">
							BBBBbb
						</div>
					</a>
					<a>
						<div className="panel">
							CCCCcc
						</div>
					</a>
				</nav>
				<main>
					{children}
				</main>
			</body>
		</html>
	</>
}