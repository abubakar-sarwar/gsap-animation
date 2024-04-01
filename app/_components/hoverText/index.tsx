import Link from "next/link";

const HoverText = ({ href }: { href: string }) => {
  return (
    <Link href={href} className="inline-block group">
      <div className="relative overflow-hidden">
        <div className="t-lh-1">text</div>
        <div className="t-lh-1--text">text</div>
      </div>
    </Link>
  );
};

export default HoverText;
