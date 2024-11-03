import { Autocomplete, IconButton, TableCell, TableRow } from '@mui/material';
import { useEffect, useState } from 'react';
import { NumericTextField, TextFieldSmall } from './StyledComponent';
import { Add, Delete } from '@mui/icons-material';
import { formatAmount } from '../../utils/commonUtils';

function FabricRow({ lookUpFabrics, lookUpRolls, usedRolls, handleChange, handleAdd,
  handleDelete, id, position, triggerValidation, isSale, handleSellChange,
  handleModalOpen, setTriggerValidation
}) {
  const [selectedFabric, setSelectedFabric] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedRoll, setSelectedRoll] = useState(null);
  const [colorOptions, setColorOptions] = useState([]);
  const [rollOptions, setRollOptions] = useState([]);
  const [issuedQty, setIssuedQty] = useState(null);
  const [sellQty, setSellQty] = useState(null);
  const [sellPrice, setSellPrice] = useState(null);
  const [errors, setErrors] = useState({ fabric: false, shade: false, qty: false });

useEffect(() => {
    if (triggerValidation) {
      const isValid = validateFields();
      handleModalOpen(isValid);
      setTriggerValidation(false);
    }
  }, [triggerValidation]);

const validateFields = () => {
    const newErrors = {
      fabric: !selectedFabric,
      shade: !selectedColor,
      qty: !selectedRoll,
      sellPrice: isSale ? !sellPrice : false,
      sellQty: isSale ? !sellQty : false
    };
    setErrors(newErrors);
    return !Object.values(newErrors).includes(true);
  };

  useEffect(() => {
    const _rollOptions = selectedColor?.rolls || [];
    const filteredRolls = _rollOptions.filter((roll) => !usedRolls.some((usedRoll) => usedRoll.rollId === roll._id));
    setRollOptions(filteredRolls);
  }, [usedRolls]);

  const handleColorChange = (value) => {
    setSelectedColor(value);
    const _rollOptions = value?.rolls || [];
    const filteredRolls = _rollOptions.filter((roll) => !usedRolls.some((usedRoll) => usedRoll.rollId === roll._id));
    setRollOptions(filteredRolls);
    setSelectedRoll(null);
    setIssuedQty(null);
    setErrors({ ...errors, shade: false, qty: false });
    setSellPrice(null);
    setSellQty();

  };
  const handleFabricChange = (value) => {
    setSelectedFabric(value);
    const _colorOptions = value ? Object.values(lookUpRolls[value.code]) : [];
    setColorOptions(_colorOptions);
    setSelectedColor(null);
    setSelectedRoll(null);
    setRollOptions([]);
    setIssuedQty(null);
    setSellPrice(null);
    setSellQty();
    setErrors({ ...errors, fabric: false });
  };

  const handleRollChange = (value) => {
    setSelectedRoll(value);
    isSale ? setSellQty(value?.availableQty || '') : setIssuedQty(value?.availableQty || '');
    isSale ? handleSellChange('sellQty', value?.availableQty, value?._id, id) : handleChange(value?.availableQty, value?._id, id);
    setErrors({ ...errors, qty: false, sellQty: false });

  };

  const handleIssuedQtyChange = (value) => {
    setIssuedQty(value);
    handleChange(value, selectedRoll._id, id);
  };
  const handleSellQtyChange = (value) => {
    setSellQty(value);
    handleSellChange('sellQty', value, selectedRoll?._id, id);
    setErrors({ ...errors, sellQty: false });

  };
  const handleSellPriceChange = (value) => {
    setSellPrice(value);
    handleSellChange('ratePerPc', value, selectedRoll?._id, id);
    setErrors({ ...errors, sellPrice: false });

  };



  return (
    <TableRow style={{ textAlign: 'center', justifyContent: 'space-between', alignItems: 'center' }}>
      {/* Fabric Selection */}
      <TableCell>
        <Autocomplete
          options={lookUpFabrics || []}
          getOptionLabel={(option) => option.name}
          value={selectedFabric}
          onChange={(e, value) => handleFabricChange(value)}
          renderInput={(params) => (
            <TextFieldSmall
              {...params}
              label="Select Fabric"
              fullWidth
              style={{ width: '12rem' }}
              inputProps={{
                ...params.inputProps,
                navindex: position * 100 + 10
              }}
              error={!!errors.fabric}
              helperText={!!errors.fabric && "Fabric is required"}
            />
          )}
        />
      </TableCell>

      {/* Shade (Color) Selection */}
      <TableCell>
        <Autocomplete
          options={colorOptions}
          getOptionLabel={(shade) => shade.name}
          value={selectedColor}
          onChange={(e, value) => handleColorChange(value)}
          autoHighlight
          renderInput={(params) => (
            <TextFieldSmall
              {...params}
              label="Select Color"
              fullWidth
              style={{ width: '12rem' }}
              inputProps={{
                ...params.inputProps,
                navindex: position * 100 + 11
              }}
              error={!!errors.shade}
              helperText={!!errors.shade && "Color is required"}
            />
          )}
        />
      </TableCell>

      {/* Quantity Selection */}
      <TableCell>
        <Autocomplete
          options={rollOptions}
          value={selectedRoll}
          getOptionLabel={(roll) => ` ${roll?.availableQty} ${roll?.fabric?.unit}` || ''}
          autoHighlight
          size="small"
          onChange={(event, value) => handleRollChange(value)}
          renderInput={(params) => (
            <TextFieldSmall
              {...params}
              label="Select Qty"
              fullWidth
              style={{ width: '10rem' }}
              inputProps={{
                ...params.inputProps,
                navindex: position * 100 + 12
              }}
              error={!!errors.qty}
              helperText={!!errors.qty && "Quantity is required"}
            />
          )}
        />
      </TableCell>
      <TableCell>
        {selectedRoll?.rate ? `${formatAmount(selectedRoll?.rate)}/${selectedRoll?.fabric.unit}` : '-'}
      </TableCell>

      {/* Rate */}
      {isSale ? (<>
        {/* sellQty */}
        <TableCell>
          <NumericTextField
            value={sellQty}
            onChange={(e) => {
              const newValue = e.target.value === '' ? '' : Math.min(selectedRoll?.availableQty, e.target.value);
              handleSellQtyChange(newValue);
            }}
            style={{ width: '70px' }}
            inputProps={{
              navindex: position * 100 + 13
            }}
            error={!!errors.sellQty}
            helperText={!!errors.sellQty && "Required"}
            disabled={!selectedRoll}
          />
        </TableCell>
        {/* sell price */}
        <TableCell>
          <NumericTextField
            value={sellPrice}
            onChange={(e) => {
              const newValue = e.target.value;
              handleSellPriceChange(newValue);
            }}
            style={{ width: '70px' }}
            inputProps={{
              navindex: position * 100 + 14
            }}
            error={!!errors.sellPrice}
            helperText={!!errors.sellPrice && "Required"}
            disabled={!selectedRoll}
          />
        </TableCell>
        <TableCell>
          {(sellPrice && sellQty) ? formatAmount(sellPrice * sellQty) : ''}
        </TableCell>
      </>) : (<>

        {/* Issued Quantity */}
        <TableCell>
          <NumericTextField
            value={issuedQty}
            onChange={(e) => {
              const newValue = e.target.value === '' ? '' : Math.min(selectedRoll?.availableQty, e.target.value);
              handleIssuedQtyChange(newValue);
            }}
            style={{ width: '70px' }}
            inputProps={{
              navindex: position * 100 + 13
            }}
          />
        </TableCell></>)}

      {/* Actions */}
      <TableCell>
        {/* Delete Action */}
        {usedRolls?.length !== 1 && (
          <IconButton onClick={() => handleDelete(id)} aria-label="delete" size="small">
            <Delete />
          </IconButton>
        )}

        {/* Add New Design Action */}
        {position === usedRolls?.length - 1 && (
          <IconButton
            onClick={() => {
              if (validateFields()) {
                handleAdd();


              }
            }}
            // navindex={ position * 100 + 6}
            aria-label="add"
            size="small"
          >
            <Add />
          </IconButton>
        )}
      </TableCell>
    </TableRow>
  );
}

export default FabricRow;
