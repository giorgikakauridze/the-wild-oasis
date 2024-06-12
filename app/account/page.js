import { auth } from "../_lib/auth";

export const metadata = {
  title: "Guest Area",
};

export default async function Page() {
  const session = await auth();

  const starter = session.user.name.split(" ")[0];
  const firstName = starter
    .split("")
    .map((el, i) => (i === 0 ? el.toUpperCase() : el))
    .join("");
  return (
    <h2 className="font-semibold text-2xl my-3  text-accent-400 mb-7">
      Welcome, {firstName}
    </h2>
  );
}
