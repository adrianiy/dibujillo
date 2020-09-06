/* istanbul ignore file */
import { useEffect } from 'react';

export default function useClickAwayEffect(ref, closeHandler) {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target) && !event.target.closest('.toasterWrapper')) {
                closeHandler();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, closeHandler]);
}
