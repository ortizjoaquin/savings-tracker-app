import Indicator from "../components/shared/Indicator"
import Button from "../components/shared/Button"
import Card from "../components/shared/Card"

function Saving() {

  return (
  <div>
      <Indicator
        title='New Car'
        amount='10000'
        varAmount='9000'
      />
      <Button
        version='add'
      />
  </div>
  )
}

export default Saving