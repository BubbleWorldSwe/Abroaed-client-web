import { useContext, useEffect, useState } from "react";
import FabricRow from "./FabricRow"
import RollService from "../../services/inventory/rollService";
import { UserContext } from "../../contexts/userContext";
import { StyledTable, StyledTableContainer } from "./StyledComponent";
import { Paper, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

function FabricTable(
    { rollsDetails,
        setIssuanceDetails,
        triggerValidation,
        isSale,
        handleModalOpen,
        setTriggerValidation
    }
) {

    const user = useContext(UserContext);
    const rollService = new RollService(user);
    const [lookUpFabrics, setLookUpFabrics] = useState([]);
    const [lookUpRolls, setLookUpRolls] = useState({});
    const [rollCount, setRollCount] = useState(0);
    const getRolls = async () => {
        const rolls = await rollService.getRollsByStatus(false, 'available', true);
        const { _lookupFabrics, _lookUpRolls } = precomputeMappings(rolls);
        setLookUpFabrics(_lookupFabrics);
        setLookUpRolls(_lookUpRolls);
    };

    const precomputeMappings = (data) => {
        const _lookUpRolls = {};
        const _lookupFabrics = [];
        data.forEach((item) => {
            const fabricCode = item.fabric.code;
            const shadeCode = item.shade.code;
            const shadeName = item.shade.name;
            if (!_lookupFabrics.some((fabric) => fabric.code === fabricCode)) {
                _lookupFabrics.push({
                    name: item.fabric.name,
                    unit: item.fabric.unit,
                    code: fabricCode
                });
            }
            if (!_lookUpRolls[fabricCode]) {
                _lookUpRolls[fabricCode] = {};
            }
            if (!_lookUpRolls[fabricCode][shadeCode]) {
                _lookUpRolls[fabricCode][shadeCode] = {
                    name: shadeName,
                    rolls: []
                };
            }
            _lookUpRolls[fabricCode][shadeCode].rolls.push(item);
        });

        return { _lookUpRolls, _lookupFabrics };
    };

    useEffect(() => {
        getRolls();
    }, []);
    // useEffect(() => {
    //     const { _lookupFabrics, _lookUpRolls } = precomputeMappings(rolls);
    //     setLookUpFabrics(_lookupFabrics);
    //     setLookUpRolls(_lookUpRolls);
    // }, []);

    const handleDeleteRow = (id) => {
        setIssuanceDetails((prev) => ({
            ...prev,
            rolls: prev.rolls.filter((roll) => roll.id !== id)
        }));
    };
    const handleChange = (issuedQty, rollId, id) => {
        const rolls = [...rollsDetails];
        const rollToUpdateIndex = rolls.findIndex((roll) => roll.id === id);
        rolls[rollToUpdateIndex] = {
            id,
            issuedQty,
            rollId
        };
        setIssuanceDetails((prev) => ({
            ...prev,
            rolls
        }));
    };
    const handleSellChange = (field, value, rollId, id) => {
        const rolls = [...rollsDetails];
        const rollToUpdateIndex = rolls.findIndex((roll) => roll.id === id);
        rolls[rollToUpdateIndex] = {
            ...rolls[rollToUpdateIndex],
            id,
             rollId,
            [field]:value
        };
        setIssuanceDetails((prev) => ({
            ...prev,
            rolls
        }));
    };

    const handleNewRow = () => {
        const newRollCount = rollCount + 1;
        setIssuanceDetails((prev) => ({
            ...prev,
            rolls: [...prev.rolls, { id: newRollCount }]
        }));
        setRollCount(newRollCount);
    };
    return (
        <StyledTableContainer component={Paper}>
            <StyledTable size="small">
                <TableHead>
                    <TableRow style={{ background: '#d5d6d7', textAlign: 'center' }}>
                        <TableCell>Fabric</TableCell>
                        <TableCell>Shade</TableCell>
                        <TableCell>Qty</TableCell>
                        <TableCell>{isSale ? 'Purchase rate' : 'Rate'}</TableCell>
                        {/* <TableCell>Available Qty</TableCell> */}
                        <TableCell>{isSale ? 'Sell Qty' : 'Issued Qty'}</TableCell>
                        {isSale && (<><TableCell>Sell Price</TableCell>
                            <TableCell>Amount</TableCell></>)}
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rollsDetails?.map((roll, index) => (
                        <FabricRow
                            key={roll.id}
                            lookUpFabrics={lookUpFabrics}
                            lookUpRolls={lookUpRolls}
                            usedRolls={rollsDetails}
                            handleChange={handleChange}
                            handleAdd={handleNewRow}
                            handleDelete={handleDeleteRow}
                            id={roll.id}
                            position={index}
                            triggerValidation={triggerValidation}
                            isSale={isSale}
                            handleSellChange={handleSellChange}
                            handleModalOpen={handleModalOpen}
                            setTriggerValidation={setTriggerValidation}

                        />
                    )) || null}
                </TableBody>
            </StyledTable>
        </StyledTableContainer>
    );

}

export default FabricTable