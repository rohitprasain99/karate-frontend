import DojoCard from "@/components/common/DojoCard";
import React from "react";

export default function page() {
  return (
    <div className="flex gap-4">
      {[1, 2, 3, 4].map((card) => (
        <React.Fragment key={card}>
          <DojoCard />
        </React.Fragment>
      ))}
    </div>
  );
}
