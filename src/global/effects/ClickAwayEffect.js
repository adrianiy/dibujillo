/* istanbul ignore file */
import { useEffect } from 'react';

export default function useClickAwayEffect(parents, closeHandler) {
    useEffect(() => {
        function handleClickOutside(event) {
            const clickOutside = parents.every((parent) => !event.target.closest(parent));
            if (clickOutside) {
                closeHandler();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [parents, closeHandler]);
}
