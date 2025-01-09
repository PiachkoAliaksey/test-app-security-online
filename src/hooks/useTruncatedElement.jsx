import { useState, useLayoutEffect } from "react";

const useTruncatedElement = ({ ref, data }) => {
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
    }, [ref, data]);

    return {
        isTruncated,
        isReadingMore,
        setIsReadingMore,
    };
};

export default useTruncatedElement