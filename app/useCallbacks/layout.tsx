import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="bg-blue-500">
      this section says that
      <div>{children}</div>
    </section>
  );
};

export default layout;
