import PropTypes from 'prop-types';
import { Skeleton } from '@mui/material';

const Field = ({ title, isLoading, text, duration }) => {
    return (
        <div className='flex gap-5 text-[14px]'>
            <span className='text-[#444444] min-w-[80px]'>{title}</span>
            {isLoading ? <div className='font-medium '>{text} {duration && `(${duration})`}</div> : <Skeleton variant='triangle' width={150} height={20} className='rounded-md' />}
        </div>
    )
}

Field.propTypes = {
    title: PropTypes.string,
    isLoading:PropTypes.bool,
    text:PropTypes.string,
    duration:PropTypes.string
};

export default Field