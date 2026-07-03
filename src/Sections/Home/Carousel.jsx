import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';

const DEFAULT_ITEMS = [
    {
        title: 'Wedding Shoot',
        description: 'Creativity meets us to reach at top. ',
        id: 1,
        image: 'https://photos.smugmug.com/Best-Of-97/BEST-OF-STUDIO-97/i-wZwcMWh/0/M7DwPxDPhcPx745k9T5wqDfmC2GKjGjrJvSvTv9kf/XL/DSC09175-XL.jpg',
    },
    {
        title: 'Pre-Wedding Shoot',
        description: 'The game of happiness where no ones lose.',
        id: 2,
        image: 'https://photos.smugmug.com/Best-Of-97/BEST-OF-STUDIO-97/i-HzdNzjC/0/LLDRqbvb8DHjTxsHtdVvg42jpKkxnVhTqDhVhgrZ8/XL/JAYU-148-XL.jpg',
    },
    {
        title: 'Birthday Shoot',
        description: 'Make your birthday memorable with us.',
        id: 3,
        image: 'https://photos.smugmug.com/Best-Of-97/BEST-OF-STUDIO-97/i-PvKSb89/0/K5h5pJHmxxKwwN5Z47VDTdt3cpz388rn3FkrQKBmf/XL/JAYU-111-XL.jpg',
    },
    {
        title: 'Baby Shower',
        description: 'Your Beautiful baby needs beautiful memories.',
        id: 4,
        image: 'https://photos.smugmug.com/Best-Of-97/BEST-OF-STUDIO-97/i-LfLHQzK/0/LcSsq7kT5Nrjp86bXtzc3mMkDC6z4zMHq2BpDdD7g/XL/_DSC0018-XL.jpg',
    },
    {
        title: 'Cinematography',
        description: 'Believe in Quality over expenses.',
        id: 5,
        image: 'https://photos.smugmug.com/Best-Of-97/BEST-OF-STUDIO-97/i-qFj8cL2/0/NTs64V4VZhJps4QkhHrvvqkcvKN8t8pVcrNT7nRKc/XL/JAYU-163-XL.jpg',
    }
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: 'spring', stiffness: 300, damping: 30 };

function CarouselItem({ item, index, itemWidth, round, trackItemOffset, x, transition }) {
    const range = [-(index + 1) * trackItemOffset, -index * trackItemOffset, -(index - 1) * trackItemOffset];
    const outputRange = [90, 0, -90];
    const rotateY = useTransform(x, range, outputRange, { clamp: false });

    return (
        <motion.div
            key={`${item?.id ?? index}-${index}`}
            className={`relative shrink-0 flex flex-col ${round
                ? 'items-center justify-center text-center bg-[#120F17] border-0'
                : 'items-start justify-between bg-[#292828] opacity-92 border border-[#222] rounded-xl'
                } overflow-hidden cursor-grab active:cursor-grabbing`}
            style={{
                width: itemWidth,
                height: round ? itemWidth : '100%',
                rotateY: rotateY,
                ...(round && { borderRadius: '50%' })
            }}
            transition={transition}
        >
            
            <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-40 object-cover rounded-t-xl"
                />
            </a>
            <div className="p-5">
                <div className="mb-1 font-black font-[t5] text-xl text-white">{item.title}</div>
                <p className="text-sm text-white font-[t4] ">{item.description}</p>
            </div>
        </motion.div>
    );
}

export default function Carousel({
    items = DEFAULT_ITEMS,
    baseWidth = 300,
    autoplay = false,
    autoplayDelay = 3000,
    pauseOnHover = false,
    loop = false,
    round = false
}) {
    const containerPadding = 16;
    const itemWidth = baseWidth - containerPadding * 2;
    const trackItemOffset = itemWidth + GAP;
    const itemsForRender = useMemo(() => {
        if (!loop) return items;
        if (items.length === 0) return [];
        return [items[items.length - 1], ...items, items[0]];
    }, [items, loop]);

    const [position, setPosition] = useState(loop ? 1 : 0);
    const x = useMotionValue(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isJumping, setIsJumping] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const containerRef = useRef(null);
    useEffect(() => {
        if (pauseOnHover && containerRef.current) {
            const container = containerRef.current;
            const handleMouseEnter = () => setIsHovered(true);
            const handleMouseLeave = () => setIsHovered(false);
            container.addEventListener('mouseenter', handleMouseEnter);
            container.addEventListener('mouseleave', handleMouseLeave);
            return () => {
                container.removeEventListener('mouseenter', handleMouseEnter);
                container.removeEventListener('mouseleave', handleMouseLeave);
            };
        }
    }, [pauseOnHover]);

    useEffect(() => {
        if (!autoplay || itemsForRender.length <= 1) return undefined;
        if (pauseOnHover && isHovered) return undefined;

        const timer = setInterval(() => {
            setPosition(prev => Math.min(prev + 1, itemsForRender.length - 1));
        }, autoplayDelay);

        return () => clearInterval(timer);
    }, [autoplay, autoplayDelay, isHovered, pauseOnHover, itemsForRender.length]);

    useEffect(() => {
        const startingPosition = loop ? 1 : 0;
        setPosition(startingPosition);
        x.set(-startingPosition * trackItemOffset);
    }, [items.length, loop, trackItemOffset, x]);

    useEffect(() => {
        if (!loop && position > itemsForRender.length - 1) {
            setPosition(Math.max(0, itemsForRender.length - 1));
        }
    }, [itemsForRender.length, loop, position]);

    const effectiveTransition = isJumping ? { duration: 0 } : SPRING_OPTIONS;

    const handleAnimationStart = () => {
        setIsAnimating(true);
    };

    const handleAnimationComplete = () => {
        if (!loop || itemsForRender.length <= 1) {
            setIsAnimating(false);
            return;
        }
        const lastCloneIndex = itemsForRender.length - 1;

        if (position === lastCloneIndex) {
            setIsJumping(true);
            const target = 1;
            setPosition(target);
            x.set(-target * trackItemOffset);
            requestAnimationFrame(() => {
                setIsJumping(false);
                setIsAnimating(false);
            });
            return;
        }

        if (position === 0) {
            setIsJumping(true);
            const target = items.length;
            setPosition(target);
            x.set(-target * trackItemOffset);
            requestAnimationFrame(() => {
                setIsJumping(false);
                setIsAnimating(false);
            });
            return;
        }

        setIsAnimating(false);
    };

    const handleDragEnd = (_, info) => {
        const { offset, velocity } = info;
        const direction =
            offset.x < -DRAG_BUFFER || velocity.x < -VELOCITY_THRESHOLD
                ? 1
                : offset.x > DRAG_BUFFER || velocity.x > VELOCITY_THRESHOLD
                    ? -1
                    : 0;

        if (direction === 0) return;

        setPosition(prev => {
            const next = prev + direction;
            const max = itemsForRender.length - 1;
            return Math.max(0, Math.min(next, max));
        });
    };

    const dragProps = loop
        ? {}
        : {
            dragConstraints: {
                left: -trackItemOffset * Math.max(itemsForRender.length - 1, 0),
                right: 0
            }
        };

    const activeIndex =
        items.length === 0 ? 0 : loop ? (position - 1 + items.length) % items.length : Math.min(position, items.length - 1);

    return (
        <div
            ref={containerRef}
            className={`relative overflow-hidden p-4 ${round ? 'rounded-full border border-white' : 'rounded-3xl border border-white'
                }`}
            style={{
                width: `${baseWidth}px`,
                ...(round && { height: `${baseWidth}px` })
            }}
        >
            <motion.div
                className="flex"
                drag={isAnimating ? false : 'x'}
                {...dragProps}
                style={{
                    width: itemWidth,
                    gap: `${GAP}px`,
                    perspective: 1000,
                    perspectiveOrigin: `${position * trackItemOffset + itemWidth / 2}px 50%`,
                    x
                }}
                onDragEnd={handleDragEnd}
                animate={{ x: -(position * trackItemOffset) }}
                transition={effectiveTransition}
                onAnimationStart={handleAnimationStart}
                onAnimationComplete={handleAnimationComplete}
            >
                {itemsForRender.map((item, index) => (
                    <CarouselItem
                        key={`${item?.id ?? index}-${index}`}
                        item={item}
                        index={index}
                        itemWidth={itemWidth}
                        round={round}
                        trackItemOffset={trackItemOffset}
                        x={x}
                        transition={effectiveTransition}
                    />
                ))}
            </motion.div>
            <div className={`flex w-full justify-center ${round ? 'absolute z-20 bottom-12 left-1/2 -translate-x-1/2' : ''}`}>
                <div className="mt-4 flex w-37.5 justify-between px-8">
                    {items.map((_, index) => (
                        <motion.button
                            type="button"
                            key={index}
                            aria-label={`Go to slide ${index + 1}`}
                            aria-current={activeIndex === index}
                            className={`h-2 w-2 rounded-full cursor-pointer border-0 p-0 appearance-none transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${activeIndex === index
                                ? round
                                    ? 'bg-white'
                                    : 'bg-[#f0e5e5]'
                                : round
                                    ? 'bg-[#555]'
                                    : 'bg-[rgba(51,51,51,0.4)]'
                                }`}
                            animate={{
                                scale: activeIndex === index ? 1.2 : 1
                            }}
                            onClick={() => setPosition(loop ? index + 1 : index)}
                            transition={{ duration: 0.15 }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
