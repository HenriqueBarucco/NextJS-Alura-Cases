import NextLink from "next/link";

export default function Link({ children, href, ...props }) {
  return (
    <NextLink legacyBehavior href={href}>
      <a {...props}>{children}</a>
    </NextLink>
  );
}
