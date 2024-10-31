import "./testSphere.css";
import { useEffect } from "react";
import TagCloud from "TagCloud";

export default function TextShpere() {
    useEffect(() => {
        return () => {
            const container = ".tagcloud";
            const texts = [
                "Windows",
                "Linux",
                "C++",
                "JavaScript",
                "Matlab",
                "React",
                "HTML",
                "CSS",
                "SCSS",
                "SASS",
                "Bootstrap",
                "React-Boostrap",
                "Chakra UI",
                "CLION",
                "Webstorm",
                "Github",
                "Docker",
                "Figma",
                "Netlify",
                "Retool API",
                "Firebase API",
            ];

            const options = {
                radius: 300,
                maxSpeed: "fast",
                initSpeed: "fast",
                keep: true,
            };

            TagCloud(container, texts, options);
        };
    }, []);

    return (
        <>
            <div className="text-shpere">
                <span className="tagcloud"></span>
            </div>
        </>
    );
};