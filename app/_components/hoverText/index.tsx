import Link from "next/link";

const HoverText = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link href={href} className="inline-block group">
      <div className="relative overflow-hidden">
        <div className="t-lh-1">{children}</div>
        <div className="t-lh-1--text">{children}</div>
      </div>
    </Link>
  );
};

export default HoverText;
