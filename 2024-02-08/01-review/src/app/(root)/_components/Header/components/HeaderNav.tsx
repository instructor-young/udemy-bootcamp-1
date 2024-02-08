import HeaderNavItem from "./HeaderNavItem";

function HeaderNav() {
  return (
    <nav className="ml-20">
      <ul className="flex gap-x-4">
        <HeaderNavItem href="/categories" label="카테고리" />
        <HeaderNavItem href="/events" label="이벤트" />
        <HeaderNavItem href="/communities" label="커뮤니티" />
      </ul>
    </nav>
  );
}

export default HeaderNav;
