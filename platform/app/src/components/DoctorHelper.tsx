import React from "react";
import AreaChart from "./Charts/AreaChart";
import ScatterChart from "./Charts/ScatterChart";
import {useLocation} from "react-router";
import {Button, Icon} from "@ohif/ui";
import {useNavigate} from "react-router-dom";

const DoctorHelper: React.FC = (props) => {
    const { state } = useLocation();
    const navigate = useNavigate();

    return (
        <div>
            <Button
                disabled={false}
                startIconTooltip={null}
                startIcon={
                    <Icon
                        className="!h-[20px] !w-[20px] text-black"
                        name={'launch-arrow'}
                    />
                } // launch-arrow | launch-info
                onClick={() => {navigate('/', { replace: true });}}
                className={'text-[13px]'}
            >
                {"Home"}
            </Button>
            <div>
                <ScatterChart mrn={state.mrn}/>
            </div>
            <div>
                <AreaChart mrn={state.mrn}/>
            </div>
        </div>
    );
}

export default DoctorHelper;