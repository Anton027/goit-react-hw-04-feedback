import { Box } from "components/Box"
import PropTypes from 'prop-types';
export const Statistics = ({
    good,
    neutral,
    bad,
    total,
    positivePercentage
}) => {
    return (
        <Box as={"ul"}>
            <li>{`Good: ${good}`}</li>
            <li>{`Netural: ${neutral}`}</li>
            <li>{`Bad: ${bad}`}</li>
            <li>{`Total: ${total}`}</li>
            <li>{`Positive feedback: ${positivePercentage ?
                positivePercentage : 0}%`}
            </li>
        </Box>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
}