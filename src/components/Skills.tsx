import { useEffect, useRef, useState } from "react";

type SkillCategory = {
    title: string;
    icons: string[];
};

const logos: SkillCategory[] = [
    {
        title: "Frameworks & Libraries",
        icons: [
            "https://icon.icepanel.io/Technology/svg/React.svg",
            "https://icon.icepanel.io/Technology/svg/Node.js.svg",
            "https://icon.icepanel.io/Technology/svg/.NET.svg",
            "https://icon.icepanel.io/Technology/svg/.NET-core.svg",
            "https://icon.icepanel.io/Technology/svg/Bootstrap.svg",
            "https://icon.icepanel.io/Technology/svg/jQuery.svg",
            "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg",
        ],
    },
    {
        title: "Cloud & Infrastructure",
        icons: [
            "https://icon.icepanel.io/Technology/svg/Azure.svg",
            "https://icon.icepanel.io/Technology/svg/Docker.svg",
            "https://icon.icepanel.io/Technology/svg/Kubernetes.svg",
            "https://icon.icepanel.io/Technology/svg/NGINX.svg",
            "https://icon.icepanel.io/Technology/svg/Podman.svg",
            "https://icon.icepanel.io/Technology/svg/HashiCorp-Terraform.svg",
            "https://icon.icepanel.io/Technology/png-shadow-512/Helm.png",
        ],
    },
    {
        title: "DevOps & CI/CD",
        icons: [
            "https://icon.icepanel.io/Technology/svg/Azure-Devops.svg",
            "https://icon.icepanel.io/Technology/svg/GitHub-Actions.svg",
            "https://icon.icepanel.io/Technology/svg/Argo-CD.svg",
        ],
    },
    {
        title: "Programming Languages",
        icons: [
            "https://icon.icepanel.io/Technology/svg/C%23-%28CSharp%29.svg",
            "https://icon.icepanel.io/Technology/svg/JavaScript.svg",
            "https://icon.icepanel.io/Technology/svg/TypeScript.svg",
            "https://icon.icepanel.io/Technology/svg/HTML5.svg",
            "https://icon.icepanel.io/Technology/svg/CSS3.svg",
        ],
    },
    {
        title: "Databases",
        icons: [
            "https://icon.icepanel.io/Technology/svg/PostgresSQL.svg",
            "https://icon.icepanel.io/Technology/svg/MySQL.svg",
            "https://icon.icepanel.io/Technology/svg/Azure-SQL-Database.svg",
            "https://icon.icepanel.io/Technology/png-shadow-512/Microsoft-SQL-Server.png",
            "https://icon.icepanel.io/Technology/svg/Redis.svg",
            "https://icon.icepanel.io/Technology/png-shadow-512/Elastic-Search.png",
        ],
    },
    {
        title: "Development Tools",
        icons: [
            "https://icon.icepanel.io/Technology/svg/Git.svg",
            "https://icon.icepanel.io/Technology/png-shadow-512/GitHub.png",
            "https://icon.icepanel.io/Technology/svg/NPM.svg",
            "https://icon.icepanel.io/Technology/svg/NuGet.svg",
            "https://icon.icepanel.io/Technology/svg/Jest.svg",
            "https://icon.icepanel.io/Technology/svg/Playwrite.svg",
            "https://icon.icepanel.io/Technology/svg/Postman.svg",
            "https://icon.icepanel.io/Technology/svg/Swagger.svg",
            "https://icon.icepanel.io/Technology/svg/Vite.js.svg",
            "https://az-icons.com/export/icons/a39e7fd3307ff56cc26d5a64eec7bf3f.svg",
        ],
    },
    {
        title: "Monitoring & Observability",
        icons: [
            "https://icon.icepanel.io/Technology/svg/Grafana.svg",
            "https://icon.icepanel.io/Technology/svg/Prometheus.svg",
            "https://icon.icepanel.io/Technology/svg/Kibana.svg",
            "https://icon.icepanel.io/Technology/svg/OpenTelemetry.svg",
            "https://icon.icepanel.io/Technology/svg/SonarQube.svg",
        ],
    },
    {
        title: "Collaboration Tools",
        icons: [
            "https://icon.icepanel.io/Technology/svg/Confluence.svg",
            "https://icon.icepanel.io/Technology/svg/Slack.svg",
            "https://icon.icepanel.io/Technology/svg/Figma.svg",
        ],
    },
];

const INITIAL_CATEGORIES = 3;

function useInView(threshold = 0.15) {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    return { ref, inView };
}

type SkillRowProps = {
    category: SkillCategory;
    animationDelay?: number;
};

const SkillRow: React.FC<SkillRowProps> = ({ category, animationDelay = 0 }) => {
    const { ref, inView } = useInView();
    const scrollRef = useRef<HTMLDivElement>(null);

    const canScrollLeft = useRef(false);
    const canScrollRight = useRef(false);
    const [, forceUpdate] = useState(0);

    const updateScrollState = () => {
        const el = scrollRef.current;
        if (!el) return;
        canScrollLeft.current = el.scrollLeft > 4;
        canScrollRight.current = el.scrollLeft + el.clientWidth < el.scrollWidth - 4;
        forceUpdate((n) => n + 1);
    };

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        updateScrollState();
        el.addEventListener("scroll", updateScrollState, { passive: true });
        window.addEventListener("resize", updateScrollState);
        return () => {
            el.removeEventListener("scroll", updateScrollState);
            window.removeEventListener("resize", updateScrollState);
        };
    }, []);

    const scroll = (dir: "left" | "right") => {
        const el = scrollRef.current;
        if (!el) return;
        el.scrollBy({ left: dir === "right" ? 240 : -240, behavior: "smooth" });
    };

    return (
        <div
            ref={ref}
            className="mb-8 transition-all duration-700 ease-out"
            style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(28px)",
                transitionDelay: `${animationDelay}ms`,
            }}
        >
            <h4 className="text-xs sm:text-base font-semibold mb-3 text-neutral-300 uppercase tracking-widest">
                {category.title}
            </h4>

            <div className="relative group">
                {/* Left fade + arrow */}
                <div
                    className="absolute left-0 top-0 h-full w-10 z-10 flex items-center justify-start pointer-events-none transition-opacity duration-300"
                    style={{
                        opacity: canScrollLeft.current ? 1 : 0,
                        background: "linear-gradient(to right, rgba(10,10,10,0.85), transparent)",
                    }}
                >
                    <button
                        onClick={() => scroll("left")}
                        className="pointer-events-auto ml-1 text-white/60 hover:text-white text-lg leading-none transition-colors"
                    >
                        ‹
                    </button>
                </div>

                {/* Scrollable row */}
                <div
                    ref={scrollRef}
                    className="flex flex-row gap-2 overflow-x-auto scroll-smooth"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {category.icons.map((src, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 flex items-center justify-center bg-neutral-800 w-14 h-14 sm:w-16 sm:h-16 p-2 hover:scale-105 transition-transform duration-200"
                            style={{
                                opacity: inView ? 1 : 0,
                                transform: inView ? "scale(1)" : "scale(0.75)",
                                transition: `opacity 0.35s ease ${animationDelay + i * 45}ms, transform 0.35s ease ${animationDelay + i * 45}ms`,
                            }}
                        >
                            <img
                                src={src}
                                alt={`${category.title} icon ${i + 1}`}
                                className="w-full h-full object-contain"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>

                {/* Right fade + arrow */}
                <div
                    className="absolute right-0 top-0 h-full w-10 z-10 flex items-center justify-end pointer-events-none transition-opacity duration-300"
                    style={{
                        opacity: canScrollRight.current ? 1 : 0,
                        background: "linear-gradient(to left, rgba(10,10,10,0.85), transparent)",
                    }}
                >
                    <button
                        onClick={() => scroll("right")}
                        className="pointer-events-auto mr-1 text-white/60 hover:text-white text-lg leading-none transition-colors"
                    >
                        ›
                    </button>
                </div>
            </div>
        </div>
    );
};

const Skills: React.FC = () => {
    const [showAll, setShowAll] = useState(false);
    const { ref: headingRef, inView: headingInView } = useInView(0.2);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const extraRef = useRef<HTMLDivElement>(null);

    const initialCategories = logos.slice(0, INITIAL_CATEGORIES);
    const extraCategories = logos.slice(INITIAL_CATEGORIES);
    const hiddenCount = extraCategories.length;

    const handleToggle = () => {
        if (showAll) {
            setShowAll(false);
        } else {
            setShowAll(true);
            setTimeout(() => {
                buttonRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }, 500);
        }
    };

    return (
        <div className="ml-4 mr-4 mt-6 mb-6 w-[90%]">
            <div
                ref={headingRef}
                className="transition-all duration-700 ease-out"
                style={{
                    opacity: headingInView ? 1 : 0,
                    transform: headingInView ? "translateX(0)" : "translateX(-48px)",
                }}
            >
                <h3 className="text-3xl sm:text-6xl md:text-8xl lg:text-[10rem] leading-tight whitespace-nowrap overflow-hidden font-bold">
                    Skills & Experience
                </h3>
                <div className="w-[25%] h-1 bg-red-500 mb-6" />
            </div>

            <div>
                {initialCategories.map((category, index) => (
                    <SkillRow
                        key={category.title}
                        category={category}
                        animationDelay={index * 100}
                    />
                ))}
            </div>

            <div
                ref={extraRef}
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{
                    maxHeight: showAll ? `${extraRef.current?.scrollHeight ?? 9999}px` : "0px",
                    opacity: showAll ? 1 : 0,
                }}
            >
                {extraCategories.map((category, index) => (
                    <SkillRow
                        key={category.title}
                        category={category}
                        animationDelay={index * 80}
                    />
                ))}
            </div>

            <div className="mt-2 mb-4">
                <button
                    ref={buttonRef}
                    onClick={handleToggle}
                    className="group flex items-center justify-center gap-2 w-full py-3 bg-red-800 border border-red-600 text-white text-sm uppercase tracking-widest font-semibold hover:bg-red-600 hover:border-red-600 transition-all duration-300"
                >
                    <span
                        key={showAll ? "less" : "more"}
                        className="animate-fade-slide"
                    >
                        {showAll ? "Show less" : `Show ${hiddenCount} more categories`}
                    </span>
                    <span className={`inline-block transition-transform duration-300 ${showAll ? "rotate-180" : "group-hover:translate-y-0.5"}`}>
                        ↓
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Skills;
