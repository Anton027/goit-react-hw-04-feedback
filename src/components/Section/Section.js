import PropTypes from 'prop-types';
import { Box } from 'components/Box';


export const Section = ({ title, children }) => {
    return (
        <Box as="section"
            marginLeft="50px"
            marginRight="auto"
            marginTop="30px"
        >
            <Box as="h2" marginBottom="15px">
                {title}
            </Box>
            {children}
        </Box>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired
    
}