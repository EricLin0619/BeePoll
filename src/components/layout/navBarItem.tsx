import React from 'react';
import { useRouter } from 'next/router';

const NavBarItem = ({ children, href, className, tabIndex, testId }: any) => {
  const router = useRouter();
  const activeClass = 'navbar-item-active';
  const activeClasses = className ? `${className} ${activeClass}` : activeClass;

  return (
    <span className="d-inline-flex align-items-center navbar-item">
      <span className={router.asPath === href ? activeClasses : className} tabIndex={tabIndex} data-testid={testId}>
        {children}
      </span>
    </span>
  );
};

export default NavBarItem;
