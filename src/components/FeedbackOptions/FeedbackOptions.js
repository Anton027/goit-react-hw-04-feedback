import { Box } from "components/Box"
import PropTypes from 'prop-types';
export const FeedbackOptions = ({ options: { good, neutral, bad },
    handleIncrement
}) => {
    const optionsKeys = Object.keys({ good, neutral, bad })
    
    return (
        <Box as={'ul'} display='flex' gridGap="10px">
            {optionsKeys.map(option => (
                <li key={option}>
                    <button
                        type="button"
                        onClick={() => handleIncrement(option)}>
                        {option.toLocaleUpperCase()}
                    </button>
                </li>
            ))}
        </Box>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.object.isRequired,
    handleIncrement: PropTypes.func.isRequired,
};