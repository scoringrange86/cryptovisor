import "./AnalysisPage.css"
import LeftPanel from '../Components/LeftPanel'
import RightPanel from '../Components/RightPanel'

const Analysis = () => {

    return (
        <div className="contents-wrapper">
        {/* <div className="leftpanel-wrapper"> */}
             <LeftPanel />
        {/* </div> */}
         {/* <div className="rightpanel-wrapper"> */}
             <RightPanel />
         {/* </div> */}
    </div> 
    )
}

export default Analysis