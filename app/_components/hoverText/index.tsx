import Link from "next/link";

const HoverText = ({
  href,
  children,
  className = "",
  mainTextClass = "",
  hoverClass = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  mainTextClass?: string;
  hoverClass?: string;
}) => {
  return (
    <Link href={href} className={`inline-block group ${className}`}>
      <div className="relative overflow-hidden">
        <div className={`t-lh-1 ${mainTextClass}`}>{children}</div>
        <div className={`t-lh-1--text ${hoverClass}`}>{children}</div>
      </div>
    </Link>
  );
};

export default HoverText;
