import React from "react";

const Page = ({ className, children }) => {
    return <div className={`page ${className}`.trim()}>{children}</div>;
};

export default Page;
