import type { ReactNode } from "react";
interface ContentWrapperProps {
	children: ReactNode;
}

const ContentWrapper = ({ children }: ContentWrapperProps) => {
	return <div className="content-wrapper">{children}</div>;
};

export default ContentWrapper;
