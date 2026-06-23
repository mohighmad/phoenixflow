import Image from "next/image";

type SectionVisualProps = {
  src: string;
  alt: string;
  className?: string;
  frameClassName?: string;
  imageClassName?: string;
  mode?: "cover" | "contain";
  priority?: boolean;
  ratioClassName?: string;
  sizes?: string;
};

const joinClasses = (...classes: Array<string | undefined>) =>
  classes.filter(Boolean).join(" ");

export function SectionVisual({
  src,
  alt,
  className,
  frameClassName,
  imageClassName,
  mode = "cover",
  priority = false,
  ratioClassName = "aspect-[4/3]",
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: SectionVisualProps) {
  return (
    <div className={joinClasses("relative w-full", className)}>
      <div
        className={joinClasses(
          "pf-frame relative overflow-hidden",
          ratioClassName,
          frameClassName,
        )}
      >
        <Image
          fill
          alt={alt}
          priority={priority}
          sizes={sizes}
          src={src}
          className={joinClasses(
            mode === "cover" ? "object-cover" : "object-contain",
            imageClassName,
          )}
        />
      </div>
    </div>
  );
}
