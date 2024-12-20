import Link from "next/link";

export default function Tags({
  tags,
  handleTagClick,
}: {
  tags: Record<string, string>;
  handleTagClick?: () => void;
}) {
  return (
    <div id="project-tags" className="tags flex flex-wrap items-center gap-2">
      {Object.keys(tags).map((key, index) => (
        <Link
          href={`/category/${key}`}
          className="project-tag flex h-6 shrink-0 items-center justify-center gap-2 rounded-lg bg-[#005253] px-2 py-1 text-xs font-medium text-[#abf8f3]"
          key={index}
          onClick={handleTagClick}
        >
          {tags[key]}
        </Link>
      ))}
    </div>
  );
}
