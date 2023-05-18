import React from 'react';

const Menu = ({ links, isMenuOpen }) => {
    return (
        <div>
            {isMenuOpen && (
                      <div className="md:hidden absolute top-16 lg:top-20 xl:top-24 left-0 w-full lg:w-1/2 z-50 bg-white">
                      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                          {links.map(({ title, link }) => (
                              <a
                                  href={link}
                                  key={title}
                                  className="text-black hover:bg-gray-50 hover:text-sky-600 block px-3 py-2 rounded-md text-base font-medium"
                              >
                                  {title}
                              </a>
                          ))}
                      </div>
                 </div>
              )}
        </div>
    );
};

export default Menu;
