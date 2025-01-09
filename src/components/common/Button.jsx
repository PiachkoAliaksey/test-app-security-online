import PropTypes from 'prop-types';

const Button = ({ onClick, title, children }) => {
    return (
        <button className='flex gap-2 items-center text-[#E95721]' onClick={() => onClick(prev => !prev)}>{children}{title}</button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string,
    children: PropTypes.node,
};

Button.defaultProps = {
    title: '',
    children: null,
};


export default Button