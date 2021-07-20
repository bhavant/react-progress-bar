import React from 'react';

const ProductAddedStepper = ({
  minProductsReq,
  maxProductsAllowed,
  currentInCartCount,
  stepMessages,
}) => {

  const renderStep = (stepNum) => {
    if (stepMessages[stepNum+1]) {
      return (
        <div key={stepNum} id={'step' + stepNum}>
          <div className={"numberCircle " + (stepNum + 1 <= currentInCartCount ? 'blackBackground' : 'whiteBackground')}>{stepNum + 1}</div>
          <div className={"fixedMsg " + (stepNum + 1 <= currentInCartCount ? 'checkMark' : '')}>{stepMessages[stepNum + 1]}</div>
        </div>
      )
    } else {
      return (
        <div key={stepNum} id={'step' + stepNum} className={"boxStd " + (stepNum + 1 <= currentInCartCount ? 'blackBackground' : 'whiteBackground')}>
        </div>
      )
    }
  }

  const renderMsg = (stepNum) => {
    if (stepMessages[stepNum + 1]) {
      return (
        <div key={stepNum} id={'msg' + stepNum}>
          {stepMessages[stepNum + 1]}
        </div>
      )
    } else {
      return (
        <div key={stepNum} id={'msg' + stepNum} className={"boxStdTr"}>
          &nbsp;
        </div>
      )
    }
  }

  return (
    <>
      <div className="d-none d-md-flex stepperClass">
        {
          [...Array(maxProductsAllowed)].map((_, i) => {
              return renderStep(i);
          })
        }
      </div>
      {/* <div className="d-none d-md-flex stepperClass">
        {
          [...Array(maxProductsAllowed)].map((_, i) => {
            return renderMsg(i);
          })
        }
      </div> */}
    </>
  )
}

export default ProductAddedStepper;