import { FaGithub } from "react-icons/fa";
import { SiPrisma, SiChakraui } from "react-icons/si";
import { Icon } from "@chakra-ui/react";
import "./Sample.scss";
import { Neko } from "neko-ts";
import { useEffect, useRef } from "react";

function Sample() {

    const neko = useRef<Neko>();

    useEffect(() => {
        if (!neko.current) {
            neko.current = new Neko({
                origin: {
                    x: 100,
                    y: 100,
                },
            });
        }
    }, [neko]);

    return (
        <>
            <div className="Sample">
                <h1>
                    This is a NextJS boilerplate with TypeScript, SCSS, NextAuth
                </h1>
                <p>
                    Features included:
                </p>
                <ul>
                    <li><Icon as={SiPrisma} /> Prisma ORM</li>
                    <li><Icon as={SiChakraui} /> Chakra UI</li>
                    <li>NextAuth</li>
                    <li>SCSS</li>
                    <li>NodeMailer</li>
                    <li>React Icons</li>
                </ul>
                <br />
                <br />
                <span>
                    Made with ❤️ by <a href="https://github.com/sujith-rek"><Icon as={FaGithub} /> Sujith</a>
                </span>
            </div>
            <canvas id="canvas"></canvas>
        </>
    );
}

export default Sample;
