"use client";

import {faDiscord, faGithub, faItchIo, faLinkedin, faGitAlt, faSteam} from "@fortawesome/free-brands-svg-icons"
import {faArrowLeft, faBookAtlas, faBorderAll, faCashRegister, faCircleNodes, faCog, faDiagramProject, faEnvelope, faStar, faGamepad, faGlobe, faPaintbrush, faPaintRoller, faPlus, faFire, faShield, faShieldAlt} from "@fortawesome/free-solid-svg-icons"
import {default as Link} from "next/link"
import {useRouter} from "next/navigation"
import React from "react"
import {FlipPanel} from "../components/FlipPanel"
import {LinkPanel} from "../components/LinkPanel"
import {ProjectsList} from "../components/ProjectsList"
import {useGitHubRepositories} from "../hooks/useGitHubRepositories"
import {useKonamiCode} from "../hooks/useKonamiCode"


export default function RootPage() {
    const router = useRouter()

    const repos = useGitHubRepositories("Steffo99")
    useKonamiCode(() => router.push("/garasauto"))

    return <>
        <div className={"chapter-1"}>
            <section className={"panel box"} id={"panel-about"}>
                <h3>
                    About me
                </h3>
                <p>
                    I'm <dfn>Stefano Pigozzi</dfn>, an Italian Computer Science graduate and <b>Master's student</b> at <Link href={"https://www.unimore.it/"}>Unimore</Link>!
                </p>
                <hr/>
                <p>
                    I like connecting people via technology!
                </p>
                <p>
                    For that reason, I enjoy using, exploring, studying and developing:
                </p>
                <ul>
                    <li>social applications and their communities;</li>
                    <li>videogames and their competitions;</li>
                    <li>websites and Internet protocols in general;</li>
                    <li>chat bots and integrations.</li>
                </ul>
                <p>
                    I'm also a supporter of the <a href={"https://fsfe.org/freesoftware/freesoftware.en.html"}>free software movement</a>, and try to release everything I make under <a href={"https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12"}>a free software license</a>.
                </p>
                <p>
                    I hope to see you around the Internet, just like how you've stumbled on my homepage here!
                </p>
            </section>
        </div>
        <div className={"chapter-3"}>
            <FlipPanel
                className={"box"}
                front={(flip) => <>
                    <h3>
                        My projects
                    </h3>
                    <p>
                        Often, while experimenting with a new technology, I notice something that can be improved, and I try to come up with a solution to it.
                    </p>
                    <hr className={"float-bottom"}/>
                    <p>
                        Here's a small sample of what I've worked on:
                    </p>
                    <div className={"group-lp"}>
                        <LinkPanel
                            href={"https://bluelib.steffo.eu/examples/index.html"}
                            icon={faPaintRoller}
                            text={"Bluelib"}
                            description={"Customizable web stylesheet"}
                        />
                        <LinkPanel
                            href={"https://steffo.itch.io/hella-farm"}
                            icon={faGamepad}
                            text={"Hella Farm"}
                            description={"Game jam prototype"}
                        />
                    </div>
                    <div className={"group-lp"}>
                        <LinkPanel
                            href={"https://github.com/Steffo99/greed"}
                            icon={faCashRegister}
                            text={"Greed"}
                            description={"Telegram store bot"}
                        />
                        <LinkPanel
                            href={"https://github.com/Steffo99/sophon"}
                            icon={faBookAtlas}
                            text={"Sophon"}
                            description={"Research hub for universities"}
                        />
                    </div>
                    <div className={"group-lp"}>
                        <LinkPanel
                            href={"https://marketplace.visualstudio.com/items?itemName=steffo.steffula-code"}
                            icon={faPaintbrush}
                            text={"Steffula Code"}
                            description={"Color theme for the VSCode editor"}
                        />
                        <LinkPanel
                            href={"https://steffo.itch.io/pineapple-surf"}
                            icon={faCog}
                            text={"Micronfig"}
                            description={"12-factor app config for Rust"}
                        />
                    </div>
                    <div className={"group-lp"}>
                        <LinkPanel
                            href={"https://stars.steffo.eu/"}
                            icon={faStar}
                            text={"Peafowl"}
                            description={"Static website for reviews"}
                        />
                        <LinkPanel
                            href={"https://glassflame.github.io/"}
                            icon={faFire}
                            text={"Glassflame"}
                            description={"Obsidian vault web viewer"}
                        />
                    </div>
                    <hr/>
                    <p>
                        If you're interested in seeing more, you can:
                    </p>
                    <div className={"group-lp"}>
                        <LinkPanel
                            href={"javascript:void(0)"}
                            icon={faDiagramProject}
                            text={"View all my projects"}
                            description={"There's a lot of stuff there!"}
                            onMouseOver={() => {
                                repos.load().then()
                            }}
                            onPress={() => {
                                repos.load().then()
                                flip()
                            }}
                        />
                    </div>
                </>}
                back={(flip) => <>
                    <h3>
                        All my projects
                    </h3>
                    <ProjectsList
                        repos={repos.data}
                    />
                    <hr className={"float-bottom"}/>
                    <div className={"group-lp"}>
                        <LinkPanel
                            href={"javascript:void(0)"}
                            icon={faArrowLeft}
                            text={"Go back"}
                            description={"That's too much for me..."}
                            onPress={flip}
                        />
                    </div>
                </>}
            />
            <section className={"panel box"} id={"panel-accounts"}>
                <h3>
                    Me on the Internet
                </h3>
                <p>
                    I sign up to basically any website I stumble upon to explore and study its functions, mechanisms, culture and community, so don't be surprised if you see me somewhere!
                </p>
                <hr className={"float-bottom"}/>
                <p>
                    I'm currently mostly active on the Fediverse, in particular on:
                </p>
                <div className={"group-lp"}>
                    <LinkPanel
                        href={"https://junimo.party/users/steffo"}
                        icon={faCircleNodes}
                        text={"Junimo Party"}
                        description={"@steffo@junimo.party"}
                        me
                    />
                </div>
                <hr/>
                <p>
                    Other services I often use are:
                </p>
                <div className={"group-lp"}>
                    <LinkPanel
                        href={"https://github.com/Steffo99"}
                        icon={faGithub}
                        text={"GitHub"}
                        description={"Steffo99"}
                        me
                    />
                    <LinkPanel
                        href={"https://forge.steffo.eu/steffo"}
                        icon={faGitAlt}
                        text={"Forgejo"}
                        description={"steffo"}
                        me
                    />
                </div>
                <div className={"group-lp"}>
                    <LinkPanel
                        href={"https://matrix.to/#/@steffo:uniberry.info?via=uniberry.info"}
                        icon={faBorderAll}
                        text={"Matrix"}
                        description={"@steffo:uniberry.info"}
                        me
                    />
                    <LinkPanel
                        href={"https://discord.com/users/77703771181817856"}
                        icon={faDiscord}
                        text={"Discord"}
                        description={"steffo"}
                        me
                    />
                </div>
                <div className={"group-lp"}>
                    <LinkPanel
                        href={"https://www.linkedin.com/in/steffo45/"}
                        icon={faLinkedin}
                        text={"Linkedin"}
                        description={"Stefano Pigozzi"}
                        me
                    />
                    <LinkPanel
                        href={"mailto:me@steffo.eu"}
                        icon={faEnvelope}
                        text={"Email"}
                        description={"me@steffo.eu"}
                        me
                    />
                </div>
                <div className={"group-lp"}>
                    <LinkPanel
                        href={"https://steamcommunity.com/profiles/76561198034314260/"}
                        icon={faSteam}
                        text={"Steam"}
                        description={"[U:1:74048532]"}
                        me
                    />
                    <LinkPanel
                        href={"https://steffo.itch.io/"}
                        icon={faItchIo}
                        text={"Itch.io"}
                        description={"Steffo"}
                        me
                    />
                </div>
            </section>
            <section className={"panel box"} id={"panel-friends"}>
                <h3>
                    My friends
                </h3>
                <p>
                    I think that everyone should have their personal website, and to encourage that, I list the website of all my IRL friends here, so that other people may see them!
                </p>
                <hr className={"float-bottom"}/>
                <p>
                    You can check them out here:
                </p>
                <div className={"group-lp"}>
                    <LinkPanel
                        icon={faGlobe}
                        text={"Gimbaro"}
                        href={"https://gimbaro.dev/"}
                        description={"gimbaro.dev"}
                    />
                    <LinkPanel
                        icon={faGlobe}
                        text={"Zelda"}
                        href={"https://zelda.sh/"}
                        description={"zelda.sh"}
                    />
                </div>
                <div className={"group-lp"}>
                    <LinkPanel
                        icon={faGlobe}
                        text={"Malbyx"}
                        href={"https://about.malbyx.eu/it"}
                        description={"malbyx.eu"}
                    />
                    <LinkPanel
                        icon={faGlobe}
                        text={"Nemesis"}
                        href={"https://www.fermitech.dev/"}
                        description={"fermitech.dev"}
                    />
                </div>
                <div className={"group-lp"}>
                    <LinkPanel
                        icon={faGlobe}
                        text={"Proto"}
                        href={"https://fabiodesim.one/"}
                        description={"fabiodesim.one"}
                    />
                    <LinkPanel
                        icon={faGlobe}
                        text={"SnowyCoder"}
                        href={"https://rossilorenzo.dev/"}
                        description={"rossilorenzo.dev"}
                    />
                </div>
                <div className={"group-lp"}>
                    <LinkPanel
                        icon={faGlobe}
                        text={"Viktya"}
                        href={"https://viktya.github.io/"}
                        description={"viktya.github.io"}
                    />
                </div>
                <hr/>
                <p>
                    Hey friends! If you make a website, please let me know:
                </p>
                <div className={"group-lp"}>
                    <LinkPanel
                        icon={faPlus}
                        text={"Made something?"}
                        href={"mailto:imadeawebsite@steffo.eu"}
                        description={"Tell me about it!"}
                    />
                </div>
            </section>
            <section className={"panel box home-ad"} id={"panel-adblocker"}>
                <h3>
                    Fake advertisement
                </h3>
                <p>
                    Hey! You're browsing the Internet without an ad-blocker!
                </p>
                <hr/>
                <p>
                    For your safety and better browser performance, you should install:
                </p>
                <div className={"group-lp"}>
                    <LinkPanel
                        icon={faShieldAlt}
                        text={"uBlock Origin"}
                        href={"https://ublockorigin.com"}
                        description={"Free, open-source ad content blocker"}
                    />
                </div>
                <hr/>
                <p>
                    Additionally, if you are technically inclined, consider setting up this on your network:
                </p>
                <div className={"group-lp"}>
                    <LinkPanel
                        icon={faShield}
                        text={"Pi-Hole"}
                        href={"https://pi-hole.net"}
                        description={"Network-wide ad blocking"}
                    />
                </div>
                <hr/>
                <p>
                    Enjoy a better Internet, and remember to pay for the services you find useful so that they don't need ads to keep existing!
                </p>
            </section>
        </div>
    </>
}
