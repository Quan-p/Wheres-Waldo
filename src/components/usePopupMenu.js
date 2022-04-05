import { useState, useCallback, useEffect } from "react"

const usePopupMenu = () => {
    const [xPos, setXPos] = useState("0px");
    const [yPos, setYPos] = useState("0px");
    const [showMenu, setShowMenu] = useState(false); 
    
    const handlePopupMenu = useCallback(
        (e) => {
          e.preventDefault();
    
          setXPos(`${e.pageX}px`);
          setYPos(`${e.pageY}px`);
          setShowMenu(true);
        },
        [setXPos, setYPos]
      );
    
    const handleClick = useCallback(() => {
        setShowMenu(false);
    }, [setShowMenu]);

    useEffect(() => {
        document.addEventListener('click', handlePopupMenu);
        return () => {
            document.removeEventListener('click', handlePopupMenu);
        };
    });

    return { xPos, yPos, showMenu};

}

export default usePopupMenu;