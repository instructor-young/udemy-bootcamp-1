import Link from "next/link";

interface HeaderNavItemProps {
  href: string;
  label: string;
}

function HeaderNavItem({ href, label }: HeaderNavItemProps) {
  return (
    <li>
      <Link href={href} className="font-medium text-sm">
        {label}
      </Link>
    </li>
  );
}

export default HeaderNavItem;
