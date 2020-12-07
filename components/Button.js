import Spinner from './Spinner'

const Button = ({
    isLoading,
    title,
    children,
    ...buttonProps
}) => {
    return (
        <button className="" {...buttonProps}>
            {isLoading ? (
                <Spinner width="20" fill="white" className="animate-spin" />
            ) : (
                    title
                )}
            {children}
        </button>
    );
};
export default Button;