import React from "react";
import usePopupMenu from './usePopupMenu';

const Menu = ({ menu }) => {
    const {xPos, yPos, showMenu } = usePopupMenu();

    return (
        <>
            {showMenu ? (
                <div
                  className="menu-container"
                  style={{
                    top: yPos,
                    left: xPos,
                  }}
                >
                  {menu}
                </div>
              ) : (
                <></>
              )}
        </>
          )}
    

export default Menu;