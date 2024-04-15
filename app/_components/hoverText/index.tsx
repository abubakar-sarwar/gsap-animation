import Link from "next/link";

const HoverText = ({
  href,
  children,
  className = "",
  mainTextClass = "",
  hoverClass = "",
  ...props
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  mainTextClass?: string;
  hoverClass?: string;
  onClick?: () => void;
}) => {
  return (
    <Link {...props} href={href} className={`inline-block group ${className}`}>
      <span className="block relative overflow-hidden">
        <span className={`block t-lh-1 ${mainTextClass}`}>{children}</span>
        <span className={`block t-lh-1--text ${hoverClass}`}>{children}</span>
      </span>
    </Link>
  );
};

export default HoverText;
