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
// Show 11 icons + the "+" button = 12 slots (2 full rows of 6)
const COLLAPSED_VISIBLE = 11;

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

type SkillGridProps = {
    category: SkillCategory;
    animationDelay?: number;
};

const SkillGrid: React.FC<SkillGridProps> = ({ category, animationDelay = 0 }) => {
    const [expanded, setExpanded] = useState(false);
    const { ref, inView } = useInView();

    const hasMore = category.icons.length > COLLAPSED_VISIBLE + 1;
    const visibleIcons =
        hasMore && !expanded
            ? category.icons.slice(0, COLLAPSED_VISIBLE)
            : category.icons;

    return (
        <div
            ref={ref}
            className="mb-10 transition-all duration-700 ease-out"
            style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(32px)",
                transitionDelay: `${animationDelay}ms`,
            }}
        >
            <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-3 text-neutral-300 uppercase tracking-widest">
                {category.title}
            </h4>

            <div className="grid grid-cols-6 gap-2 sm:gap-3">
                {visibleIcons.map((src, i) => (
                    <div
                        key={i}
                        className="flex items-center justify-center aspect-square p-2 sm:p-2.5 transition-transform duration-200 hover:scale-105"
                        style={{
                            transitionDelay: inView ? `${animationDelay + i * 40}ms` : "0ms",
                            opacity: inView ? 1 : 0,
                            transform: inView ? "scale(1)" : "scale(0.8)",
                            transition: `opacity 0.4s ease ${animationDelay + i * 40}ms, transform 0.4s ease ${animationDelay + i * 40}ms`,
                        }}
                    >
                        <img
                            src={src}
                            alt={`${category.title} icon ${i + 1}`}
                            className="w-3/4 h-3/4 object-contain"
                            loading="lazy"
                        />
                    </div>
                ))}

                {hasMore && !expanded && (
                    <button
                        onClick={() => setExpanded(true)}
                        className="flex items-center justify-center aspect-square bg-neutral-800 text-white text-xl font-bold active:scale-95 transition-all duration-200 hover:bg-neutral-700"
                        aria-label={`Show ${category.icons.length - COLLAPSED_VISIBLE} more icons`}
                    >
                        +{category.icons.length - COLLAPSED_VISIBLE}
                    </button>
                )}
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
                    <SkillGrid
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
                    <SkillGrid
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
