import React from 'react';
import PropTypes from "prop-types";
import { Ratinglist, Ratingitem, Ratinglabel, Ratingquantity } from "./Rating.styles";
import { ratingConfig } from '../../utils/ratingConfig';

function Rating() {
    return (
        <Ratinglist>
            {ratingConfig.map(({ label, quantity }) => (
                <Ratingitem key={label}>
                    <Ratinglabel>{label}</Ratinglabel>
                    <Ratingquantity>{quantity}</Ratingquantity>
                </Ratingitem>
            ))}
        </Ratinglist>
    );
};
Rating.propTypes = {
    label: PropTypes.string,
    quantity: PropTypes.number,
};


export default Rating
