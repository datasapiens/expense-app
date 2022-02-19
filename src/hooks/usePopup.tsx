import {useState, useEffect, useCallback, MutableRefObject} from 'react';

interface IUsePopupReturnProps {
    isOpen: boolean;
    closeMenu: () => void;
    openMenu: () => void;
    toggleMenu: (e: any) => void;
}

const usePopup = (
    ref: MutableRefObject<HTMLElement | null>,
): IUsePopupReturnProps => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClickOutSideOfMenu = useCallback(
        (e) => {
            const path = e.path || (e.composedPath && e.composedPath());
            if (path && !path.includes(ref.current) && isOpen) {
                setIsOpen(false);
            }
        },
        [ref, isOpen],
    );

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('click', handleClickOutSideOfMenu);
        } else {
            window.removeEventListener('click', handleClickOutSideOfMenu);
        }
    }, [handleClickOutSideOfMenu, isOpen]);

    const openMenu = () => setIsOpen(true);
    const closeMenu = () => setIsOpen(false);

    const toggleMenu = (e: Event) => {
        if (e) {
            e.preventDefault();
        }
        setIsOpen(!isOpen);
    };

    return {
        isOpen,
        closeMenu,
        openMenu,
        toggleMenu,
    };
};

export default usePopup;
