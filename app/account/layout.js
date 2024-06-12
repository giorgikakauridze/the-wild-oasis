import SideNavigation from "../_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <div className="md:grid md:grid-cols-[16rem_1fr] md:h-full md:gap-12 ">
      <SideNavigation />
      <div className="my-5 md:my-0">{children}</div>
    </div>
  );
}
