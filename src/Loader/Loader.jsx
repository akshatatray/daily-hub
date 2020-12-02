import React from 'react';
import './Loader.css';

import { connect } from 'react-redux';

const Loader = (props) => {
     if (props.loading) {
          return (
            <div className="Loader">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                style={{margin: "auto", background: "none", display: "block", shapeRendering: "auto"}}
                width="75px"
                height="75px"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
              >
                <circle
                  cx="50"
                  cy="50"
                  fill="none"
                  stroke="#1ba94c"
                  stroke-width="5"
                  r="45"
                  stroke-dasharray="212.05750411731105 72.68583470577035"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    repeatCount="indefinite"
                    dur="1.3333333333333333s"
                    values="0 50 50;360 50 50"
                    keyTimes="0;1"
                  ></animateTransform>
                </circle>
              </svg>
            </div>
          );
     } else {
          return (
               <> </>
          );
     }
}

const mapStateWithProps = (state) => {
     return {
          loading: state.loading,
     }
}

export default connect(mapStateWithProps) (Loader);