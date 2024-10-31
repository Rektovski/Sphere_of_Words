import "./testSphere.css";
import { useEffect, useRef } from "react";
import TagCloud from "TagCloud";

export default function TextShpere() {
    const containerRef = useRef(null);

    useEffect(() => {
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
            "React-Bootstrap",
            "Chakra UI",
            "CLION",
            "Webstorm",
            "Github",
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

        // Capture the current reference
        const currentContainer = containerRef.current;

        if (currentContainer) {
            TagCloud(currentContainer, texts, options);
        }

        // Cleanup function
        return () => {
            if (currentContainer) {
                currentContainer.innerHTML = ""; // Clear the content
            }
        };
    }, []);
    return (
        <>
            <div className="text-sphere">
                <span className="tagcloud"></span>
            </div>
        </>
    );
};
