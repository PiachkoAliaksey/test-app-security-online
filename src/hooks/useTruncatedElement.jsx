import { useState, useLayoutEffect } from "react";

const useTruncatedElement = ({ ref }) => {
    const [isTruncated, setIsTruncated] = useState(false);
    const [isReadingMore, setIsReadingMore] = useState(false);

    useLayoutEffect(() => {
        if (ref.current) {
            const { offsetHeight, scrollHeight } = ref.current;
            if (offsetHeight < scrollHeight) {

                setIsTruncated(true);
            } else {
                setIsTruncated(false);
            }
        }
    }, [ref.current]);

    return {
        isTruncated,
        isReadingMore,
        setIsReadingMore,
    };
};

export default useTruncatedElement