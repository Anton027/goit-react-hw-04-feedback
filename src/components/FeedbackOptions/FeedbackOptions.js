import { Box } from "components/Box"
import PropTypes from 'prop-types';
export const FeedbackOptions = ({
    handleGoodIncrement,
    handleNeutralIncrement,
    handleBadIncrement
}) => {
    return (
        <Box as={'ul'} display='flex' gridGap="10px">
            <li >
                    <button
                        type="button"
                        onClick={() => handleGoodIncrement()}>
                        Good
                    </button>
            </li>
            <li >
                    <button
                        type="button"
                        onClick={() => handleNeutralIncrement()}>
                        Netural
                    </button>
            </li>
            <li>
                    <button
                        type="button"
                        onClick={() => handleBadIncrement()}>
                        Bad
                    </button>
                </li>
        </Box>
    )
}

FeedbackOptions.propTypes = {
    handleGoodIncrement: PropTypes.func.isRequired,
    handleNeutralIncrement: PropTypes.func.isRequired,
    handleBadIncrement: PropTypes.func.isRequired
};