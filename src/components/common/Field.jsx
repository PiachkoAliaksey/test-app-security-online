import PropTypes from 'prop-types';

const Field = ({ title, children }) => {
    return (
        <div className='flex gap-5 text-[14px]'>
            <span className='text-[#444444] min-w-[80px]'>{title}</span>
            {children}
        </div>
    )
}

Field.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};

Field.defaultProps = {
    title: '',
    children: null,
};

export default Field