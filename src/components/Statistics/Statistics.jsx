import React from 'react';
import { randomColor } from "../../utils/randomColor";
import PropTypes from "prop-types";
import {
    StatisticsSection,
    StatTitle,
    StatList,
    StatItem,
    StatLabel,
    StatPercentage
} from "./Statistics.styles";

function Statistics({ title, stats }) {
    return (
        <StatisticsSection>
            {title && <StatTitle>{title}</StatTitle>}
            <StatList>
                {stats.map(({ id, label, percentage }) => (
                    <StatItem key={id} style={{ backgroundColor: randomColor() }}>
                        <StatLabel>{label}</StatLabel>
                        <StatPercentage>{percentage}%</StatPercentage>
                    </StatItem>
                ))}
            </StatList>
        </StatisticsSection>
    );
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        }),
    ).isRequired,
};
export default Statistics