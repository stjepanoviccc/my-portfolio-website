import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import styles from "../scss/components/ToTopArrow.module.scss";

const BackToTop = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        showButton && (
            <button
                className={styles.toTopArrow}
                onClick={scrollToTop}>
                <FontAwesomeIcon icon={faChevronUp} className="w-6 h-8" style={{paddingTop: '2px'}}/>
            </button>
        )
    );
};

export default BackToTop;